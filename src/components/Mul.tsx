import React, {Component} from 'react';

export interface MyProps {
    output1: number;
    output2: number;
}


class Mul extends Component<MyProps> {
    state = {ans: 0};

    calc = () => {
        const score = this.props.output1 * this.props.output2;
        this.setState({ans: score});
    };
    render() {
        return (
            <div>
                <button onClick={this.calc}>MUL</button> <span style={{position: 'relative', left: '7%'}}>{ this.state.ans }</span>
            </div>
        );
    }
}

export default Mul;