import React, {Component} from "react";

class ClassComp extends Component {
    constructor(props) {
        super(props);
        console.log('Props in Class Comp - ', props);
        console.log('------------constructor running-----------------');
        this.state = {
            count: 0,
            status: false, //not used
            test: 'test 123' //not used
        }
    }

    incrementFn = () => {
        console.log('increment fn');
        // this.state.count = this.state.count + 1;
        // this.forceUpdate();
        this.setState({
            ...this.state,
            count : this.state.count + 1
        })
    }

    decrementFn = () => {
        console.log('decrement fn');
        // this.state.count = this.state.count - 1;
        // this.forceUpdate();
        this.setState({
            ...this.state,
            count : this.state.count - 1
        })
    }

    render() {
        return(
            <>
                <h2>This is a class component.</h2>
                <h3>Count - {this.state.count}</h3>

                <br></br>
                <button className="btn btn-success" onClick={this.incrementFn}>Increment</button>
                <button className="btn btn-danger" onClick={this.decrementFn}>Decrement</button>
            </>
        )
    }

}

export default ClassComp;