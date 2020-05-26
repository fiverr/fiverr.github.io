import React from 'react';
import { arrayOf, exact, string } from 'prop-types';
import { rel } from '../consts';
import './index.scss';

const Links = ({ feed, links }) => (<div className="links">
    {
        feed.length && <h2>
            <a href="https://medium.com/fiverr-engineering" rel={rel}>
                Fiverr Engineering blog
            </a>
        </h2>
    }
    {
        feed.map(
            ({ title, link }) =>
                (<a key={link} href={link} rel={rel}>
                    { title }
                </a>)
        )
    }
    {
        links.length && <h2>
            Other stuff
        </h2>
    }
    {
        links.map(
            ({ title, link }) =>
                (<a key={link} href={link} rel={rel}>
                    { title }
                </a>)
        )
    }
</div>);

Links.propTypes = {
    feed: arrayOf(exact({
        title: string,
        link: string
    })),
    links: arrayOf(exact({
        title: string,
        link: string
    }))
};

export default Links;
