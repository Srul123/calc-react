import React, {Component} from 'react';
import InputA from './InputA';
import Sum from './Sum';
import Mul from './Mul';


class App extends Component {
    state = {
        inputA: 0,
        inputB: 0
    };
    onSearchSubmit1 = (term: any) => {
        this.setState((state, props) => ({
            inputA: term
        }));
    };

    onSearchSubmit2 = (term: any) => {
        this.setState({inputB: term});
    };

    render() {
        console.log(this.state);
        return (
            <div className="ui container App">
                <InputA name={'Input A'} inputA={this.onSearchSubmit1} inputB=""/>
                <InputA name={'Input B'} inputA="" inputB={this.onSearchSubmit2}/>
                <Sum output1={this.state.inputA} output2={this.state.inputB}/>
                < Mul   output1={this.state.inputA} output2={this.state.inputB}  />
            </div>
        );
    }
}

export default App;