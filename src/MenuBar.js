import React from 'react';
import {Link} from 'react-router-dom';

const MenuBar = (props) => {
  return (
    <>
    <div className='row bg-success-subtle'>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to='/home111' className="nav-link">Home111</Link></li>
            <li className="nav-item"><Link to='/jsx' className="nav-link">Jsx</Link></li>
            <li className="nav-item"><Link to='/bootstrap' className="nav-link">Bootstrap</Link></li>
            <li className="nav-item"><Link to='/bootstrapreact' className="nav-link">BootstrapReact</Link></li>
            <li className="nav-item"><Link to='/state123' className="nav-link">State123</Link></li>
            <li className="nav-item"><Link to='/staterepeat' className="nav-link">StateRepeat</Link></li>
            <li className="nav-item"><Link to='/showhide' className="nav-link">ShowHide</Link></li>
            <li className="nav-item"><Link to='/statelist' className="nav-link">Statelist</Link></li>
            <li className="nav-item"><Link to='/parent' className="nav-link">Parent</Link></li>
            <li className="nav-item"><Link to='/homepage' className="nav-link">HomePage</Link></li>
            <li className="nav-item"><Link to='/class' className="nav-link">Class</Link></li>
            <li className="nav-item"><Link to='/lifecycle' className="nav-link">Lifecycle</Link></li>
            <li className="nav-item"><Link to='/hookuseeffect' className="nav-link">HookUseEffect</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to='/api' className="nav-link">API</Link></li>
          <li className="nav-item"><Link to='/form' className="nav-link">  Form   </Link></li>
          <li className="nav-item"><Link to='/formcomplete' className="nav-link">  Form  2 </Link></li>
          <li className="nav-item"><Link to='/emi' className="nav-link"> EMI </Link></li>
          <li className="nav-item"><Link to='/parentprops' className="nav-link"> Props Drilling </Link></li>
          <li className="nav-item"><Link to='/parentcontext' className="nav-link"> Context </Link></li>
          <li className="nav-item"><Link to='/hookusereducer' className="nav-link"> HookUseReducer </Link></li>
          <li className="nav-item"><Link to='/reffn' className="nav-link"> Ref Fn </Link></li>
          <li className="nav-item"><Link to='/refclass' className="nav-link"> Ref Class </Link></li>
          <li className="nav-item"><Link to='/portal' className="nav-link">Portal</Link></li>
          <li className="nav-item"><Link to='/category' className="nav-link">Category</Link></li>
          <li className="nav-item"><Link to='/login' className="nav-link">Login</Link></li>
          <li className="nav-item"><Link to='/hoc_country' className="nav-link">HOC Country</Link></li>
          <li className="nav-item"><Link to='/hoc_state' className="nav-link">HOC State</Link></li>
        </ul>
      </div>
    </div>
    </nav>
    </div>
  </>


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
