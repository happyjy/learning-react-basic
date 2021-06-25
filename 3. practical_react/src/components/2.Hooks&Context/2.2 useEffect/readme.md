* eg4에서 useEffect가 class component의 lifecycle "componentDidMount, componentDidUpdate, componentWillUnmount를 대체 하는 방법에 대해서
5가지 케이스로 작성

* eg5, eg6.jsx 파일에서는 "componentDidMount, componentDidUpdate, componentWillUnmount" 기능에 대해서 알아 봤다.

* 추가 자료
  * react팀원인 Dan Abramov가 작성한 'A Complete Guide to useEffect' 글의 번역이며 아래와 같은 목차를 가지고 있다.
    * 목차
      * TLDR (Too Long; Didn’t Read - 요약)
      * 모든 랜더링은 고유의 Prop과 State가 있다
      * 모든 랜더링은 고유의 이벤트 핸들러를 가진다
      * 모든 랜더링은 고유의 이펙트를 가진다
      * 모든 랜더링은 고유의… 모든 것을 가지고 있다
      * 흐름을 거슬러 올라가기
      * 그러면 클린업(cleanup)은 뭐지?
      * 라이프사이클이 아니라 동기화
      * 리액트에게 이펙트를 비교하는 법을 가르치기
      * 리액트에게 의존성으로 거짓말하지 마라
      * 의존성으로 거짓말을 하면 생기는 일
      * 의존성을 솔직하게 적는 두 가지 방법
      * 이펙트가 자급자족 하도록 만들기
      * 함수형 업데이트와 구글 닥스(Google Docs)
      * 액션을 업데이트로부터 분리하기
      * 왜 useReducer가 Hooks의 치트 모드인가
      * 함수를 이펙트 안으로 옮기기
      * 하지만 저는 이 함수를 이펙트 안에 넣을 수 없어요
      * 함수도 데이터 흐름의 일부인가?
      * 경쟁 상태에 대해
      * 진입 장벽을 더 높이기
      * 마치며
  * [useEffect 완벽가이드 번역](https://rinae.dev/posts/a-complete-guide-to-useeffect-ko)
