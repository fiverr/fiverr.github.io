import React from 'react';
import { arrayOf, exact, string } from 'prop-types';
import { rel } from '../consts';
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

        return (<ul className="cards">
            {
                projects.map(
                    ({ title, link, reponame, language, description }) =>
                        (<li className={language.toLowerCase()} key={link}>
                            <a href={link} rel={rel}>
                                <h3>
                                    { title }
                                </h3>
                                <span>{ language }</span>
                                <p>
                                    { description } {
                                        stars[reponame] && <ins>⭐️{ stars[reponame] }</ins>
                                    }
                                </p>
                            </a>
                        </li>)
                )
            }
        </ul>);
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
