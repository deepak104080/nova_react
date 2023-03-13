import React from 'react'

const withFilter = (InputComponent, data) => {
    class OutputComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                tempinput: '',
                datalist: data,
                originaldatlist: data
            }
        }


        filterFn = (e) => {

        }


        render() {
            return (
                <>
                <br></br>
                <input type="text" onChange={(e) => this.filterFn(e)} value={this.state.tempinput}/>
                <br></br>
                <InputComponent />
                </>
            )
        }
    }
    return OutputComponent
}


export default withFilter;

// HOC - Higher Order Component
// HOF - Higher Order Function - array and object methods - map, reduce, filter, keys, values


// Hooks - use
// HOC - with