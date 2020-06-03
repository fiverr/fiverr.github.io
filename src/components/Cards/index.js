import React from 'react';
import { arrayOf, exact, object, string } from 'prop-types';
import Card from '../Card';
import './index.scss';

const Cards = ({ projects, stars }) => (
    <ul className="cards">
        {
            projects.map(
                ({ reponame, ...project }) => <Card key={reponame} {...project} stars={stars[reponame]}/>
            )
        }
    </ul>
);

Cards.propTypes = {
    projects: arrayOf(exact({
        title: string,
        link: string,
        reponame: string,
        language: string,
        description: string
    })),
    stars: object
};

export default Cards;
