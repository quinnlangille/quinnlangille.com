import React from 'react';

class Main extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			sentence: "",
			byebye: ""
		}
	}

	componentDidMount() {
		this._handleSentence();
		this._handleByeBye();
	}

	_handleSentence = () => {
		//make array with random sentences
		let sentenceArr = ['my coffee mug full', 'my priorities straight', 'my pizza extra cheesy', 'my bang too long']

		//generate random number between one and array length
		let arrCheck = Math.floor(Math.random() * sentenceArr.length)
		console.log('random sentence', arrCheck)
		this.setState({
			sentence: sentenceArr[arrCheck]
		})
	}

	_handleByeBye = () => {
		//make array with random sentences
		let byebyeArr = ['dropping in', 'dropping by', 'stopping in', 'stopping by']

		//generate random number between one and array length
		let arrCheck = Math.floor(Math.random() * byebyeArr.length)
		console.log('random bye bye', arrCheck)
		this.setState({
			byebye: byebyeArr[arrCheck]
		})
	}

	render() {
		return(
			<div className="main">
				<h1>Hi, I'm Quinn</h1>
				<p>I used to be a designer, now I’m a developer. I like to keep my design minimal, my code clean, and {this.state.sentence}. You can view my most recent work below. If you’re interested in working together, let’s chat about it.  Thanks for {this.state.byebye}.</p>
			</div>
		);
	} //end render
} //end class Main

export default Main;
