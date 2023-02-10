import React, {Component} from "react";

class ClassComp extends Component {
    constructor(props) {
        super(props);
        console.log('Props in Class Comp - ', props);
        console.log('------------constructor running-----------------');
        this.state = {
            count: 222222222
        }
    }

    render() {
        return(
            <>
                <h2>This is a class component - {this.state.count}</h2>
                {/* <Test key="value">test</Test> */}
            </>
        )
    }

}

export default ClassComp;