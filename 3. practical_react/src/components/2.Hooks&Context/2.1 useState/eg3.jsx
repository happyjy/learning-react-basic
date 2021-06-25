/* 
  # dictionary 객체를 useState로 
    * const [state, setState] = useState({count: 0});
    * const [스테이트 값, 스테이트 변경 함수] = useState(스테이트 초기값);
    * 
  
  # POINT - setState시 state 의존에 대해서 
    * 방법 A, B에 대해서 

*/

import React, { useState } from 'react';

const Example3 = () => {
  const [stateNum, setCountNum] = useState({ count: 0 });

  function click() {
    // # 방법 A
    //  * setCount({ count: state.count + 1 });

    /* 
      # 기존 state값에 의존적으로 변경 하고 싶을 때 
        => 위 처럼 객체가 아니라 함수를 사용한다.
        => 방법 A: dependency는 외부
        => 방법 B: dependency는 setCount 인자값 함수로 관리되고 있는 state값이 넘어 온다.
    */
    // # 방법 B 
    setCountNum((state) => ({ count: state.count + 1 }));
  }

  return (
    <div>
      <h2>Example3</h2>
      <p>You clicked  {stateNum.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example3;