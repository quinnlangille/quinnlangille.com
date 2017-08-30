import React from 'react';

class Project extends React.Component{
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return(
			<div className="contacts">
				<h2>Contact</h2>
				<div className="contacts--list">
					<a href="mailto:quinn@quinnlangille.com"><p><strong>email:</strong>quinn@quinnlangille.com</p></a>
					<a href="http://www.github.com/quinnlangille"><p><strong>github:</strong>/quinnlangille</p></a>
					<a href="http://www.linkedin.com/in/quinnlangille"><p><strong>linkedin:</strong>in/quinnlangille</p></a>
					<a href="http://www.instagram.com/picturesandwhatever"><p><strong>instagram:</strong>@picturesandwhatever</p></a>
					<a href="http://www.medium.com/@quinnlangille"><p><strong>medium:</strong>/@quinnlangille</p></a>
				</div>
			</div>
		);
	} //end render
} //end class Main

export default Project;
