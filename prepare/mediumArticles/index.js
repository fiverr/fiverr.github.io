const { xml2json } = require('xml-js');
const request = require('../request');

module.exports = async() => {
    const xml = await request('https://medium.com/feed/fiverr-engineering');
    const feed = JSON.parse(xml2json(xml));
    return { articles: extract(feed) };
};

const extract = ({ elements: [ { elements: [ { elements } ] } ] }) => elements.filter(({ name }) => name === 'item').map(pull);

const pull = ({ elements }) => ({
    title: content(elements.find(({ name }) => name === 'title').elements.pop())
        .replace(/[^\x00-\x7F]/g, '').trim(), // eslint-disable-line no-control-regex
    link: content(elements.find(({ name }) => name === 'link').elements.pop())
        .replace(/\?.*$/, '')
});

const content = (element) => element[element.type];
