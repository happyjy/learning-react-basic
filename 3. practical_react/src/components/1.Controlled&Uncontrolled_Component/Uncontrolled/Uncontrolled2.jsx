import React from 'react';

const Uncontrolled2 = () => {
  const inputRef = React.createRef();

  function click() {
    console.log('최종 결과', inputRef.current.value);
  }
  
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>전송</button>
    </div>
  );
};

export default Uncontrolled2;