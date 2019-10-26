import React, {Component} from 'react';
import './InputA.scss';

export interface MyProps {
    name: string;
    onInput: any;
}

class InputA extends Component<MyProps> {

    render() {
        return (
            <div>
                <label >{this.props.name}</label>
                <input type="text" onChange={(e) => {this.props.onInput(this.props.name, e.target.value)}}/>
            </div>
        );
    }
}

export default InputA;