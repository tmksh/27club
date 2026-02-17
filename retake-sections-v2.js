import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function retakeTopPageSections() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  console.log('Setting viewport to 1280x800...');
  await page.setViewport({ 
    width: 1280, 
    height: 800
  });

  console.log('\nNavigating to http://localhost:5174/...');
  await page.goto('http://localhost:5174/', { 
    waitUntil: 'networkidle2',
    timeout: 30000
  });
  
  console.log('Waiting 5 seconds for full load...');
  await new Promise(resolve => setTimeout(resolve, 5000));

  // 1. Capture Explore Section
  console.log('\n=== Capturing Explore Section ===');
  try {
    // Find element containing "Explore" text
    const exploreSelectors = [
      'text/Explore',
      'text/THE 27 CLUBをより楽しむための情報',
      'text/GUEST FLOW'
    ];
    
    let exploreElement = null;
    for (const selector of exploreSelectors) {
      try {
        exploreElement = await page.waitForSelector(selector, { timeout: 5000 });
        if (exploreElement) {
          console.log(`Found Explore section using selector: ${selector}`);
          break;
        }
      } catch (e) {
        continue;
      }
    }
    
    if (exploreElement) {
      // Scroll to the element
      await exploreElement.evaluate(el => {
        const parent = el.closest('section') || el.parentElement;
        parent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('Taking screenshot of Explore section...');
      await page.screenshot({
        path: join(__dirname, 'docs/screenshots/explore-section-pc.png'),
        fullPage: false
      });
      console.log('✓ Saved: explore-section-pc.png');
    } else {
      console.log('⚠ Could not find Explore section');
    }
  } catch (error) {
    console.log('Error capturing Explore section:', error.message);
  }

  // 2. Capture Floor Map Section
  console.log('\n=== Capturing Floor Map Section ===');
  try {
    // Look for Floor Map related elements
    const floorMapSelectors = [
      'text/Floor Map',
      'text/Select Table',
      'text/V.I.P. SEAT',
      '[class*="floor"]',
      '[id*="floor"]'
    ];
    
    let floorMapElement = null;
    for (const selector of floorMapSelectors) {
      try {
        const elements = await page.$$(selector);
        if (elements.length > 0) {
          floorMapElement = elements[0];
          console.log(`Found Floor Map section using selector: ${selector}`);
          break;
        }
      } catch (e) {
        continue;
      }
    }
    
    if (floorMapElement) {
      await floorMapElement.evaluate(el => {
        const parent = el.closest('section') || el.parentElement;
        parent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('Taking screenshot of Floor Map section...');
      await page.screenshot({
        path: join(__dirname, 'docs/screenshots/floormap-pc.png'),
        fullPage: false
      });
      console.log('✓ Saved: floormap-pc.png');
    } else {
      console.log('⚠ Could not find Floor Map section');
    }
  } catch (error) {
    console.log('Error capturing Floor Map section:', error.message);
  }

  // 3. Capture About This Venue Section
  console.log('\n=== Capturing About This Venue Section ===');
  try {
    // Look for About This Venue related elements
    const aboutSelectors = [
      'text/About This Venue',
      'text/イベント実績',
      'text/プロ仕様設備',
      'text/MV・CM撮影',
      'text/会場について'
    ];
    
    let aboutElement = null;
    for (const selector of aboutSelectors) {
      try {
        aboutElement = await page.waitForSelector(selector, { timeout: 3000 });
        if (aboutElement) {
          console.log(`Found About This Venue section using selector: ${selector}`);
          break;
        }
      } catch (e) {
        continue;
      }
    }
    
    if (aboutElement) {
      await aboutElement.evaluate(el => {
        const parent = el.closest('section') || el.parentElement;
        parent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('Taking screenshot of About This Venue section...');
      await page.screenshot({
        path: join(__dirname, 'docs/screenshots/about-venue-pc.png'),
        fullPage: false
      });
      console.log('✓ Saved: about-venue-pc.png');
    } else {
      console.log('⚠ Could not find About This Venue section');
    }
  } catch (error) {
    console.log('Error capturing About This Venue section:', error.message);
  }

  await new Promise(resolve => setTimeout(resolve, 2000));
  await browser.close();
  console.log('\n✅ Screenshot capture complete!');
}

retakeTopPageSections().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
