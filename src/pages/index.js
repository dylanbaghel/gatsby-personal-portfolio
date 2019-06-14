import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

import aboutProfileImage from '../assets/images/about_profile.jpg'


export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    email
                    facebook
                    twitter
                    github
                }
            }
        }
    `);
    return (
        <Layout>
            <Head title="Home" />
            <header id="home" className="showcase">
                <div className="container">
                    <h1 className="lead">Abhishek Baghel</h1>
                    <p className="showcase__text">Full Stack Website Developer & Mobile Developer. Click on projects tab to see some projects built by me.</p>
                    <div className="showcase__social-icons">
                        <a target="_blank" href={data.site.siteMetadata.facebook}><i className="fab fa-facebook-square"></i></a>
                        <a target="_blank" href={data.site.siteMetadata.twitter}><i className="fab fa-twitter-square"></i></a>
                        <a target="_blank" href={data.site.siteMetadata.github}><i className="fab fa-github-square"></i></a>
                    </div>
                    <a href="#about" className="btn btn--primary">Learn More</a>
                </div>
            </header>

            <section id="about" className="about">
                <div className="container">
                    <div className="about__image">
                        <img src={aboutProfileImage} alt="" />
                    </div>
                    <div className="about__content">
                        <h1>About Me</h1>
                        <p>I'm a fullstack website developer. I work with react, node, express, mongodb, mysql, django, react native & flutter. I'm pursuing for a software engineering degree.I am available for full time job as a web developer and mobile app developer or for feelance work.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <p className="fort-credit-text">Pic Credit: Deepak Baghel</p>
                <h1>Get In Touch</h1>
                <p>You Can Contact My Via Twitter <a href={data.site.siteMetadata.twitter} target="_blank">@techpuran</a></p>
                <p>Email: baghelabhi39@gmail.com</p>
                <a href={`mailto:${data.site.siteMetadata.email}`} className="btn btn--primary">Email Me</a>
            </section>

        </Layout>
    );
};
