import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <img className="project-card__image" src={props.project.image.url} alt={props.project.image.fileName} />
            <div className="project-card__body">
                <h1 className="project-card__title">{props.project.title}</h1>
                <p className="project-card__text">{props.project.projectDescription}</p>
                <div className="project-card__actions">
                    <a href={props.project.codeLink} className="btn btn--outline btn--block" target="_blank">View Code</a>
                    <a href={props.project.visitLink} target="_blank" className="btn btn--outline btn--block">View Demo</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;