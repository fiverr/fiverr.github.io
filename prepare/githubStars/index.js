const { readFile } = require('fs').promises;
const { load } = require('js-yaml');
const request = require('../request');

module.exports = async({ token }) => {
    const { projects } = load(await readFile('data.yaml'));
    const repositories = projects.map(({ reponame }) => reponame);

    const results = await Promise.all(
        repositories.map(
            (reponame) => request(
                `https://api.github.com/repos/fiverr/${reponame}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/vnd.github.v3.raw',
                        Authorization: `token ${token}`,
                        'User-Agent': 'fiverr/fiverr.github.io'
                    }
                }
            )
        )
    );

    const stars = results.map((result) => JSON.parse(result).stargazers_count);

    return {
        stars: Object.assign(
            ...repositories.map(
                (reponame, index) => ({ [reponame]: stars[index] })
            )
        )
    };
};
