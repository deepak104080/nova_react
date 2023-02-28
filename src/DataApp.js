import React, {useEffect, useState} from "react";

export const DataAppContext = React.createContext();

const DataApp = (props) => {

    const initialValues = {
        loginStatus: false, //false means not logged in
        username: 'Newton School', //username
        bgColor: false //false means dark theme and true means light theme - '#eeeeee and #111111'
    }
    const [appState, setAppState] = useState(initialValues);

    useEffect(() => {
        console.log('Global Context - ', appState);
    })

    return(
        <>
            <DataAppContext.Provider value={{appState, setAppState }}>
                <div className="container-fluid" style={{'background': appState.bgColor ? '#111111' : '#eeeeee'}}>
                    <div className="container">
                        {props.children}
                    </div>
                </div>
            </DataAppContext.Provider>

        </>
    )
}

export default DataApp;



//creating of react context var
//creation of provider
//creation of consumer with useContext
//creation of consumer in class comp
//creation of global context and wraper
//shifting warpper to different file
//login management with context
//theme togle using context


//  limitations
// all componnets render everytime
// single file to store all context values - in form of state
// scalibility - 100+ components - context value can be huge and complex to manage



//Redux - useReducer Hook
