const cheerio = require('cheerio');

const fetchPlayers = async (url, country) => {
    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Accept-Language': 'en-US,en;q=0.9'
        }
    });
    const html = await response.text();
    const $ = cheerio.load(html);

    const players = [];
    $('table.table tbody tr').each((i, row) => {
        const countryImg = $(row).find('td img');
        if (countryImg.attr('alt') === country) {
            const rank = $(row).find('td').first().text().trim();
            const playerName = $(row).find('td a.players').text().trim();
            players.push({ rank, name: playerName });
        }
    });
    return players;
};

const MakeTeam = async (req, res) => {
    let { gameType, country } = req.body;
    gameType = gameType.toLowerCase();

    const battingUrl = `https://www.relianceiccrankings.com/ranking/${gameType}/batting`;
    const bowlingUrl = `https://www.relianceiccrankings.com/ranking/${gameType}/bowling`;

    try {
        const [batters, bowlers] = await Promise.all([
            fetchPlayers(battingUrl, country),
            fetchPlayers(bowlingUrl, country)
        ]);

        const selectedBatters = batters.slice(0, 6);
        const selectedBowlers = bowlers.slice(0, 5);

        console.log(selectedBatters, selectedBowlers)

        return res.json({
            batters: selectedBatters,
            bowlers: selectedBowlers
        });
    } catch (err) {
        console.error("Error scraping ICC rankings:", err.message);
        return res.status(500).json({ error: "Failed to fetch players" });
    }
};

module.exports = MakeTeam;