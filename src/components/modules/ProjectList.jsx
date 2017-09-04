import React from 'react';
import Project from '../elements/Project.jsx'

class ProjectList extends React.Component{
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<div className="projectList">
				<h2>Projects</h2>
				<Project title="Jerome"
						 description="A real time chat application that translates messages on the fly"
						 git="https://github.com/theBoysDotJS/jerome-frontend"

				/>
				<Project
						 title="Drizzle"
						 description="A minimal, straight forward weather application"
						 git="https://github.com/quinnlangille/Drizzle"
						 link="http://drizzle.netlify.com/"
				/>
			</div>
		);
	} //end render
} //end class Main

export default ProjectList;
