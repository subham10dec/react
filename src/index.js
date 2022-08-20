import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const rootReducer=(state=0,action)=>{
  console.log("reducer invoked")
  switch(action.type)
  {
    case "DEPOSIT":
      return state +100;
      case "WITHDRAW":
        return state - 100;
      default:
        return state;
  }
}
//store
const storevar=createStore(rootReducer,0,composeWithDevTools());
console.log(storevar.getState());

//dispatch
storevar.dispatch({type :"DEPOSIT"});
console.log(storevar.getState());
storevar.dispatch({type :"DEPOSIT"});
console.log(storevar.getState());
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
