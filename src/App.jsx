import React from "react";
import CalcButton from "./components/CalcButton";
import CalcPanel from "./components/CalcPanel";

import style from "./App.module.css";
import {logic_equals} from "./logic/logic_equal.js";

import { ButtonGroup } from "@material-ui/core";

class App extends React.Component {   
        constructor(props) {   //TODO перенеси методы по отдельным файлам 
        super(props);

        this.addView = this.addView.bind(this);
        this.clearLastElem = this.clearLastElem.bind(this);
        this.clearAllElem = this.clearAllElem.bind(this);
        this.setFN = this.setFN.bind(this);
        this.equals = this.equals.bind(this);

        this.state = {
            output: "",
            first_number: 0,
            sign: ""
        };
    }

    equals(){
        let firstNum = this.state.first_number;
        let sign = this.state.sign
        let secNum = parseInt(this.state.output, 10);

        let res = logic_equals(firstNum, sign , secNum);

        this.setState({output: res});
    }

    setFN(e) {  //* set first number in state (and sign) 
        let num = parseInt(this.state.output, 10);
        let sign = e.currentTarget.value;

        this.setState({ first_number: num, sign: sign });
        this.clearAllElem();
    }

    clearAllElem() {
        let newOut = this.state.output.replace(/.+/, "");
        
        this.setState({ output: newOut });
    }

    clearLastElem() {
        let newOut = this.state.output.slice(0, -1);

        this.setState({ output: newOut });
    }

    addView(e) { 
        let newOut = this.state.output + e.currentTarget.value;

        this.setState({
            output: newOut
        });
    }

    render() {
        return (
            <div className={style.mainContainer}>
                <div>
                    <CalcPanel value={this.state.output} />
                </div>
                <div id={style.row}>
                    <ButtonGroup
                        size='large'
                        aria-label='outlined primary button group'>
                        <CalcButton onClick={this.clearAllElem} value='AC' />
                        <CalcButton onClick={this.setFN} value='÷' />
                        <CalcButton onClick={this.setFN} value='%' />
                        <CalcButton onClick={this.clearLastElem} value='C' />
                    </ButtonGroup>
                </div>
                <div id={style.row}>
                    <ButtonGroup
                        size='large'
                        aria-label='outlined primary button group'>
                        <CalcButton onClick={this.addView} value='7' />
                        <CalcButton onClick={this.addView} value='8' />
                        <CalcButton onClick={this.addView} value='9' />
                        <CalcButton onClick={this.setFN} value='X' />
                    </ButtonGroup>
                </div>
                <div id={style.row}>
                    <ButtonGroup
                        size='large'
                        aria-label='outlined primary button group'>
                        <CalcButton onClick={this.addView} value='4' />
                        <CalcButton onClick={this.addView} value='5' />
                        <CalcButton onClick={this.addView} value='6' />
                        <CalcButton onClick={this.setFN} value='+' />
                    </ButtonGroup>
                </div>
                <div id={style.row}>
                    <ButtonGroup
                        size='large'
                        aria-label='outlined primary button group'>
                        <CalcButton onClick={this.addView} value='1' />
                        <CalcButton onClick={this.addView} value='2' />
                        <CalcButton onClick={this.addView} value='3' />
                        <CalcButton onClick={this.setFN} value='-' />
                    </ButtonGroup>
                </div>
                <div id={style.row}>
                    <ButtonGroup
                        size='large'
                        aria-label='outlined primary button group'>
                        <CalcButton onClick={this.addView} value='0' />
                        <CalcButton onClick={this.addView} value=',' />
                        <CalcButton onClick={this.equals} value='=' />
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default App;
