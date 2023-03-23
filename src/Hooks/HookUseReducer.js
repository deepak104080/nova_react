import React, { useEffect, useReducer, useState } from 'react'

const HookUseReducer = () => {

    const initialValues = {
        balance: 50000,
        numTrn: 0,
        showBalance: false
    }


    //efficient way to update state
    const reducer = (state, action) => {
        console.log('action', action);
        const {type, payload} = action;
        switch(action.type) {
            case 'UPDATEBALANCE':
                //do some calculations and apply some logics
                return {
                    ...state,
                    numTrn: state.numTrn + 1,
                    balance: parseInt(payload)
                }
            case 'SHOWBALANCE': 
                return {
                    ...state,
                    showBalance: !state.showBalance
                }
            case 'DEPOSIT5000': 
                return {
                    ...state,
                    numTrn: state.numTrn + 1,
                    balance: state.balance + 5000
                }
            case 'DEPOSIT10000': 
                return {
                    ...state,
                    numTrn: state.numTrn + 1,
                    balance: state.balance + 10000
                }
            case 'DEPOSIT50000': 
                return {
                    ...state,
                    numTrn: state.numTrn + 1,
                    balance: state.balance + 50000
                }
            case 'WITHDRAW5000': 
                return {
                    ...state,
                    numTrn: state.numTrn + 1,
                    balance: state.balance - 5000
                }
            case 'WITHDRAW10000': 
                return {
                    ...state,
                    numTrn: state.numTrn + 1,
                    balance: state.balance - 10000
                }
            case 'WITHDRAW50000': 
                return {
                    ...state,
                    numTrn: state.numTrn + 1,
                    balance: state.balance - 50000
                }
            case 'INCREMENTTRN': 
                return {
                    ...state,
                    numTrn: state.numTrn + 1
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValues);
    // const [data, setData] = useState(initialValues);

    useEffect(() => {
        console.log('State Updated - ', state);
    })


    return (
        <div>
            <div>
                {state.showBalance && <h3>Balance - {state.balance}</h3>}
                <br></br>
                <h3>Num of Transactions - {state.numTrn}</h3>
                <br></br>



                <input type="number" onBlur={(e) => dispatch({type: 'UPDATEBALANCE', payload: e.target.value})} />
                <br></br>
                <button onClick={() => dispatch({type: 'SHOWBALANCE'})}>Show Balance</button>
                <br></br>
                <button onClick={() => dispatch({type: 'DEPOSIT5000'})}>Deposit 5000</button>
                <br></br>
                <button onClick={() => dispatch({type: 'DEPOSIT10000'})}>Deposit 10000</button>
                <br></br>
                <button onClick={() => dispatch({type: 'DEPOSIT50000'})}>Deposit 50000</button>
                <br></br>
                <button onClick={() => dispatch({type: 'WITHDRAW5000'})}>Withdraw 5000</button>
                <br></br>
                <button onClick={() => dispatch({type: 'WITHDRAW10000'})}>Withdraw 10000</button>
                <br></br>
                <button onClick={() => dispatch({type: 'WITHDRAW50000'})}>Withdraw 50000</button>
                <br></br>
                <button onClick={() => dispatch({type: 'INCREMENTTRN'})}>Increment Transaction by 1</button>


            </div>
        </div>
    )
}

export default HookUseReducer


//tranfer/withdraw
//deposit
//balance
//mini statement
//mandate - deduction on regular interval
//deposit on regular interval
//number of trn




//state update depends on previous state update
//easy to test
//complex state variable - not easy to manage
//code quality and repeating code




//reducer
//action - {type: '', payload: '55555'}
//dispatch - carrier of action


//useState vs useReducer


// re-render for all components using context variable
// combined state obj - tough to manage for very huge key value pairs
// api call data - context


// Redux - Library for State Management
// redux - json, angular, vie, js libraries


// Redux - State Management
// js - 
// angular
// vue

// React - Redux, Flow, ......

// React and Redux Projects


// redux
// react-redux

// https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif
//https://thumbs.gfycat.com/SociableCraftyAlpaca-max-1mb.gif

// 1) State/Store - Single source of truth

// shareable data on store/global state - redux
// non-shareable data - local state variable

// 2) Reducer - state, action

// 3) Action (dispatch) - type and payload



// Myntra / Flipkart / Meesho / Bookmyshow / Redbus / MMT - Redux

// E-Commerce - Redux Project