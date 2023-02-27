import React from 'react'
import './style.css'

const QuestionCard = (props) => {
  console.log(props.questionData)



  
  return (
    <div className="qcontainer">
    <div className="qcard">
      <div className="qfront"> {props.answer === props.a ? props.questionData.correct_answer : props.questionData.incorrect_answers[props.answer]} </div>
      <div className="qback" style={{backgroundColor: props.answer === props.a ? "green" : "red"}}>
        <h2>{props.answer === props.a ? <div>Correct!</div> : <div>Incorrect </div>}</h2>
      </div>
    </div>
  </div>
  )
}

export default QuestionCard
