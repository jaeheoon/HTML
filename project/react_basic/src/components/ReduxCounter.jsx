import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ReduxCounter() {
  // dispatch 획득
  const dispatch = useDispatch();

  // state에 저장된 속성 선택
  const count = useSelector(state => {
    // console.log(state);
    // console.log(state.counter);
    return state.counter.value;
  });

  const style = {
    fontSize: '30pt',
  };

  return (<>
    <div style={style}>
      <div>{count}</div>
      <button onClick={() => {
        dispatch({ type: 'counterSlice/down', step: 2 });
      }}>-</button>
      <span>   </span>
      <button onClick={() => {
        dispatch({ type: 'counterSlice/reset'});
      }}>0</button>
      <span>   </span>
      <button onClick={() => {
        dispatch({ type: 'counterSlice/up', step: 2 });
      }}>+</button>
    </div>
  </>
  );
}

export default ReduxCounter;