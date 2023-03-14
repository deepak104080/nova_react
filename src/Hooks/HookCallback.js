import React, { useCallback, useState } from 'react';
import HookCallbackChild from './HookCallbackChild';

const HookCallback = () => {
    const [parent, setParent] = useState(false);
    const [child, setChild] = useState([]);

    // const updateList = (e) => {
    //     setChild([...child, e.target.value])
    // }

    const updateList = useCallback(() => {
        setChild((child) => [...child, 'NewVal'])
    }, [child])

    return (
        <div>
            <div>
                <button onClick={() => setParent(!parent)}>Update in Parent</button>
            </div>
            {
                parent && <p>Parent State True</p>
            }
            <div>-------------------------------</div>
            <div>
                <HookCallbackChild list = {child} updateList = {updateList}/>
            </div>
        </div>
    )
}

export default HookCallback
