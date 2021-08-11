import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import {useState} from "react";

function Quiz () {

  let [quiz, setQuiz] = useState([
    {
      question: [
        'Какого цвета небо ?'
      ],
      answers: [
        {text: 'Черное', id: 1},
        {text: 'Голубое', id: 2},
        {text: 'Красное', id: 3},
        {text: 'Желтое', id: 4},
      ],
      rightAnswerId: 2,
    },
  ])

  function onAnswerClickHandler(answerId) {
    console.log('Answer ID', answerId)
  }

  return (
    <div className={classes.quiz}>
      <div className={classes.activeQuizWrapper}>
        <h1 className={classes.mainText}>Ответьте на все вопросы</h1>
        <ActiveQuiz answers={quiz[0].answers} question={quiz[0].question} onAnswerClick={onAnswerClickHandler}/>
      </div>
    </div>
  )
}

export default Quiz;
