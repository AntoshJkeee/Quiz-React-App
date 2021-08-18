import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import {useState} from "react";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

function Quiz () {

  let [isFinish, setIsFinish] = useState(false)
  let [activeQuestion, setActiveQuestion] = useState(0)
  let [answerState, setAnswerState] = useState(null)
  let [results, setResults] = useState({}) // { [id] : 'success' : 'error' }
  let [quiz] = useState([
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
      id: 1
    },
    {
      question: [
        'Сколько дней в неделе ?'
      ],
      answers: [
        {text: 'Семь', id: 1},
        {text: 'Три', id: 2},
        {text: 'Десять', id: 3},
        {text: 'Один', id: 4},
      ],
      rightAnswerId: 1,
      id: 2
    },
    {
      question: [
        'Когда мы уедем с этой квартиры ?'
      ],
      answers: [
        {text: 'Через месяц', id: 1},
        {text: 'Никогда', id: 2},
        {text: 'Выращу здесь все свое потомство', id: 3},
        {text: 'Когда возьму кредит', id: 4},
      ],
      rightAnswerId: 4,
      id: 3
    },
  ])

  function returnNewQuiz() {
    console.log('update !')
    setActiveQuestion(0)
    setIsFinish(false)
    setResults({})
  }

  function onAnswerClickHandler(answerId) {

    if(answerState) {
      const key = Object.keys(answerState)[0];
      if(answerState[key] === 'success') {
        return
      }
    }

    const question = quiz[activeQuestion]

    if(question.rightAnswerId === answerId) {

      setAnswerState({
        answerState: {[answerId] : 'success'}
      })

      let timeout = window.setTimeout(()=> {
        setAnswerState(null)
        if(isQuizFinish()) {
          setIsFinish(true)
        } else {
          setActiveQuestion(prev => {
            return prev + 1
          })
        }
        window.clearTimeout(timeout)
      }, 1000)

    } else {
      setAnswerState({
        answerState: {[answerId]: 'error'}
      })
    }

    if (!([activeQuestion] in results)) {
      setResults(prev => ({
        ...prev,
        [activeQuestion]: question.rightAnswerId === answerId
      }))
    }
  }

  function isQuizFinish() {
    return activeQuestion + 1 === quiz.length
  }

  return (
    <div className={classes.quiz}>
      <div className={classes.activeQuizWrapper}>
        {
          isFinish
          ? <FinishedQuiz
              answerLength={quiz.length}
              quiz={quiz}
              updateQuiz={returnNewQuiz}
              results={results}
            />
          :
            <div>
              <h1 className={classes.mainText}>Ответьте на все вопросы</h1>
              <ActiveQuiz
                answers={quiz[activeQuestion].answers}
                question={quiz[activeQuestion].question}
                onAnswerClick={onAnswerClickHandler}
                answerLength={quiz.length}
                answerNumber={activeQuestion + 1}
                state={answerState}
              />
            </div>
        }
      </div>
    </div>
  )
}

export default Quiz;
