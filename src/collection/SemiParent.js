import React from 'react'

const SemiParent = (props) => {
    console.log(props);
    return (
        <div>
        {props.children}
        </div>
    )
}

export default SemiParent
