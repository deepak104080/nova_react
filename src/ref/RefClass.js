import React, { Component } from 'react'

class RefClass extends Component {
    constructor() {
        super();
        this.inputRef1 = React.createRef();
        this.inputRef2 = React.createRef();
    }

    submitFn = () => {
        console.log('Name', this.inputRef1.current.value);
        console.log('City', this.inputRef2.current.value);
    }

    render() {
        return (
        <div>
            <div>
                Name - <input type="text" ref={this.inputRef1} /><br></br>
                City - <input type="text" ref={this.inputRef2} /><br></br>
                <button onClick={this.submitFn}>Submit</button>
                <br></br>
            </div>
        </div>
        )
    }
}

export default RefClass