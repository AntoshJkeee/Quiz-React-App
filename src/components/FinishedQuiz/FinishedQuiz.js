import classes from './FinishedQuiz.module.scss'
import Button from "../UI/Button/Button";
import {Link} from 'react-router-dom'

const FinishedQuiz = (props) => {

  function totalCounter() {
    let total = 0;
    for(let item in props.results) {
      if(props.results[item]) {
        total++
      }
    }
    return total
  }

  return (
    <div className={classes.FinishQuiz}>
      <h1 className={classes.ResultMessage}>Результаты</h1>
      <ul className={classes.ResultMessageList}>
        {
          props.quiz.map((quizItem, index) => {
            const cls = [
              'fa',
              props.results[quizItem.id - 1] === false ? 'fa-times' : 'fa-check',
              props.results[quizItem.id - 1] === false ? classes.error : classes.success
            ]
            return (
              <li key={index}>
                <strong>{quizItem.id} {quizItem.question}</strong>
                <i className={cls.join(' ')}> </i>
              </li>
            )
          })
        }
      </ul>
      <p>Правильных ответов: <strong className={classes.Bold}>{totalCounter()}</strong> из <strong className={classes.Classic}>{props.answerLength}</strong></p>
      <Link to='/' className={classes.Link}>
        <Button onClick={()=> console.log('asd')} text='Перейти в список тестов' type='success'/>
      </Link>
      <Button onClick={props.updateQuiz} text='Пройти опрос заново' type='primary'/>
    </div>
  );
};

export default FinishedQuiz;
