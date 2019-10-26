import React, {Component} from 'react';


export interface MyProps {
    ans: number;
}

class Sum extends Component<MyProps> {
    render() {
        return (
            <div>
                Sum: {this.props.ans}
            </div>
        );
    }
}

export default Sum;