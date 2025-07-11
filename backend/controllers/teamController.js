const cheerio = require('cheerio')

const SeeTeam = async (req, res) => {
    const { url } = req.body;

    console.log(url)

    if (!url || !url.startsWith("https://www.cricbuzz.com/")) {
        return res.status(400).json({ error: "Invalid or missing URL" });
    }

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept-Language': 'en-US,en;q=0.9'
            }
        });
        const html = await response.text();
        const $ = cheerio.load(html);

        // Get the entire <div> including the div tag itself (outer HTML)
        const structured = [];
    let currentRole = null;

    $('.cb-col-67.cb-col.cb-left.cb-top-zero').children().each((_, el) => {
      const $el = $(el);
      if ($el.is('h3.cb-sqd-rol')) {
        currentRole = $el.text().trim();
        structured.push({ role: currentRole, players: [] });
      } else if ($el.is('a.cb-col.cb-col-50')) {
        const lastSection = structured[structured.length - 1];
        const name = $el.attr('title') || $el.find('.cb-font-16').text().trim();
        const img = $el.find('img').attr('src');
        const link = $el.attr('href');
        if (lastSection) {
          lastSection.players.push({ name, img, url: link });
        }
      }
    });

    res.json(structured);
    } catch (err) {
        console.error("Error scraping Cricbuzz:", err.message);
        return res.status(500).json({ error: "Failed to fetch players" });
    }
}

module.exports = { SeeTeam }