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
                <div className="button_case">
                    <button className='button' onClick={() => this.clickButton()}>encryption / decryption</button>
                </div>
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

    textToChar = (data) => {
        return data.charCodeAt(0);
    }

    encryption = (string, gamma) => {
        let code = [];
        if (string.length <= gamma.length){
            for (let i in string){
                let value = string[i]^gamma[i];
                code[i] = String.fromCharCode(value);
            }
        } else if (string.length > gamma.length) {
            let counter = 0;
            for (let i in string){
                if (gamma[i] === undefined){
                    counter = 0;
                }
                let value = string[i]^gamma[counter];
                code[i] = String.fromCharCode(value);
                counter++;
            }
        }
        console.log('code:', code);
        return code;
    }

    clickButton = () => {
        console.log('string: ', this.state.textValue, '\n', 'gamma: ', this.state.keyValue);
        let string = this.state.textValue.split('').map((data) => this.textToChar(data));
        let gamma = this.state.keyValue.split('').map((data, id, arr) => this.textToChar(data));
        console.log('string: ', string, '\n', 'gamma: ', gamma);
        let code = this.encryption(string, gamma);
        this.setState({
            outputValue: code
        });
    };
};