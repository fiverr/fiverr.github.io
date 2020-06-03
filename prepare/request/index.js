const { get } = require('https');

module.exports = (url, options = {}) => new Promise(
    (resolve, reject) => get(
        url,
        options,
        (result) => {
            const data = [];
            const { statusCode } = result;
            if (Math.floor(statusCode / 100) !== 2) {
                reject(`Request to ${url} resulted in status ${statusCode} (${JSON.stringify(result.headers)}).`);
                return;
            }
            result.on('data', (chunk) => data.push(chunk));
            result.on('end', () => resolve(data.join('')));
        }
    ).on('error', reject)
);
