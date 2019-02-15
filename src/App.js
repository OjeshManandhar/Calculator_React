import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            flag: 1,
            flagResult: 0,
            displayNum: "0",
            firstNum: "0",
            secondNum: "0",
            result: "0",
            operator: "=",
            decimalFlag: 0
        };

        this.clickedButton = this.clickedButton.bind(this);
        this.clickedNumber = this.clickedNumber.bind(this);
        this.CE = this.CE.bind(this);
        this.calculate = this.calculate.bind(this);
        this.operator = this.operator.bind(this);
        this.clickedOperator = this.clickedOperator.bind(this);
    }

    clickedButton(data){
        if ((data >= "0" && data <= "9") || data === "."){
            console.log("Number:", data);
            this.clickedNumber(data);
        }
        else {
            console.log("Operation:", data);
            this.clickedOperator(data);
        }
    }

    clickedNumber(num) {
        var state = this.state;

        console.log("clickedNumber( " + num + " )");
    
        if (state.flagResult === 1) {
            state.flagResult = 0;
            state.firstNum = "0";
            state.secondNum = "0";
            state.decimalFlag = 0;
        }

        if (state.flag === 1) {
            state.displayNum = state.firstNum;
        }
        else if (state.flag === 2) {
            state.displayNum = state.secondNum;
        }

        if (num === '.'){
            if (state.decimalFlag === 0) {
                state.decimalFlag = 1;    //'.' is repeated
            }
            else if (state.decimalFlag === 1) {
                state.decimalFlag = 2;
            }
        }

        if (state.displayNum.length < 15) {
            if (state.displayNum === "0") {
                state.displayNum = "";
            }
            
            if (state.decimalFlag === 2) {
                state.decimalFlag = 1;
            }
            else {
                if (num === ".") {
                    if (state.displayNum === "") {
                        state.displayNum += "0.";
                    }
                    else {
                        state.displayNum += ".";
                    }
                }
                else {
                    state.displayNum += num;
                }
            }
        }

        if (state.flag === 1) {
            state.firstNum = state.displayNum;
        }
        else if (state.flag === 2) {
            state.secondNum = state.displayNum;
        }

        /*
        this.setState({
            flag: state.flag,
            flagResult: state.flagResult,
            displayNum: state.displayNum,
            firstNum: state.firstNum,
            secondNum: state.secondNum,
            result: state.result,
            operator: state.operator,
            decimalFlag: state.decimalFlag
        });
        */

        this.setState(state);
    }

    CE() {
        this.setState({
            flag: 1,
            flagResult: 0,
            displayNum: "0",
            firstNum: "0",
            secondNum: "0",
            result: "0",
            operator: "=",
            decimalFlag: 0
        });
    }

    calculate(op) {
        var state = this.state;

        state.flag = 1;
        state.flagResult = 1;
    
        switch (state.operator) {
        case '/':
            state.result = (parseFloat(state.firstNum)/parseFloat(state.secondNum)).toString();
            break;
        case '*':
            state.result = (parseFloat(state.firstNum)*parseFloat(state.secondNum)).toString();
            break;
        case '-':
            state.result = (parseFloat(state.firstNum) - parseFloat(state.secondNum)).toString();
            break;
        case '+':
            state.result = (parseFloat(state.firstNum) + parseFloat(state.secondNum)).toString();
            break;
        case '=':
            state.result = state.firstNum;
            break;
        default:
            break;
        }

        state.displayNum = state.result;

        this.setState(state);
    }

    operator(op) {
        var state = this.state;

        if (state.flag === 2 && state.secondNum !== 0) {
            //work on old operator
            switch (state.operator) {
            case '/':
                state.firstNum = (parseFloat(state.firstNum)/parseFloat(state.secondNum)).toString();
                break;
            case '*':
                state.firstNum = (parseFloat(state.firstNum)*parseFloat(state.secondNum)).toString();
                break;
            case '-':
                state.firstNum = (parseFloat(state.firstNum) - parseFloat(state.secondNum)).toString();
                break;
            case '+':
                state.firstNum = (parseFloat(state.firstNum) + parseFloat(state.secondNum)).toString();
                break;
            default:
                break;
            }
            
            state.secondNum = '0';
        }
    
        state.operator = op;
    
        if (state.flagResult === 1) {
            state.firstNum = state.result;
            state.secondNum = '0';
    
            state.flagResult = 0;
        }
    
        state.flag = 2;
        state.decimalFlag = 0;

        this.setState(state);
    }

    clickedOperator(op) {
        if (op === "CE") {
            this.CE();
        }
        else if (op === "=") {
            this.calculate();
        }
        else {
            this.operator(op);
        }
    }

	render() {
		return (
			<div className="App">
				<table>
					<tbody>
						<tr>
							<td colSpan="4">
								<textarea id="display" rows="1" cols="20" value={this.state.displayNum} readOnly></textarea>
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