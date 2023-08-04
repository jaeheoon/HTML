import React, { useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

function ReduxApp() {
  const [count, countDispatch] = useReducer(countReducer, 0);
  const [number, setNumber] = useState(1);

  function countReducer(oldCount, action) {
    const newState = { ...oldCount };
    if (action.type === 'UP') {
      newState.number++;
    } else if (action.type === 'DOWN') {
      newState.number--;
    } else if (action.type === 'RESET') {
      newState.number = 0;
    }
    return newState;
  }

  const store = createStore(countReducer);

  function changeNumber(event) {
    setNumber(Number(event.target.value));
  }

  function down() {
    countDispatch({ type: 'DOWN', number: number });
  }
  function reset() {
    countDispatch({ type: 'RESET', number: number });
  }
  function up() {
    countDispatch({ type: 'UP', number: number });
  }

  return (
    <div>
        <input type="button" value="-" onClick={down} />
        <input type="button" value="0" onClick={reset} />
        <input type="button" value="+" onClick={up} />
        <input type="text" value={number} onChange={changeNumber} />
        <span>{count}</span>
    </div>
  );
}

export default ReduxApp;
