import React from 'react';
import classnames from 'classnames';
import { string, number } from 'prop-types';
import { rel } from '../../consts';
import './index.scss';

const Card = ({ language, link, title, stars, description }) => {
    const classes = classnames(
        'project-card',
        language.toLowerCase()
    );

    return (
        <li className={classes} key={link}>
            <a href={link} rel={rel}>
                <h3>
                    { title }
                </h3>
                <span className="language-badge">{ language }</span>
                <p>
                    { description }
                    { !!stars && <ins className="stars">⭐️{ stars }</ins> }
                </p>
            </a>
        </li>
    );
};

Card.propTypes = {
    title: string,
    link: string,
    stars: number,
    language: string,
    description: string
};

export default Card;
