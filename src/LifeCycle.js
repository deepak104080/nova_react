import React, { Component } from "react";

class LifeCycle extends Component {
    constructor(){
        super();
        console.log('Constructor loading...................')
        this.state = {
            status: false
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate.................');
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateStatus = () => {
        this.setState({
            status: !this.state.status
        })
    }

    render() {
        console.log('rendering-------------------')
        return(
            <>
                <h2>Lifecycle methods in React.</h2>
                <br></br>
                <button onClick={this.updateStatus}>Update Status</button>
                <br></br>
                {this.state.status && <div>Testing Show Hide</div>}
            </>
        )
    }
}

export default LifeCycle;



//Lifecycle Phases
// Phase - Mounting
// constructor - to load/initialize all initial values
// -- getDerivedStateFromProps
// render - to load jsx
// componentDidMount - run anything just after first render



// Phase - Re-mounting / Re-rendering (State/Props Update)
// -- getDerivedStateFromProps
// shouldComponentUpdate - to check whether component re-render is required or not
// render
// -- getSnapShotBeforeUpdate
// componentDidUpdate - runs after every re-render



// Phase - Unmounting
// componentWillUnmount - runds just before unmounting/closing of the component