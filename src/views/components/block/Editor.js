import React from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Process from './Process';
import Preview from './Preview';

import styles from './editor.scss';
import SelectInput from '@material-ui/core/Select/SelectInput';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: localStorage.getItem(this.props.studyInfo.setItem) ? this.props.studyInfo.previewS : this.props.studyInfo.preview,
      isAchieve: localStorage.getItem(this.props.studyInfo.setItem) || false,
      wait: false,
      open: false,
    };
    this.errorMessage = null;
    this.study = this.props.studyInfo;
  }

  render() {
    return (
      <div className="editor-area">
        <Process answer={this.study.answer} />
        <AceEditor
          mode={this.study.lang === 'html' ? 'html' : 'javascript'}
          theme="monokai"
          name="UNIQUE_ID_OF_DIV"
          highlightActiveLine="true"
          value={this.state.preview}
          editorProps={{ $blockScrolling: true }}
          onChange={this.updatePreview.bind(this)}
        />
        <Preview preview={this.state.preview} answer={this.study.answer} lang={this.study.lang} emulate={this.study.emulate} className="preview"/>
        <div className="btn-area">
          <Button variant="contained" color="primary" className="reset" onClick={this.reset.bind(this)}>
            リセット
          </Button>
          <Button variant="contained" color="primary" className="submit" onClick={this.check.bind(this)}>
            できた
          </Button>
        </div>
        {this.state.wait && 
        <div className="wait">
          <CircularProgress className="loading"/>
        </div>
        }
        <Snackbar open={this.state.open}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        autoHideDuration={6000}
        onClose={this.handleClose.bind(this)}>
          <Alert onClose={this.handleClose.bind(this)} severity="error">
            {this.errorMessage}
          </Alert>
        </Snackbar>
      </div>
    )
  }

  updatePreview(newValue) {
    this.setState({preview: newValue});
  }

  check() {
    this.setState({wait: true});

    setTimeout(() => {
      let preview = this.state.preview;
      for (const [index, value] of this.study.quesMatch.entries()) {
        let re = new RegExp(this.study.quesMatch[index]);
        console.log(re);
        console.log(this.state.preview);
        if (!preview.match(re)) {
          this.setState({wait: false});
          this.errorMessage = this.study.errMes[index];
          this.setState({open: true});
          return;
        }
      }
      this.setState({wait: false});
      this.state.isAchieve = true;
      localStorage.setItem(this.study.setItem, true);
      window.location.href = window.location.host + this.study.reload;
    }, 1000);
  }

  reset() {
    localStorage.removeItem(this.study.setItem);
    window.location.href = this.study.reload;
  }

  handleClose() {
    this.setState({open: false});
  }
}

export default Editor;