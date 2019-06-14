import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    facebook
                    twitter
                    github
                }
            }
        }
    `);
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__social-icons">
                        <a href={data.site.siteMetadata.facebook} target="_blank"><i className="fab fa-facebook-square"></i></a>
                        <a href={data.site.siteMetadata.twitter} target="_blank"><i className="fab fa-twitter-square"></i></a>
                        <a href={data.site.siteMetadata.github} target="_blank"><i className="fab fa-github-square"></i></a>
                    </div>
                    <p className="footer__credit">Designed & Developed By {data.site.siteMetadata.author} &copy; 2019</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;