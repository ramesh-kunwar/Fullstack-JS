import React, { useState } from 'react'
import Header from './components/Header'

import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) =>{

    newFeedback.id = Math.random()
    console.log(newFeedback);

    setFeedback([newFeedback, ...feedback])
  }
  
  const deleteFeedback = (id) =>{
    if(window.confirm("Are you sure you want to delete ? ")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <div className='container'>
      <Header text={'Feedback UI'} />
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>

    </div>
  )
}

export default App