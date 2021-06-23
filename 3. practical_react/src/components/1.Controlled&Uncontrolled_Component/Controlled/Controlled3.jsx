import React from 'react';

export default class Controlled3 extends React.Component {
  state = { value: '' };

  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this._change} />
        <button onClick={this._click}>전송</button>
      </div>
    );
  }

  _change = e => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  _click = () => {
    console.log('최종 결과', this.state.value);
  };
}