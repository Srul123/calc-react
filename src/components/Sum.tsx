import React, {Component} from 'react';


export interface MyProps {
    output1: number;
    output2: number;
}

class Sum extends Component<MyProps> {
    render() {
        console.log('Sum ' + this.props.output1);
        return (
            <div>
                <span>Sum: </span> <span className="sum" style={{position: 'relative', left: '9%'}}>{this.props.output1 + this.props.output2}</span>
            </div>
        );
    }
}

export default Sum;