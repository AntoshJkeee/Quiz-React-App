import classes from './AnswerItem.module.scss'

function AnswerItem (props) {

  const cls = [classes.activeQuizItem]

  if(props.state) {
    cls.push(classes[props.state])
  }

  return (
    <li className={cls.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
      {props.answer.text}
    </li>
  )
}

export default AnswerItem;
