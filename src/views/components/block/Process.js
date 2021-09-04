import React from 'react';
import styles from './process.scss';
import { createRef } from 'react';

class Process extends React.Component {
  constructor(props) {
    super(props);
    for (const [index, value] of this.props.answer.entries()) {
      this.["process" + index] = React.createRef();
    }
  }

  render() {
    let pList = [];
    for (const [index, value] of this.props.answer.entries()) {
      pList.push(
      <div>
        {index + 1}  <textarea ref={this.["process" + index]} type="text" readOnly>{value}</textarea>
        <button onClick={this.copy.bind(this, this.["process" + index])}>コピー</button>
      </div>);
    }
    return (
      <div className="process">
        {pList}
      </div>
    )
  }

  copy(ref) {
    ref.current.select();
    document.execCommand("Copy");
  }
}

export default Process