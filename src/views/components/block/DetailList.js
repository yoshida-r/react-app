import React from 'react';
import styles from './detail-list.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const DetailList = (props) => {
  let link = `/study/${props.lang}/${props.num}`;
  let img = `../../../img/${props.lang}.png`;
  return (
    <div>
      <Card>
        <CardContent>
          <div>
            <img src={img} style={{width: "30px", height: "30px"}} />
          </div>
          <div>{props.title}</div>
          <div>{props.desc}</div>
          <Link to={link}>
            <Button variant="contained" color="primary">
              レッスンを始める
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailList;