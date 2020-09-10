import React from 'react';
import { arrayOf, exact, string } from 'prop-types';
import { rel } from '../../consts';
import './index.scss';

const Links = ({ articles, links }) => (
    <div className="links">
        {
            articles.length && <h2>
                Fiverr Engineering blog
            </h2>
        }
        {
            articles.map(
                ({ title, link, categories }) => (
                    <a key={link} href={link} rel={rel}>
                        { title }
                        { categories.length
                            ? <ul>
                                { categories.map(
                                    (category) => <li key={category}>{ category }</li>
                                )
                                }
                            </ul>
                            : null
                        }
                    </a>
                )
            )
        }
        <a href="https://medium.com/fiverr-engineering" rel={rel}>Discover more content from our engineers.</a>
        {
            links.length && <h2>
                Other stuff
            </h2>
        }
        {
            links.map(
                ({ title, link }) => (
                    <a key={link} href={link} rel={rel}>
                        { title }
                    </a>
                )
            )
        }
    </div>
);

Links.propTypes = {
    articles: arrayOf(exact({
        title: string,
        link: string,
        categories: arrayOf(string)
    })),
    links: arrayOf(exact({
        title: string,
        link: string
    }))
};

export default Links;
