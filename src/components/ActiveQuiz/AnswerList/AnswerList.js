import classes from './AnswerList.module.scss'
import AnswerItem from "./AnswerItem/AnswerItem";

function AnswerList (props) {
  return(
    <ul>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem key={index} answer={answer} onAnswerClick={props.onAnswerClick}/>
        )
      })}
    </ul>
  )
}

export default AnswerList;
