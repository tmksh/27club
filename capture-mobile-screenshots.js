import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function captureMobileScreenshots() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set mobile viewport (iPhone X dimensions)
  console.log('Setting mobile viewport (375x812)...');
  await page.setViewport({ 
    width: 375, 
    height: 812,
    isMobile: true,
    hasTouch: true
  });

  console.log('Navigating to http://localhost:5174/...');
  await page.goto('http://localhost:5174/', { 
    waitUntil: 'networkidle2',
    timeout: 30000
  });
  
  // Wait for initial load
  console.log('Waiting for content to load...');
  await new Promise(resolve => setTimeout(resolve, 3000));

  // 1. FV (First View) with Logo - Hero section at the top
  console.log('Capturing FV with Logo (mobile)...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({
    path: join(__dirname, 'docs/screenshots/fv-logo-sp.png'),
    fullPage: false
  });
  console.log('✓ Saved: fv-logo-sp.png');

  // 2. Explore Section - Scroll down ~900px
  console.log('Scrolling to Explore section...');
  await page.evaluate(() => window.scrollBy(0, 900));
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('Capturing Explore Section (mobile)...');
  await page.screenshot({
    path: join(__dirname, 'docs/screenshots/explore-section-sp.png'),
    fullPage: false
  });
  console.log('✓ Saved: explore-section-sp.png');

  // 3. Floor Map Section - Scroll down another ~800px
  console.log('Scrolling to Floor Map section...');
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('Capturing Floor Map Section (mobile)...');
  await page.screenshot({
    path: join(__dirname, 'docs/screenshots/floormap-sp.png'),
    fullPage: false
  });
  console.log('✓ Saved: floormap-sp.png');

  // 4. About This Venue Section - Scroll down another ~1500px
  console.log('Scrolling to About This Venue section...');
  await page.evaluate(() => window.scrollBy(0, 1500));
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('Capturing About This Venue Section (mobile)...');
  await page.screenshot({
    path: join(__dirname, 'docs/screenshots/about-venue-sp.png'),
    fullPage: false
  });
  console.log('✓ Saved: about-venue-sp.png');

  await browser.close();
  console.log('\n✅ All mobile screenshots captured successfully!');
}

captureMobileScreenshots().catch(error => {
  console.error('Error capturing screenshots:', error);
  process.exit(1);
});
