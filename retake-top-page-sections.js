import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function retakeTopPageScreenshots() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: false, // Use visible browser to verify positioning
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to 1280x800
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

  // Helper function to check what's visible on screen
  async function checkVisibleContent() {
    return await page.evaluate(() => {
      const visible = [];
      const elements = document.querySelectorAll('h2, h3, .section-title, [class*="title"]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          visible.push({
            tag: el.tagName,
            text: el.textContent.trim().substring(0, 100),
            top: Math.round(rect.top)
          });
        }
      });
      return visible;
    });
  }

  // 1. Find and capture Explore section
  console.log('\n=== Finding Explore Section ===');
  
  // Scroll to find Explore section
  let exploreFound = false;
  let scrollAttempts = 0;
  const maxScrollAttempts = 20;
  
  while (!exploreFound && scrollAttempts < maxScrollAttempts) {
    const content = await checkVisibleContent();
    console.log(`Scroll attempt ${scrollAttempts + 1}:`);
    content.forEach(item => console.log(`  - ${item.text}`));
    
    const hasExplore = content.some(item => 
      item.text.toLowerCase().includes('explore') || 
      item.text.includes('GUEST FLOW') ||
      item.text.includes('楽しむための情報')
    );
    
    if (hasExplore) {
      console.log('\n✓ Found Explore section!');
      exploreFound = true;
      
      // Fine-tune position to center the section
      const exploreElement = await page.$('text/Explore');
      if (exploreElement) {
        await exploreElement.evaluate(el => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      console.log('Capturing Explore section...');
      await page.screenshot({
        path: join(__dirname, 'docs/screenshots/explore-section-pc.png'),
        fullPage: false
      });
      console.log('✓ Saved: explore-section-pc.png');
    } else {
      await page.evaluate(() => window.scrollBy(0, 400));
      await new Promise(resolve => setTimeout(resolve, 1000));
      scrollAttempts++;
    }
  }

  if (!exploreFound) {
    console.log('⚠ Could not find Explore section');
  }

  // 2. Find and capture Floor Map section
  console.log('\n=== Finding Floor Map Section ===');
  
  let floorMapFound = false;
  scrollAttempts = 0;
  
  while (!floorMapFound && scrollAttempts < maxScrollAttempts) {
    const content = await checkVisibleContent();
    console.log(`Scroll attempt ${scrollAttempts + 1}:`);
    content.forEach(item => console.log(`  - ${item.text}`));
    
    const hasFloorMap = content.some(item => 
      item.text.toLowerCase().includes('floor map') ||
      item.text.includes('VIP') ||
      item.text.includes('STAGE')
    );
    
    if (hasFloorMap) {
      console.log('\n✓ Found Floor Map section!');
      floorMapFound = true;
      
      // Fine-tune position
      const floorMapElement = await page.$('text/Floor Map');
      if (floorMapElement) {
        await floorMapElement.evaluate(el => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      console.log('Capturing Floor Map section...');
      await page.screenshot({
        path: join(__dirname, 'docs/screenshots/floormap-pc.png'),
        fullPage: false
      });
      console.log('✓ Saved: floormap-pc.png');
    } else {
      await page.evaluate(() => window.scrollBy(0, 400));
      await new Promise(resolve => setTimeout(resolve, 1000));
      scrollAttempts++;
    }
  }

  if (!floorMapFound) {
    console.log('⚠ Could not find Floor Map section');
  }

  // 3. Find and capture About This Venue section
  console.log('\n=== Finding About This Venue Section ===');
  
  let aboutVenueFound = false;
  scrollAttempts = 0;
  
  while (!aboutVenueFound && scrollAttempts < maxScrollAttempts) {
    const content = await checkVisibleContent();
    console.log(`Scroll attempt ${scrollAttempts + 1}:`);
    content.forEach(item => console.log(`  - ${item.text}`));
    
    const hasAboutVenue = content.some(item => 
      item.text.toLowerCase().includes('about this venue') ||
      item.text.includes('会場について') ||
      item.text.includes('イベント実績')
    );
    
    if (hasAboutVenue) {
      console.log('\n✓ Found About This Venue section!');
      aboutVenueFound = true;
      
      // Fine-tune position
      const aboutElement = await page.$('text/About This Venue');
      if (aboutElement) {
        await aboutElement.evaluate(el => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      console.log('Capturing About This Venue section...');
      await page.screenshot({
        path: join(__dirname, 'docs/screenshots/about-venue-pc.png'),
        fullPage: false
      });
      console.log('✓ Saved: about-venue-pc.png');
    } else {
      await page.evaluate(() => window.scrollBy(0, 400));
      await new Promise(resolve => setTimeout(resolve, 1000));
      scrollAttempts++;
    }
  }

  if (!aboutVenueFound) {
    console.log('⚠ Could not find About This Venue section');
  }

  await new Promise(resolve => setTimeout(resolve, 2000));
  await browser.close();
  console.log('\n✅ Screenshots retaken with verified section positioning!');
}

retakeTopPageScreenshots().catch(error => {
  console.error('Error capturing screenshots:', error);
  process.exit(1);
});
