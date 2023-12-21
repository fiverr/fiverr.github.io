import React from 'react';
import { createRoot } from 'react-dom/client';
import data from '../data.yaml';
import info from '../info.json';
import Cards from './components/Cards';
import Links from './components/Links';
import './index.scss';

createRoot(document.querySelector('main')).render(<Cards projects={data.projects} stars={info.stars}/>);
createRoot(document.querySelector('footer')).render(<Links articles={info.articles} links={data.links}/>);

console.log([
    '5555555555555555555555555555555555555',
    '5555555555555555555555555555555555555',
    '5555555555555555555555555555555555555',
    '55555555555555         55555555555555',
    '55555555555            55555555555555',
    '5555555555        5555555555555555555',
    '5555555555       55555555555555555555',
    '555555                       55555555',
    '555555                       55555555',
    '5555555555       555555      55555555',
    '5555555555       555555      55555555',
    '5555555555       555555      55555555',
    '5555555555       555555      55555555',
    '5555555555       555555      55555555',
    '5555555555       555555      55555555',
    '5555555555555555555555555555555555555',
    '5555555555555555555555555555555555555',
    '5555555555555555555555555555555555555',
    'Join us @ https://www.fiverr.com/jobs'
].join('\n'));
