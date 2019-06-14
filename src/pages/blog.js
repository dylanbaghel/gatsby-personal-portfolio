import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

import blogStyles from './blog.module.css';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: {
                fields: publishedDate
                order: DESC
            }) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "Do MMMM, YYYY")
                    }
                }
            }
        }
    `);

    return (
        <Layout solid={true}>
            <Head title="Blog" />
            <div className={blogStyles.blog}>
                <div className={`${blogStyles.container} container`}>
                    <h1 className={blogStyles.heading}>Blog</h1>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <div key={edge.node.slug}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p className={blogStyles.date}>{edge.node.publishedDate}</p>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}

export default BlogPage;