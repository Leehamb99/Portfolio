import React from 'react'
import './style.css'

const QuestionCard = (props) => {
  console.log(props.questionData)

  
  return (
    <div className="qcontainer">
    <div className="qcard">
      <div className="qfront"> {props.answer === props.a ? props.questionData.correct_answer : props.questionData.incorrect_answers[props.answer]} </div>
      <div className="qback">
        <h2>{props.answer === props.a ? "Correct!" : "Incorrect"}</h2>
      </div>
    </div>
  </div>
  )
}

export default QuestionCard
