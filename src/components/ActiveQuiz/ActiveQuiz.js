import classes from './ActiveQuiz.module.scss'
import AnswerList from "./AnswerList/AnswerList";

function ActiveQuiz (props) {

  return (
    <div className={classes.activeQuiz}>
      <p className={classes.question}>
        <span>
          <strong>{props.answerNumber}. </strong>
          {props.question}
        </span>
        <small>{props.answerNumber} из {props.answerLength}</small>
      </p>
      <AnswerList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        state={props.state}
      />
    </div>
  )
}

export default ActiveQuiz
