import { useState } from "react";

function Counter() {
    // 훅(Hook) 함수
    let [count, setCount] = useState(1);
    // let count = array[0];       //값 저장
    // let setCount = array[1];    //값 세팅하는 함수
    const increamentCount = ()=>{
        setCount(count+1);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={increamentCount}>카운트 증가</button>
        </div>
    );
}
export default Counter;