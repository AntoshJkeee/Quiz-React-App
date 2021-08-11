import classes from './ActiveQuiz.module.scss'
import AnswerList from "./AnswerList/AnswerList";

function ActiveQuiz (props) {
  return (
    <div className={classes.activeQuiz}>
      <p className={classes.question}>
        <span>
          <strong>2. </strong>
          {props.question}
        </span>
        <small>4 из 12</small>
      </p>
      <AnswerList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
}

export default ActiveQuiz
