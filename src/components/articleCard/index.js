import React from "react";
import Card from "react-bootstrap/Card";
import IconButton from "../button/iconButton";
const Index = ({
  date,
  title,
  text,
  upVoteAmount,
  downVoteAmount,
  onClickUpVote,
  onClicDownVote,
}) => {
  return (
    <div className="mb-3">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <div className="align-right">
            <IconButton
              type="up"
              sideText={upVoteAmount}
              onClick={onClickUpVote}
            ></IconButton>
            <IconButton
              type="down"
              sideText={downVoteAmount}
              onClick={onClicDownVote}
            ></IconButton>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Index;
