import React, { useState, useEffect } from 'react';

/* 
  # useEffect(() => {return () => {}, [])
    * componentWillUnmount의 대체
*/

const Example7 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      /*  
        # componentWillUnmount
          * 컴포넌트가 제거 될때 리소를 제거 해주는데 사용된다.
       */
      clearInterval(timer);
    };
  }, []);

  return <div>{time.toISOString()}</div>;
};

export default Example7;