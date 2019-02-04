import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
	render() {
		return (
			<div class="App">
				<table>
					<tbody>
						<tr>
							<td colSpan="4">
								<textarea id="display" rows="1" cols="20" value="0" readOnly></textarea>
							</td>
                    	</tr>
						<tr>
							<td><Button>CE</Button></td>
							<td><Button>/</Button></td>
							<td><Button>*</Button></td>
							<td><Button>-</Button></td>
						</tr>
						<tr>
							<td><Button>7</Button></td>
							<td><Button>8</Button></td>
							<td><Button>9</Button></td>
							<td rowspan="2"><Button>+</Button></td>
						</tr>
						<tr>
							<td><Button>4</Button></td>
							<td><Button>5</Button></td>
							<td><Button>6</Button></td>
						</tr>
						<tr>
							<td><Button>1</Button></td>
							<td><Button>2</Button></td>
							<td><Button>3</Button></td>
							<td rowspan="2"><Button>=</Button></td>
						</tr>
						<tr>
							<td colspan="2"><Button>0</Button></td>
							<td><Button>.</Button></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	} 
}

export default App;