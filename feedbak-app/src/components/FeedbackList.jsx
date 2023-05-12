import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
const FeedbackList = ({ feedback }) => {
  console.log(feedback[0].rating);
  if (!feedback || feedback.lenght === 0) {
    return <p>No feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
       return  <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem
            key={feedback.id}
            item={item}
            handleDelete={(id) => console.log(id)}
          />
        </motion.div>;
      })}
    </div>

    // WITHOUT ANIMATION
    // <div className="feedback-list">
    //   {/* <FeedbackItem /> */}
    //   {feedback.map((item) => {
    //     return <FeedbackItem key={feedback.id} item={item} handleDelete={(id)=> console.log(id)} />;
    //   })}
    // </div>
  );
};

export default FeedbackList;
