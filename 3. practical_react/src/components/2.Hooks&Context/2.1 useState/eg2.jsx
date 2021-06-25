import React, { useState } from 'react';

/* 
  const [count, setCount] = useState(0);
  const [스테이트 값, 스테이트 변경 함수] = useState(스테이트 초기값);
*/

const Example2 = () => {
  const [count, setCount] = useState(0);

  function click() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Example2</h2>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example2;