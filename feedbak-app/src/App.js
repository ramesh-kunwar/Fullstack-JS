import React, { useState } from 'react'
import Header from './components/Header'

import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {

    newFeedback.id = Math.random()
    console.log(newFeedback);

    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    console.log(id, 'id');
    if (window.confirm("Are you sure you want to delete ? ")) {
      setFeedback(feedback.filter((item) => {
        // console.log(item.id, 'id' id);
        return item.id !== id
      }))
    }
    console.log(feedback);
  }
  return (
    <BrowserRouter>
      <div className='container'>

        <Routes>

          <Route path='/about' element={<AboutPage />} />
        </Routes>

        {/* <Header text={'Feedback UI'} />
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} /> */}

      </div>
      <AboutIconLink />

    </BrowserRouter>

  )
}

export default App