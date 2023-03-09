import React, { useState } from 'react';
import Modal from './Modal';

const Portal = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='modal_normal' onClick={() => {console.log('test for event propogation.')}}>
                <button className='btn btn-success' onClick={() => setIsOpen(true)}>Click here to open modal</button>
                <Modal isOpen={isOpen} setIsOpen = {setIsOpen}/>
            </div>

            <div className='modal_disturb'>
                Modal Distort Content
            </div>
        </div>
    )
}

export default Portal
