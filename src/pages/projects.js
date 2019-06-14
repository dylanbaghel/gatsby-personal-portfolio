import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import Head from '../components/Head';

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPersonalProject {
                edges {
                    node {
                        title
                        codeLink
                        visitLink
                        projectDescription {
                            projectDescription
                        }
                        projectImage {
                            file {
                                url
                                fileName
                            }
                        }
                    }
                }
            }
        }
    `);
    return (
        <Layout solid={true}>
            <Head title="Projects" />
            <section id="projects" className="projects">
                <div className="container">
                    <h1>Projects</h1>

                    <div className="projects__list">
                        {data.allContentfulPersonalProject.edges.map((edge, index) => {
                            const project = {
                                title: edge.node.title,
                                codeLink: edge.node.codeLink,
                                visitLink: edge.node.visitLink,
                                projectDescription: edge.node.projectDescription.projectDescription,
                                image: edge.node.projectImage.file
                            };
                            return <ProjectCard key={index} project={project} />
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ProjectsPage;