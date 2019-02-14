import React from 'react';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            textValue: '',
            keyValue: '',
            outputValue: ''
        }
    }

    render() {
        return (
            <div className="app">
                <input type="text" name="text" id="text" onChange={(v) => this.changeText(v)} value={this.state.textValue} />
                <input type="text" name="key" id="key" onChange={(v) => this.changeKey(v)} value={this.state.keyValue} />
                <button onClick={() => this.clickButton()}>click</button>
                <span id="output">{this.state.outputValue}</span>
            </div>
        )
    }

    changeText = (v) => {
        this.setState({
            textValue: v.target.value
        });
    };

    changeKey = (v) => {
        this.setState({
            keyValue: v.target.value
        });
    };

    ascii = (a) => {
        return a.charCodeAt(0);
    }

    clickButton = () => {
        console.log(this.state.textValue);
        let string = this.state.textValue.split('').map((data) => this.ascii(data));
        let gamma = this.state.keyValue.split('').map((data, id, arr) => this.ascii(data));
        let output = string.map((data, id) => data + gamma[id]);
        console.log(string, '\n', gamma, '\n', output);
    };
};