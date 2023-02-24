import React, { useContext } from 'react';
import { DataParentContext } from './ParentContext';

const ChildCContext = () => {

    const localContext = useContext(DataParentContext);

    const {contextData, setContextData} = localContext;

    return (
        <div>
                <div className='drillingComp'>
                    <h5>Child C Component</h5>
                    <h4>{contextData}</h4>
                    <br></br><br></br>
                    <input type="text" onBlur={(event) => setContextData(event.target.value)} />
                </div>
        </div>
    )
}

export default ChildCContext
