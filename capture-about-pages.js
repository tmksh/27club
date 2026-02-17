import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function captureAboutPages() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1080 });

  const pages = [
    { url: 'http://localhost:5174/about/events', filename: 'about-events.png', name: 'About Events' },
    { url: 'http://localhost:5174/about/equipment', filename: 'about-equipment.png', name: 'About Equipment' },
    { url: 'http://localhost:5174/about/mv-cm', filename: 'about-mv-cm.png', name: 'About MV/CM' },
    { url: 'http://localhost:5174/about/studio-rental', filename: 'about-studio-rental.png', name: 'About Studio Rental' }
  ];

  for (const pageInfo of pages) {
    console.log(`Navigating to ${pageInfo.name}...`);
    await page.goto(pageInfo.url, { 
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Scroll to top to ensure we capture from the beginning
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(resolve => setTimeout(resolve, 500));

    console.log(`Capturing ${pageInfo.name}...`);
    await page.screenshot({
      path: join(__dirname, 'docs/screenshots', pageInfo.filename),
      fullPage: true
    });
    console.log(`✓ Saved: ${pageInfo.filename}`);
  }

  await browser.close();
  console.log('\n✅ All About page screenshots captured successfully!');
}

captureAboutPages().catch(error => {
  console.error('Error capturing screenshots:', error);
  process.exit(1);
});
