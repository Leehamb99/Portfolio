import React from 'react'
import { QuestionCard } from '../../components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

const Home = () => {
  const a = Math.floor(Math.random() * (3 - 1));
  const [questions, setQuestions] = useState([])
  const [isLoading, setLoading] = useState(true);
  const QuestionGetter = () => {
    setLoading(true)

    axios.get("https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple").then((response) => {
     setQuestions(response.data.results[0])
     setLoading(false)
  })
    .catch(err => {
      console.log(err)
    })
};
  useEffect(() => {
    QuestionGetter()
  }, [])
  
  if (isLoading) {
    return(<div> Hang tight, I'm grabbing some data!</div>)
  }


     return (
<>

      

    <div className='homeCard'>
      <RefreshIcon onClick={QuestionGetter}/>
    <div className='cardContent'>
      <h2> Let's quickly test your tech knowledge! </h2>
      <h2>
        {questions.question}
        </h2>
    </div>

    </div>

    <div className='questionContainer'>

    < QuestionCard answer={0} a={a} questionData = {questions}/>
    < QuestionCard answer={1} a={a} questionData = {questions}/>
    < QuestionCard answer={2} a={a} questionData = {questions}/> 
    </div>
    
      
      
    
</>
     )
  
}

export default Home;

