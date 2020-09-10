const { xml2json } = require('xml-js');
const request = require('../request');

module.exports = async() => {
    const xml = await request('https://medium.com/feed/fiverr-engineering');
    const feed = JSON.parse(xml2json(xml));
    return { articles: extract(feed) };
};

const extract = ({ elements: [ { elements: [ { elements } ] } ] }) => elements.filter(({ name }) => name === 'item').map(pull);

const pull = ({ elements }) => {
    const [ title ] = elements.find(({ name }) => name === 'title').elements;
    const [ link ] = elements.find(({ name }) => name === 'link').elements;
    const categories = elements.filter(({ name }) => name === 'category').map(({ elements }) => elements.pop());

    return {
        title: content(title).replace(/[^\x00-\x7F]/g, '').trim(), // eslint-disable-line no-control-regex
        link: content(link).replace(/\?.*$/, ''),
        categories: categories
            ? categories.map(content)
            : []
    };
};

const content = (element) => element[element.type];
