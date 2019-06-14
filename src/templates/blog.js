import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import blogStyles from './blog.module.css';

import Layout from '../components/Layout';
import Head from '../components/Head';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "Do MMMM, YYYY")
            body {
                json
            }
        }
    }
`;

const Blog = (props) => {
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;

                return <img alt={alt} src={url} />;
            }
        }
    };
    return (
        <Layout solid={true}>
            <Head title={props.data.contentfulBlogPost.title} />
            <div className={`${blogStyles.blog}`}>
                <div className={`${blogStyles.container}`}>
                    <h1 className={blogStyles.blogTitle}>{props.data.contentfulBlogPost.title}</h1>
                    <p className={blogStyles.blogDate}>{props.data.contentfulBlogPost.publishedDate}</p>
                    {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
                </div>
            </div>
        </Layout>
    );
}

export default Blog;