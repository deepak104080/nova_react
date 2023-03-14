import React from 'react'

const withFilter = (InputComponent, data) => {
    class OutputComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                tempinput: '', //to handle temporary input for filter text
                datalist: data, //to store filtered list
                originaldatlist: data //to store original list
            }
        }


        filterFn = (e) => {
            let tempArray = this.state.originaldatlist.filter((item) => {
                return item.indexOf(e.target.value) >= 0;
            })

            console.log(tempArray);



            this.setState({
                ...this.state,
                tempinput: e.target.value,
                datalist: tempArray
            })
        }


        render() {
            return (
                <>
                <br></br>
                <input type="text" onChange={(e) => this.filterFn(e)} value={this.state.tempinput}/>
                <br></br>
                <InputComponent list={this.state.datalist} />
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