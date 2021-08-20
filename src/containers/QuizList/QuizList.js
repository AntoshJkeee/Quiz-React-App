import React from 'react';
import classes from './QuizList.module.scss'
import {NavLink} from "react-router-dom";

const QuizList = () => {

  function renderQuiz() {
    return [1,2,3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>
            Tест {quiz}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <div className={classes.QuizList}>
      <div className={classes.QuizListWrapper}>
        <h1>Список тестов</h1>
        <ul>
          {renderQuiz()}
        </ul>
      </div>
    </div>
  );
};

export default QuizList;
