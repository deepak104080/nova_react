import React, {forwardRef} from 'react'

const RefFnChild = (props, ref) => {
  return (
    <div>
        <h3>Ref Fn Child Comp</h3>
        <br></br>
        <br></br>
        <div>Data from Ref - <span ref={ref}></span></div>
    </div>
  )
}

export default forwardRef(RefFnChild);
