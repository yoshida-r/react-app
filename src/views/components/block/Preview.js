import React from 'react';
import styles from './preview.scss';
import { ReactTerminal } from "react-terminal";
import Terminal from 'terminal-in-react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   preveiw: props
    // };
    // this.commands = {
    //   whoami: "admin",
    //   ls: "index.js",
    //   pwd: "/",
    //   cd: (directory) => `changed path to ${directory}`,
    //   "index.js": this.change, 
    //   text: () => {
    //     return this.props.prevew;
    //   }
    // };
  }

  render() {
    let aList = [];
    for (const value of this.props.answer) {
      aList.push(value);
    }
    let js = <div>
              <div>
                <div className="title">
                  コンソール
                  <div className="execute" onClick={this.console.bind(this)}>▶︎</div>
                </div>
                <Terminal 
                  hideTopBar={true}
                  allowTabs={false}
                  promptSymbol=""
                  style={{ height: "290px" }}
                  commands={{
                    'pwd': () => {
                      return '/home/user';
                    },
                    'ls': () => {
                      return 'index.js';
                    }
                  }}
                />
              </div>
              <div>
                <div className="title title--sample">
                  見本
                  <div className="execute" onClick={this.sample.bind(this)}>▶︎</div>
                </div>
                <Terminal
                  hideTopBar={true}
                  allowTabs={false}
                  promptSymbol=""
                  style={{ height: "290px" }}
                  commands={{
                    'pwd': () => {
                      return '/home/user';
                    },
                    'ls': () => {
                      return 'index.js';
                    }
                  }}
                />
              </div>
            </div>;
    let html = <div>
                  <div className="title">プレビュー</div>
                  <div dangerouslySetInnerHTML={{
                    __html: this.props.preview
                  }} className="preview">
                    {/*  */}
                  </div>
                  <div className="title title--sample">見本</div>
                  <div dangerouslySetInnerHTML={{
                    __html: aList.join('')
                  }} className="answer">
                    {/*  */}
                  </div>
                </div>
    return (
      <div className="preview-area">
        {this.props.lang === 'js' ? js : html}
        {/* <script>
          var a = function() {
            alert('a')
          }
          a();
        </script> */}
      </div>
    )
  }

  console() {
    let dom = document.getElementsByClassName('sc-VigVT')[0];
    let element = document.createElement('pre');
    let content = document.createTextNode(this.props.emulate);
    let beforeContent = document.getElementsByClassName('sc-htoDjs')[0];
    element.setAttribute('class', 'sc-gzVnrw duUAwb');
    element.appendChild(content);
    dom.insertBefore(element, beforeContent);
  }

  sample() {
    let dom = document.getElementsByClassName('sc-VigVT')[1];
    let element = document.createElement('pre');
    let content = document.createTextNode(this.props.emulate);
    let beforeContent = document.getElementsByClassName('sc-htoDjs')[1];
    element.setAttribute('class', 'sc-gzVnrw duUAwb');
    element.appendChild(content);
    dom.insertBefore(element, beforeContent);
  }
}

export default Preview;