import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            num: "0"
        }

        this.clickedButton = this.clickedButton.bind(this);
        this.clickedNumber = this.clickedNumber.bind(this);
        this.clickedOperation = this.clickedOperation.bind(this);
    }

    clickedButton(data){
        if ((data >= "0" && data <= "9") || data === "."){
            console.log("Number:", data);
            this.clickedNumber(data);
        }
        else {
            console.log("Operation:", data);
            this.clickedOperation(data);
        }
    }

    clickedNumber(num) {
        console.log("clickedNumber( " + num + " ) called");

        if (this.state.num === "0") {
            this.setState({  num: num  });
        }
        else {
            this.setState({  num: this.state.num + num  });
        }

        console.log("new this.state.num:", this.state.num);
    }

    clickedOperation(op) {
        console.log("clickedOperation( " + op + " ) called");

        this.setState({  num: "0"  });
    }

	render() {
		return (
			<div className="App">
				<table>
					<tbody>
						<tr>
							<td colSpan="4">
								<textarea id="display" rows="1" cols="20" value={this.state.num} readOnly></textarea>
							</td>
                    	</tr>
						<tr>
							<td><button onClick={() => this.clickedButton("CE")}>CE</button></td>
							<td><button onClick={() => this.clickedButton("/")}>/</button></td>
							<td><button onClick={() => this.clickedButton("*")}>*</button></td>
							<td><button onClick={() => this.clickedButton("-")}>-</button></td>
						</tr>
						<tr>
							<td><button onClick={() => this.clickedButton("7")}>7</button></td>
							<td><button onClick={() => this.clickedButton("8")}>8</button></td>
							<td><button onClick={() => this.clickedButton("9")}>9</button></td>
							<td rowSpan="2"><button onClick={() => this.clickedButton("+")}>+</button></td>
						</tr>
						<tr>
							<td><button onClick={() => this.clickedButton("4")}>4</button></td>
							<td><button onClick={() => this.clickedButton("5")}>5</button></td>
							<td><button onClick={() => this.clickedButton("6")}>6</button></td>
						</tr>
						<tr>
							<td><button onClick={() => this.clickedButton("1")}>1</button></td>
							<td><button onClick={() => this.clickedButton("2")}>2</button></td>
							<td><button onClick={() => this.clickedButton("3")}>3</button></td>
							<td rowSpan="2"><button onClick={() => this.clickedButton("=")}>=</button></td>
						</tr>
						<tr>
                            <td colSpan="2"><button onClick={() => this.clickedButton("0")}>0</button></td>
                            <td><button onClick={() => this.clickedButton(".")}>.</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	} 
}

export default App;