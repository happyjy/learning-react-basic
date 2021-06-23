import React from 'react';

export default class Uncontrolled extends React.Component {
  /* POINT: uncontrolled component는 state, props로 관리 되는게 아니라 ref에 의해서 관리 된다.  */
  _input = React.createRef();

  render() {
    return (
      <div>
        <span>Uncontrolled Component: </span>
        <input ref={this._input} />
        <button onClick={this._click}>전송</button>
      </div>
    );
  }

  _click = () => {
    console.log('최종 결과', this._input.current.value);
  };
}