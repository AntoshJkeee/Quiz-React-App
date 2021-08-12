import AnswerItem from "./AnswerItem/AnswerItem";

function AnswerList (props) {

  return(
    <ul>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state.answerState[answer.id] : null}
          />
        )
      })}
    </ul>
  )
}

export default AnswerList;
