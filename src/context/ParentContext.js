import React, { useState } from 'react';
import ChildAContext from './ChildAContext';

export const DataParentContext = React.createContext();

const ParentContext = () => {

    const [contextData, setContextData] = useState('Context Data')
    return (
        <div>
            <DataParentContext.Provider value={{contextData, setContextData}} >
                <div className='drillingComp'>
                    <h5>Parent Component - {contextData}</h5>
                    <ChildAContext/>
                </div>
            </DataParentContext.Provider>
        </div>
    )
}

export default ParentContext


// abc
// [1,2,3,4,5]
// {
//     key1: 'key1',
//     key2: 'key2'
// }

// {
//     key1,
//     key2
// }

// Provider - which provides data - ParentContext
// Consumer - which consumes/uses data - ChildCContext