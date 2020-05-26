import React from 'react';
import { arrayOf, exact, string } from 'prop-types';
import { rel } from '../consts';
import './index.scss';

const Cards = ({ projects }) => (<ul className="cards">
    {
        projects.map(
            ({ title, link, language, description }) =>
                (<li className={language.toLowerCase()} key={link}>
                    <a href={link} rel={rel}>
                        <h3>{ title }</h3>
                        <span>{ language }</span>
                        <p>{ description }</p>
                    </a>
                </li>)
        )
    }
</ul>);

Cards.propTypes = {
    projects: arrayOf(exact({
        title: string,
        link: string,
        language: string,
        description: string
    }))
};

export default Cards;
