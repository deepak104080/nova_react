import React, { memo } from 'react'

const HookCallbackChild = (props) => {
    const {list, updateList} = props;

    console.log('Child comp rendered again.......')

    return (
        <div>
            <input type="text" onBlur={updateList} />
            {
                    list && list.map((item, index) => (
                        <div key={item+index}>{item}</div>
                    ))
                }
        </div>
    )
}

export default memo(HookCallbackChild);
