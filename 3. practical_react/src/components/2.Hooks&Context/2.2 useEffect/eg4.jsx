import { useEffect, useState } from "react";

/* 
  # useEffect로 componentDidMount, componentDidUpdate, componentWillUnmount 대체
    * useEffect(() => {return () => {}, [])
    * [count, count1]의미: state value인 count, count1이 변경될때 useEffect callback function이 trigger된다.

  # useEffect callback function이 trigger되는 시점
    * componentDidMount
    * componentDidUpdate
    * useEffect 함수 두번째 인자값(dependency list)여부에 따라서 
      * 빈 dependency list가 있으면 
    * 에 배열로 설정한 state값이 변경 된 경우
*/

const Example4 = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [time, setTime] = useState(new Date());


  /* 
    * []: dependency list(useEffect의 두번째 인자값)

    # POINT1: dependency list가 없는 경우 
      * componentDidMount & componentDidUpdate에 trigger
  
    # POINT2: dependency list가 빈 배열이면
      * compoenentDidMount인 경우에만 trigger
      
    # POINT3: dependency list에 state값이 있는 경우 
      * componentDidMount & componentDidUpdate에 trigger
      * 설정된 state값이 변경 된경우에만 trigger   
        
    # POINT4: dependency list가 빈 배열 && useEffect callback function에 return에 함수를 작성하면
      * componentWillUnmount될때 trigger 
      * 컴포넌트가 제거 될때 리소를 제거 해주는데 사용된다.
    
    # POINT5: dependency list에 배열에 특정 state값이 있는경우 && useEffect callback function에 return에 함수를 작성하면
      * dependency list에 작성한 state 값이 변경됐을때 useEffect return에 설정된 함수가 trigger된다.
      * trigger될때 decendency list에 작성한 state값이 변경되기 전에 callback function return에서 접근 할 수 있다.
  */

  // # POINT1: dependency list가 없는 경우 
  useEffect(() => {
    console.log('# componentDidMount & componentDidUpdate > count, cont1', count, count1);
  });


  // # POINT2: dependency list가 빈 배열이면
  useEffect(() => {
    console.log('## componentDidMount > count, cont1', count, count1);
  },[]);
  

  // # POINT3: dependency list에 state값이 있는 경우 
  useEffect(() => {
    console.log('### componentDidMount & componentDidUpdate > count, cont1', count, count1);
  },[count, count1]);
  
  // # POINT4: dependency list가 빈 배열 && useEffect callback function에 return에 함수를 작성하면
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

  // # POINT5: dependency list에 배열에 특정 state값이 있는경우 && useEffect callback function에 return에 함수를 작성하면
  useEffect(() => {
    console.log('#### componentDidMount & componentDidUpdate > count, cont1', count);
    return (arg) => {
      /* 
        # 예
          * count state가 현재 1에서 2로 변경될 때 
          * 이곳에서는 count는 1이 된다.
      */
      console.log("# POINT5: arg, count", {arg, count});  // arg: undefined, count: 변경되기 전인 count state값이 찍힌다.
    }
  },[count]);

  function click() {
    setCount(count + 1);
  }

  function click1() {
    setCount1((state) => {
      return ++state;
    });
  }
  function click2() {
    setCount2((state) => {
      return state+1;
    });
  }

  return (
    <div>
      <div>{time.toISOString()}</div>
      <p>You clicked {count}, {count1}, {count2} times</p>
      <button onClick={click}>Click me</button>
      <button onClick={click1}>Click1 me</button>
      <button onClick={click2}>Click2 me</button>
    </div>
  );
};

export default Example4
;