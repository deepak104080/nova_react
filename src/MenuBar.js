import React from 'react';
import {Link} from 'react-router-dom';

const MenuBar = (props) => {
  return (


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li class="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <Link to='/home111'>Home111</Link>
        </li>
        <li className="nav-item">
        <Link to='/jsx'>Jsx&nbsp;&nbsp;</Link>
        </li>
        <li className="nav-item"><Link to='/state123'>State123&nbsp;&nbsp;</Link></li>
        <li className="nav-item"><Link to='/statelist'>Statelist</Link></li>
        <li className="nav-item"><Link to='/lifecycle'>Lifecycle</Link></li>
        <li className="nav-item"><Link to='/hookuseeffect'>HookUseEffect&nbsp;&nbsp;</Link></li>
        <li className="nav-item"><Link to='/api'>API</Link></li>
      </ul>
    </div>
  </div>
</nav>

    // <div>
    //     <span className='menu-item'><Link to='/home111'>Home111&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/jsx'>Jsx&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/bootstrap'>Bootstrap&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/bootstrapreact'>BootstrapReact&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/state123'>State123&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/staterepeat'>StateRepeat&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/showhide'>ShowHide&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/statelist'>StateList&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/parent'>Parent&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/homepage'>HomePage&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='http://www.facebook.com'>Facebook&nbsp;&nbsp;</Link></span>

    //     <span className='menu-item'><Link to='/class'>Class&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/lifecycle'>Lifecycle&nbsp;&nbsp;</Link></span>
    //     <span className='menu-item'><Link to='/hookuseeffect'>HookUseEffect&nbsp;&nbsp;</Link></span>

    //     </div>

        /* <a href='/home111'>Home111&nbsp;&nbsp;</a>
        <a href='/jsx'>Jsx&nbsp;&nbsp;</a>
        <a href='/bootstrap'>Bootstrap&nbsp;&nbsp;</a>
        <a href='/bootstrapreact'>BootstrapReact&nbsp;&nbsp;</a>
        <a href='/state123'>State123&nbsp;&nbsp;</a>
        <a href='/staterepeat'>StateRepeat&nbsp;&nbsp;</a>
        <a href='/showhide'>ShowHide&nbsp;&nbsp;</a>
        <a href='/statelist'>StateList&nbsp;&nbsp;</a>
        <a href='/parent'>Parent&nbsp;&nbsp;</a>
        <a href='/homepage'>HomePage&nbsp;&nbsp;</a>
        <a href='http://www.facebook.com'>Facebook&nbsp;&nbsp;</a> */

    
  )
}

export default MenuBar
