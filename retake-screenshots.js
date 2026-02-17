import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function retakeScreenshots() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to 1280x800
  console.log('Setting viewport to 1280x800...');
  await page.setViewport({ 
    width: 1280, 
    height: 800
  });

  // About pages - VIEWPORT ONLY screenshots
  const aboutPages = [
    { url: 'http://localhost:5174/about/events', filename: 'about-events.png', name: 'About Events' },
    { url: 'http://localhost:5174/about/equipment', filename: 'about-equipment.png', name: 'About Equipment' },
    { url: 'http://localhost:5174/about/mv-cm', filename: 'about-mv-cm.png', name: 'About MV/CM' },
    { url: 'http://localhost:5174/about/studio-rental', filename: 'about-studio-rental.png', name: 'About Studio Rental' }
  ];

  console.log('\n=== Capturing About Pages (VIEWPORT ONLY) ===');
  for (const pageInfo of aboutPages) {
    console.log(`\nNavigating to ${pageInfo.name}...`);
    await page.goto(pageInfo.url, { 
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait 5 seconds for full load
    console.log('Waiting 5 seconds for content to fully load...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Scroll to top to ensure we capture from the beginning
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(resolve => setTimeout(resolve, 500));

    console.log(`Capturing ${pageInfo.name} (viewport only)...`);
    await page.screenshot({
      path: join(__dirname, 'docs/screenshots', pageInfo.filename),
      fullPage: false  // CRITICAL: viewport only, not full page
    });
    console.log(`✓ Saved: ${pageInfo.filename}`);
  }

  // Main page sections - VIEWPORT ONLY screenshots
  console.log('\n=== Capturing Main Page Sections (VIEWPORT ONLY) ===');
  
  // 5. FV/Hero section
  console.log('\nNavigating to main page...');
  await page.goto('http://localhost:5174/', { 
    waitUntil: 'networkidle2',
    timeout: 30000
  });
  
  console.log('Waiting 5 seconds for content to fully load...');
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  console.log('Capturing FV/Hero section...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({
    path: join(__dirname, 'docs/screenshots/fv-logo-pc.png'),
    fullPage: false  // Viewport only
  });
  console.log('✓ Saved: fv-logo-pc.png');

  // 6. Explore section
  console.log('\nScrolling to Explore section...');
  await page.evaluate(() => window.scrollBy(0, 900));
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  console.log('Capturing Explore section...');
  await page.screenshot({
    path: join(__dirname, 'docs/screenshots/explore-section-pc.png'),
    fullPage: false  // Viewport only
  });
  console.log('✓ Saved: explore-section-pc.png');

  // 7. Floor Map section
  console.log('\nScrolling to Floor Map section...');
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  console.log('Capturing Floor Map section...');
  await page.screenshot({
    path: join(__dirname, 'docs/screenshots/floormap-pc.png'),
    fullPage: false  // Viewport only
  });
  console.log('✓ Saved: floormap-pc.png');

  // 8. About This Venue section
  console.log('\nScrolling to About This Venue section...');
  await page.evaluate(() => window.scrollBy(0, 1500));
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  console.log('Capturing About This Venue section...');
  await page.screenshot({
    path: join(__dirname, 'docs/screenshots/about-venue-pc.png'),
    fullPage: false  // Viewport only
  });
  console.log('✓ Saved: about-venue-pc.png');

  await browser.close();
  console.log('\n✅ All screenshots retaken successfully with viewport-only captures!');
  console.log('📝 Note: All screenshots are viewport-only (1280x800) to avoid transparent background issues.');
}

retakeScreenshots().catch(error => {
  console.error('Error capturing screenshots:', error);
  process.exit(1);
});
