import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data.yaml';
import feed from '../feed.json';
import Cards from './cards';
import Links from './links';
import './index.scss';

ReactDOM.render(<Cards projects={data.projects}/>, document.querySelector('main'));
ReactDOM.render(<Links feed={feed} links={data.links}/>, document.querySelector('footer'));