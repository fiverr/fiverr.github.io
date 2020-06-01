import React from 'react';
import { arrayOf, exact, string } from 'prop-types';
import Card from '../Card';
import './index.scss';

class Cards extends React.Component {
    componentDidMount() {
        this.props.projects.forEach(
            ({ reponame }) => {
                fetch(`https://api.github.com/repos/fiverr/${reponame}/stargazers`)
                    .then((res) => res.json())
                    .then(({ length }) => {
                        const { stars = {} } = this.state || {};
                        stars[reponame] = length;
                        this.setState({ stars });
                    });
            }
        );
    }

    render() {
        const {
            props: { projects },
            state
        } = this;

        const { stars = {} } = state || {};

        return (
            <ul className="cards">
                {
                    projects.map(
                        ({ reponame, ...project }) => <Card key={reponame} {...project} stars={stars[reponame]}/>
                    )
                }
            </ul>
        );
    }
}

Cards.propTypes = {
    projects: arrayOf(exact({
        title: string,
        link: string,
        reponame: string,
        language: string,
        description: string
    }))
};

export default Cards;
