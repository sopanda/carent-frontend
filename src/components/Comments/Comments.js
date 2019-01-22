import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Comment from "./Comment/Comment";

let commentsList = [
  {
    id: "1",
    author: "Connor Leech",
    text:
      " Vitae delicata repudiare id nec, aperiri docendi verterem sed et, at magna eripuit mel. Ne diceret docendi rationibus ius. Veri error phaedrum mel ei. Vim diam democritum et. Usu soluta lucilius scripserit ex, cu agam quidam nec."
  },
  {
    id: "2",
    author: "Long John Silver",
    text:
      " Vitae delicata repudiare id nec, aperiri docendi verterem sed et, at magna eripuit mel. Ne diceret docendi rationibus ius. Veri error phaedrum mel ei. Vim diam democritum et. Usu soluta lucilius scripserit ex, cu agam quidam nec."
  },
  {
    id: "3",
    author: "Damon Albarn",
    text:
      " Vitae delicata repudiare id nec, aperiri docendi verterem sed et, at magna eripuit mel. Ne diceret docendi rationibus ius. Veri error phaedrum mel ei. Vim diam democritum et. Usu soluta lucilius scripserit ex, cu agam quidam nec."
  }
];

export default class Comments extends Component {
  render() {
    let comments = commentsList.map(comment => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <Row>
        <Col>{comments}</Col>
      </Row>
    );
  }
}
