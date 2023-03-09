import React from 'react';
import ReactDom from 'react-dom';

const Modal = (props) => {
    const {isOpen, setIsOpen} = props;

    if(!isOpen) return null;

    return ReactDom.createPortal(
        <>  
            <div className='modal_fullpage'>
                <div className='modal_content'>
                        <br></br>
                        <div>Modal Content</div>
                        <br></br>
                        <button className='btn btn-warning' onClick={() => setIsOpen(false)}>Click here to close modal.</button>
                        <br></br>
                </div>
            </div>
        
        </>,
        document.getElementById('portal')
    )
}

export default Modal
