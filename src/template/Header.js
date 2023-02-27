import React, { useContext } from 'react';
import {DataAppContext} from '../DataApp';

const Header = () => {

  const localContextDataFromGlobal = useContext(DataAppContext);
  //console.log('data from global context - ', localContextDataFromGlobal)

  const {appState, setAppState} = localContextDataFromGlobal;

  const loginFn = () => {
    setAppState({...appState, loginStatus: true});
  }

  const logoutFn = () => {
    setAppState({...appState, loginStatus: false});
  }

  const toggleThemeFn = () =>{
    setAppState({...appState, bgColor: !appState.bgColor});
  }

  //hw - make a common fn for login/logout

  return (
    <div className="row bg-primary-subtle">
                    <div className="col-6">
                        Sample Header
                    </div>
                    <div className="col-6">
                        {appState.loginStatus && <>Hi - {appState.username}</>}
                        <button onClick={loginFn}>LogIn</button>
                        <button onClick={logoutFn}>LogOut</button>
                        {/* apply condition to show login logout button */}
                        <button onClick={toggleThemeFn}>Toogle Theme</button>
                    </div>
                </div>
  )
}

export default Header
