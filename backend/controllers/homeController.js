const axios = require('axios')
const cheerio = require('cheerio');

const fetchDivFromESPN = async (req, res) => {

    const url = 'https://www.espncricinfo.com/live-cricket-score'; // Change this if necessary

    try {
        // Fetch HTML content from the ESPN page
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept-Language': 'en-US,en;q=0.9'
            }
        });
        //     const html = await response.text();
        // const $ = cheerio.load(html);

        // // Select the div by class and ng-init attribute
        //  const liveUpdatesDiv = $('div.cb-col.cb-col-100.cb-rank-tabs');

        // if (liveUpdatesDiv.length === 0) {
        //   return res.status(404).json({ error: 'Live updates div not found in static HTML' });
        // }

        // // Extract HTML content inside the div
        // const divContent = liveUpdatesDiv.html();

        // // Extract all inline <style> tags content
        // let inlineStyles = '';
        // $('style').each((i, el) => {
        //   inlineStyles += $(el).html() + '\n';
        // });

        // // Extract all <link rel="stylesheet"> hrefs (absolute URLs)
        // const cssLinks = [];
        // $('link[rel="stylesheet"]').each((i, el) => {
        //   const href = $(el).attr('href');
        //   if (href) {
        //     cssLinks.push(href.startsWith('http') ? href : new URL(href, url).href);
        //   }
        // });

        // Send all to frontend
        // res.json({ divContent, cssLinks, inlineStyles });

        const html = await response.text();
        const $ = cheerio.load(html);

        // Find the h2 heading with "Live Cricket Matches"
        const heading = $('h2').filter((i, el) => $(el).text().trim() === 'Live Cricket Matches');

        // Get the parent div container holding the matches section
        const containerDiv = heading.parent();

        if (!containerDiv.length) {
            return res.status(404).json({ error: 'Live Cricket Matches section not found' });
        }

        // Rewrite all image src attributes to go through your proxy
        containerDiv.find('img').each((i, el) => {
            const $img = $(el);
            const realSrc = $img.attr('data-src') || $img.attr('data-lazy-src') || $img.attr('src');

            if (!realSrc) return;

            // Avoid placeholder
            if (realSrc.includes('lazyimage-transparent.png')) return;

            const proxiedSrc = `/image-proxy?url=${encodeURIComponent(realSrc)}`;

            $img.attr('src', proxiedSrc);

            // Remove lazy loading attributes so they don’t interfere
            $img.removeAttr('data-src');
            $img.removeAttr('data-lazy-src');
        });

        // Extract cleaned HTML content from the section
        const divContent = containerDiv.html();

        // Extract all linked CSS stylesheet URLs, converting relative to absolute URLs
        const cssLinks = [];
        $('link[rel="stylesheet"]').each((i, el) => {
            const href = $(el).attr('href');
            if (href) {
                cssLinks.push(href.startsWith('http') ? href : `https://www.espncricinfo.com${href}`);
            }
        });

        // Extract all inline <style> tag contents into one string
        let inlineStyles = '';
        $('style').each((i, el) => {
            inlineStyles += $(el).html() + '\n';
        });

        // Send the section HTML, stylesheets, and inline styles to frontend
        res.json({ divContent, cssLinks, inlineStyles });
    } catch (error) {
        console.error('Error fetching or extracting content:', error);
        return null;
    }
}

module.exports = { fetchDivFromESPN }