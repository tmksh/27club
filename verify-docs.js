import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function verifyDocPages() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });
  
  const page = await browser.newPage();
  
  // Set desktop viewport
  console.log('Setting desktop viewport (1280x900)...');
  await page.setViewport({ 
    width: 1280, 
    height: 900
  });

  // 1. Check changelog.html
  console.log('\n=== Checking changelog.html ===');
  const changelogPath = 'file:///Users/fujiwarajukito/Documents/GitHub/27club/docs/changelog.html';
  console.log(`Navigating to ${changelogPath}...`);
  
  try {
    await page.goto(changelogPath, { 
      waitUntil: 'networkidle2',
      timeout: 10000
    });
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Screenshot 1: Top of changelog page
    console.log('Capturing top of changelog page...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(resolve => setTimeout(resolve, 500));
    await page.screenshot({
      path: join(__dirname, 'docs/screenshots/verify-changelog-top.png'),
      fullPage: false
    });
    console.log('✓ Saved: verify-changelog-top.png');

    // Screenshot 2: Scroll down to see more sections
    console.log('Scrolling down to see more sections...');
    await page.evaluate(() => window.scrollBy(0, 800));
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.screenshot({
      path: join(__dirname, 'docs/screenshots/verify-changelog-middle.png'),
      fullPage: false
    });
    console.log('✓ Saved: verify-changelog-middle.png');

    // Screenshot 3: Scroll to About This Venue section (section 8)
    console.log('Scrolling to About This Venue section...');
    const aboutSection = await page.$('h3#about-this-venue');
    if (aboutSection) {
      await aboutSection.evaluate(el => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      await new Promise(resolve => setTimeout(resolve, 1500));
    } else {
      // Fallback: scroll to approximate position
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.7));
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    await page.screenshot({
      path: join(__dirname, 'docs/screenshots/verify-changelog-about-venue.png'),
      fullPage: false
    });
    console.log('✓ Saved: verify-changelog-about-venue.png');

    // Get page info
    const pageInfo = await page.evaluate(() => {
      return {
        title: document.title,
        h1: document.querySelector('h1')?.textContent || 'No H1 found',
        imageCount: document.querySelectorAll('img').length,
        brokenImages: Array.from(document.querySelectorAll('img')).filter(img => !img.complete || img.naturalHeight === 0).length,
        sections: document.querySelectorAll('section, h2, h3').length
      };
    });

    console.log('\nChangelog Page Info:');
    console.log(`  Title: ${pageInfo.title}`);
    console.log(`  H1: ${pageInfo.h1}`);
    console.log(`  Total Images: ${pageInfo.imageCount}`);
    console.log(`  Broken Images: ${pageInfo.brokenImages}`);
    console.log(`  Sections: ${pageInfo.sections}`);

  } catch (error) {
    console.error('Error loading changelog.html:', error.message);
  }

  // 2. Check index.html
  console.log('\n=== Checking index.html ===');
  const indexPath = 'file:///Users/fujiwarajukito/Documents/GitHub/27club/docs/index.html';
  console.log(`Navigating to ${indexPath}...`);
  
  try {
    await page.goto(indexPath, { 
      waitUntil: 'networkidle2',
      timeout: 10000
    });
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Screenshot of index page
    console.log('Capturing index page...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(resolve => setTimeout(resolve, 500));
    await page.screenshot({
      path: join(__dirname, 'docs/screenshots/verify-index.png'),
      fullPage: true
    });
    console.log('✓ Saved: verify-index.png');

    // Get page info and check for links
    const indexInfo = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'));
      return {
        title: document.title,
        h1: document.querySelector('h1')?.textContent || 'No H1 found',
        totalLinks: links.length,
        changelogLink: links.find(a => a.href.includes('changelog') || a.textContent.includes('Changelog') || a.textContent.includes('changelog')),
        snsApiLink: links.find(a => a.href.includes('SNS_API') || a.textContent.includes('SNS API') || a.textContent.includes('API')),
        allLinkTexts: links.map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') }))
      };
    });

    console.log('\nIndex Page Info:');
    console.log(`  Title: ${indexInfo.title}`);
    console.log(`  H1: ${indexInfo.h1}`);
    console.log(`  Total Links: ${indexInfo.totalLinks}`);
    console.log(`  Has Changelog Link: ${indexInfo.changelogLink ? '✓ Yes' : '✗ No'}`);
    if (indexInfo.changelogLink) {
      console.log(`    Text: "${indexInfo.changelogLink.textContent.trim()}"`);
      console.log(`    Href: ${indexInfo.changelogLink.href}`);
    }
    console.log(`  Has SNS API Link: ${indexInfo.snsApiLink ? '✓ Yes' : '✗ No'}`);
    if (indexInfo.snsApiLink) {
      console.log(`    Text: "${indexInfo.snsApiLink.textContent.trim()}"`);
      console.log(`    Href: ${indexInfo.snsApiLink.href}`);
    }
    
    if (indexInfo.allLinkTexts.length > 0) {
      console.log('\n  All Links:');
      indexInfo.allLinkTexts.forEach((link, i) => {
        console.log(`    ${i + 1}. "${link.text}" -> ${link.href}`);
      });
    }

  } catch (error) {
    console.error('Error loading index.html:', error.message);
  }

  await browser.close();
  console.log('\n✅ Documentation verification complete!');
}

verifyDocPages().catch(error => {
  console.error('Error verifying documentation:', error);
  process.exit(1);
});
