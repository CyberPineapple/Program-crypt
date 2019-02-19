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
                    <button className='button' onClick={() => this.clickButton()}>encryption</button>
                    <button className='button' onClick={() => this.clickButton()}>decryption</button>
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

    textToBinary = (data) => {
        return data.charCodeAt(0).toString(2);
    }

    encryption = (string, gamma) => {
        let code = [];
        if (string.length <= gamma.length){
            for (let i in string){
                let value = [];
                string[i] = string[i].split('');
                string[i].reverse();
                gamma[i] = gamma[i].split('');
                gamma[i].reverse();
                for (let j in string[i]){
                    value[j] = string[i][j]^gamma[i][j];
                }
                console.log(value);
                value = value.join('');
                console.log(value);
                value = parseInt(value, 10);
                code[i] = String.fromCharCode(value);
            }
        } else if (string.length > gamma.length){
            let counter = 0;
            let gammaItem = []
            for (let i in string){
                if (gamma[counter] == undefined){
                    counter = 0;
                }
                console.log('counter: ', counter);
                let value = [];
                string[i] = string[i].split('');
                gammaItem[counter] = gamma[counter].split('');
                for (let j in string[i]){
                    value[j] = string[i][j]^gammaItem[counter][j];
                }
                value = value.join('');
                value = parseInt(value, 10);
                console.log(value);
                code[i] = String.fromCharCode(value);
                counter++;
            }
        }
        code.join('');
        return code;
    }

    decryption = (string, gamma) => {
        let code = [];
        if (string.length <= gamma.length){
            for (let i in string){
                let value = [];
                string[i] = string[i].split('');
                gamma[i] = gamma[i].split('');
                for (let j in string[i]){
                    value[j] = string[i][j]^gamma[i][j];
                }
                value = value.reverse().join('');
                value = parseInt(value, 10);
                code[i] = String.fromCharCode(value);
            }
        } else if (string.length > gamma.length){
            let counter = 0;
            let gammaItem = []
            for (let i in string){
                if (gamma[counter] == undefined){
                    counter = 0;
                }
                console.log('counter: ', counter);
                let value = [];
                string[i] = string[i].split('');
                gammaItem[counter] = gamma[counter].split('');
                for (let j in string[i]){
                    value[j] = string[i][j]^gammaItem[counter][j];
                }
                value = value.join('');
                value = parseInt(value, 10);
                console.log(value);
                code[i] = String.fromCharCode(value);
                counter++;
            }
        }
        return code;
    }

    clickButton = () => {
        let string = this.state.textValue.split('').map((data) => this.textToBinary(data));
        let gamma = this.state.keyValue.split('').map((data, id, arr) => this.textToBinary(data));
        console.log('string: ', string, '\n', 'gamma: ', gamma);
        let code = this.encryption(string, gamma);
        
        console.log('code: ', code);
        this.setState({
            outputValue: code
        });
    };
};