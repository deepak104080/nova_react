import React, { memo } from 'react'

const HookCallbackChild = (props) => {
    const {list, updateList} = props;

    console.log('Child comp rendered again.......')

    return (
        <div>
            <button onClick={updateList}>Add in List</button>
            {
                    list && list.map((item, index) => (
                        <div key={item+index}>{item}</div>
                    ))
                }
        </div>
    )
}

export default memo(HookCallbackChild);
