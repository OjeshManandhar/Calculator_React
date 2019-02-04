import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div class="App">
				<table>
					<thead>
						<textarea id="display" rows="1" cols="20" value="0" readOnly></textarea>
					</thead>
				</table>
			</div>
		);
	} 
}

export default App;