import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data.yaml';
import info from '../info.json';
import Cards from './components/Cards';
import Links from './components/Links';
import './index.scss';

ReactDOM.render(<Cards projects={data.projects} stars={info.stars}/>, document.querySelector('main'));
ReactDOM.render(<Links articles={info.articles} links={data.links}/>, document.querySelector('footer'));
