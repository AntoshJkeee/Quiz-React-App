import classes from './ActiveQuiz.module.scss'

function ActiveQuiz (props) {
  return (
    <div className={classes.activeQuiz}>
      <p>
        <span>
          <strong>2.</strong>
          Как дела ?
        </span>
      </p>
      <ul>
        <li className={classes.activeQuizItem}>1</li>
        <li className={classes.activeQuizItem}>2</li>
        <li className={classes.activeQuizItem}>3</li>
        <li className={classes.activeQuizItem}>4</li>
      </ul>
    </div>
  )
}

export default ActiveQuiz
