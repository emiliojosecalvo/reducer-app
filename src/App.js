import React, { useReducer } from 'react';
import './App.css';

//define the reducer function that we are going to use in the reducer
function countReducer(state, action) {
  switch (action.type) {
    case ('ADD'):
      return { count: state.count + action.amount }
    case ('REMOVE'):
      return { count: state.count - action.amount }
    case ('RESET'):
      return { count: 0 }
    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })//define the reducer that gives back a state and a function
  return (
    <div className="App">
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'ADD', amount: 1 })}>Add 1</button>
      <button onClick={() => dispatch({ type: 'ADD', amount: 5 })}>Add 5</button>
      <button onClick={() => dispatch({ type: 'REMOVE', amount: 1 })}>Remove 1</button>
      <button onClick={() => dispatch({ type: 'REMOVE', amount: 5 })}>Remove 5</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default App;
