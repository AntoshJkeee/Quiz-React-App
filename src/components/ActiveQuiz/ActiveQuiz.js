import classes from './ActiveQuiz.module.css'

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
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}

export default ActiveQuiz
