import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

function Quiz () {
  return (
    <div className={classes.quiz}>
      <div className={classes.activeQuizWrapper}>
        <h1 className={classes.mainText}>Quiz</h1>
        <ActiveQuiz />
      </div>
    </div>
  )
}

export default Quiz;
