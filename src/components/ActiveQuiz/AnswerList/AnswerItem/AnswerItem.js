import classes from './AnswerItem.module.scss'

function AnswerItem (props) {
  console.log(props)
  return (
    <li className={classes.activeQuizItem} onClick={() => props.onAnswerClick(props.answer.id)}>
      {props.answer.text}
    </li>
  )
}

export default AnswerItem;
