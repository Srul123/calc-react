import React, {Component} from 'react';
import InputA from './InputA';
import Sum from './Sum';
import Mul from './Mul';


class App extends Component {
    state = {
        inputA: 0,
        inputB: 0
    };
    onInput = (key: string, value: number) => {
        if(key === 'Input A'){
            this.setState({inputA: value});
        }else {
            this.setState({inputB: value});
        }
    };
    render() {
        console.log(this.state);
        return (
            <div className="ui container App">
                <InputA name={'Input A'} onInput={this.onInput} />
                <InputA name={'Input B'} onInput={this.onInput}/>
                <Sum ans={Number(this.state.inputA) + Number(this.state.inputB)}/>
                < Mul valueA={this.state.inputA} valueB={this.state.inputB} />
            </div>
        );
    }
}

export default App;