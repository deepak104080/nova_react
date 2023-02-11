import React from 'react';
import {Link} from 'react-router-dom';

const MenuBar = (props) => {
  return (
    <div>
        <span className='menu-item'><Link to='/home111'>Home111&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/jsx'>Jsx&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/bootstrap'>Bootstrap&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/bootstrapreact'>BootstrapReact&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/state123'>State123&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/staterepeat'>StateRepeat&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/showhide'>ShowHide&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/statelist'>StateList&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/parent'>Parent&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/homepage'>HomePage&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='http://www.facebook.com'>Facebook&nbsp;&nbsp;</Link></span>

        <span className='menu-item'><Link to='/class'>Class&nbsp;&nbsp;</Link></span>
        <span className='menu-item'><Link to='/lifecycle'>Lifecycle&nbsp;&nbsp;</Link></span>



        {/* <a href='/home111'>Home111&nbsp;&nbsp;</a>
        <a href='/jsx'>Jsx&nbsp;&nbsp;</a>
        <a href='/bootstrap'>Bootstrap&nbsp;&nbsp;</a>
        <a href='/bootstrapreact'>BootstrapReact&nbsp;&nbsp;</a>
        <a href='/state123'>State123&nbsp;&nbsp;</a>
        <a href='/staterepeat'>StateRepeat&nbsp;&nbsp;</a>
        <a href='/showhide'>ShowHide&nbsp;&nbsp;</a>
        <a href='/statelist'>StateList&nbsp;&nbsp;</a>
        <a href='/parent'>Parent&nbsp;&nbsp;</a>
        <a href='/homepage'>HomePage&nbsp;&nbsp;</a>
        <a href='http://www.facebook.com'>Facebook&nbsp;&nbsp;</a> */}

    </div>
  )
}

export default MenuBar
