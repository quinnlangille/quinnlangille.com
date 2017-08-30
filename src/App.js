import React, { Component } from 'react';
import Main from './components/pages/Main.jsx';
import Nav from './components/modules/Nav.jsx';
import ProjectList from './components/modules/ProjectList.jsx'
import ContactList from './components/modules/ContactList.jsx'


import './css/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
	  		<Nav />
			<Main />
			<div className='contentblocks'>
				<ProjectList />
				<ContactList />
			</div>
      </div>
    );
  }
}

export default App;
