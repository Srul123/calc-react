import React, {Component} from 'react';

export interface MyProps {
    valueA: number;
    valueB: number;
}


class Mul extends Component<MyProps> {
    state = {
        ans: 0
    };

    render() {
        return (
            <div>
                <button onClick={() => {this.setState({
                    ans: this.props.valueA * this.props.valueB
                })}}>MUL</button>
                <span >{ this.state.ans }</span>
            </div>
        );
    }
}

export default Mul;