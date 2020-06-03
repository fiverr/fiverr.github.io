const { writeFile } = require('fs').promises;
const githubStars = require('./githubStars');
const mediumArticles = require('./mediumArticles');

(async() => {
    try {
        const { GITHUB_API_TOKEN } = process.env;
        if (!GITHUB_API_TOKEN) {
            throw new Error('Missing Github token as environmant variable "GITHUB_API_TOKEN"');
        }

        const results = await Promise.all([
            mediumArticles(),
            githubStars({ token: GITHUB_API_TOKEN })
        ]);

        writeFile(
            'info.json',
            JSON.stringify(
                Object.assign(...results),
                null,
                2
            )
        );
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
