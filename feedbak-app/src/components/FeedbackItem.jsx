import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

const FeedbackItem = ({ item, handleDelete }) => {
  const handleClick = (id) => {
    handleDelete();
  };
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={handleClick}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display"> {item.text} </div>
    </Card>
  );
};

export default FeedbackItem;
