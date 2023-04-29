import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import Header from "./component/header";
import FeedbackList from './component/feedbackList';
import feedbackData from "./data/feedbackData";
import FeedbackStats from "./component/feedbackStats";
import FeedbackForm from "./component/feedbackForm";
import About from './pages/aboutPage';


const App = () => {
  const [feedBack, setFeedBack] = useState(feedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedBack(feedBack.filter(item => {
        return item.id !== id
      })
      )
    }

  }

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4()
    setFeedBack([newFeedBack, ...feedBack])
  }

  return (
    <Router>

      <Header />
      <div className="container">

        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedBack} />
              <FeedbackStats feedBack={feedBack} />
              <FeedbackList feedBacks={feedBack} handleDelete={deleteFeedback} />
            </>
          }>
          </Route>
          <Route path='/about' element={<About />} />

        </Routes>
    </div>
    </Router>
  )


}

export default App;