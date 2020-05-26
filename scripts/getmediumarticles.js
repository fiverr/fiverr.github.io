const { readFile, writeFile } = require('fs').promises;
const { xml2json } = require('xml-js');

(async() => {

    const xml = await readFile('feed.xml');
    const feed = JSON.parse(xml2json(xml));
    const articles = extract(feed);

    writeFile(
        'feed.json',
        JSON.stringify(articles, null, 2)
    );
})();

const extract = ({ elements: [ { elements: [ { elements } ] } ] }) => elements.filter(({ name }) => name === 'item').map(pull);

const pull = ({ elements }) => ({
    title: content(elements.find(({ name }) => name === 'title').elements.pop()),
    link: content(elements.find(({ name }) => name === 'link').elements.pop())
});

const content = (element) => element[element.type];