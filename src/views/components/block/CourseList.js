import React from 'react';
import Grid from '@material-ui/core/Grid'; 
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import styles from './course-list.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let img = `./img/${this.props.img}.png`;
    return (
      <div>
        <Link to={`/details/${this.props.lang}`}>
          <Card>
            <CardContent>
              <div>
                {this.props.title}
              </div>
              <div>
                <img src={img} style={{width: "30px", height: "30px"}} />
              </div>
              <div>{this.props.body}</div>
              <div>{this.props.lesson}</div>
            </CardContent>
          </Card>
        </Link>
      </div>
    )
  }
}

export default Editor;