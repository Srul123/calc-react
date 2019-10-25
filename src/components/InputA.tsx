import React, {Component} from 'react';
import './InputA.scss';

export interface MyProps {
    name: string;
    inputA: any;
    inputB: any;
}


class InputA extends Component<MyProps> {
    inputA(num: number) {
        this.props.inputA(num);
    }
    inputB(num: number) {
        this.props.inputB(num);
    }

    render() {
        return (
            <div>
                <form className="ui form" style={{}}>
                    <div className="field" style={{display: 'flex'}}>
                        <label htmlFor="">{this.props.name}</label>
                        <input type="number" onChange={event => {
                            if(this.props.name==='Input A') {
                                this.inputA(Number(event.target.value));
                            } else if (this.props.name==='Input B') {
                                this.inputB(Number(event.target.value));
                            }
                        }}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default InputA;