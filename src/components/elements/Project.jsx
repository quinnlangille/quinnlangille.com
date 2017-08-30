import React from 'react';

class Project extends React.Component{
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return(
			<div className="project--container">
				<div className="project--header">
					<h3 className="project--title">{this.props.title}</h3>
					<div className="project--links">
						{this.props.git ? <a href={this.props.git}>Git</a> : null}
						{this.props.link ? <a href={this.props.link}>Link</a> : null}
					</div>
				</div>
				<p className="project--description">{this.props.description}</p>
			</div>
		);
	} //end render
} //end class Main

export default Project;
