import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';


//create middleware
// function logger(obj,next,action)
// const logger = function ({dispatch, getstate}){
//   return function(next){
//     return function(action){
//       // middleware here
//       console.log('ACTION_TYPE=', action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getstate}) => (next) => (action) =>{
  // console.log('ACTION_TYPE=', action.type);
  if(typeof action === 'function'){
        console.log('ACTION_TYPE=', action.type);
        // return;
      }
      next(action);
} 

// const thunk = ({dispatch, getstate}) => (next) => (action) =>{
//   if(typeof action === 'function'){
//     action (dispatch);
//     return;
//   }
//   next(action);
// } 

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name : 'Superman'}]
// });

ReactDOM.render(
  // <React.StrictMode>
    <App store = {store}/>,
  // </React.StrictMode>,
  document.getElementById('root')
);

