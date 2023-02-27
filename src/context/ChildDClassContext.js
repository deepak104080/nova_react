import React from "react";
import {DataParentContext} from './ParentContext';

class ChildDClassContext extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className='drillingComp'>
                    <h5>Child D Component</h5>
                    <DataParentContext.Consumer>
                        {
                            (temp) => {
                                return (
                                    <>
                                        <h4>{temp.contextData}</h4>
                                        <br></br><br></br>
                                        <input type="text" onBlur={(event) => temp.setContextData(event.target.value)} />
                                    </>
                                )
                            }
                        }
                    </DataParentContext.Consumer>
                </div>
            </>
        )
    }
}

export default ChildDClassContext;