import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import {useState} from "react";

function Quiz () {

  let [activeQuestion, setActiveQuestion] = useState(0)
  let [answerState, setAnswerState] = useState(null)
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
        'Сколько пальцев у человека ?'
      ],
      answers: [
        {text: 'Пять', id: 1},
        {text: 'Три', id: 2},
        {text: 'Десять', id: 3},
        {text: 'Один', id: 4},
      ],
      rightAnswerId: 1,
      id: 2
    },
    {
      question: [
        'Когда мы съебемся с этой хаты ?'
      ],
      answers: [
        {text: 'Через месяц', id: 1},
        {text: 'Никогда', id: 2},
        {text: 'Выращу здесь все свое потомство', id: 3},
        {text: 'Владимир Владимирович Путин', id: 4},
      ],
      rightAnswerId: 4,
      id: 3
    },

  ])

  function onAnswerClickHandler(answerId) {

    const question = quiz[activeQuestion]
    if(question.rightAnswerId === answerId) {

      setAnswerState({
        answerState: {[answerId] : 'success'}
      })

      let timeout = window.setTimeout(()=> {
        setAnswerState(null)
        if(isQuizFinish()) {
          console.log('Finish')
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
  }

  function isQuizFinish() {
    return activeQuestion + 1 === quiz.length
  }

  return (
    <div className={classes.quiz}>
      <div className={classes.activeQuizWrapper}>
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
    </div>
  )
}

export default Quiz;
