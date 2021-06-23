import React from 'react';

export default class Uncontrolled1 extends React.Component {
  _input = React.createRef();

  render() {
    return (
      <div>
        <input ret={this._input} />
      </div>
    );
  }
}