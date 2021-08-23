import React, {useState} from 'react';
import classes from './QuizCreator.module.scss'
import Button from "../../components/UI/Button/Button";
import {createControl} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Select from "../../components/UI/Select/Select";

function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: 'Значение не может быть пустым',
    id: number
  },{required: true})
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

const QuizCreator = () => {

  const [rightAnswerId, setrightAnswerId] = useState(1)
  const [quiz, setQuiz] = useState([])
  const [formControls, setformControls] = useState(createFormControls())
  const select = <Select
    label="Выберите правильный ответ"
    value={rightAnswerId}
    onChange={selectChangeHandler}
    options={[
      {text: 1, value: 1},
      {text: 2, value: 2},
      {text: 3, value: 3},
      {text: 4, value: 4},
    ]}
  />

  function selectChangeHandler(e) {
    const currentSelect = e.target.value
    setrightAnswerId(currentSelect)
  }

  function submitHandler(e) {
    e.preventDefault()
  }

  function addQuestionHandler() {

  }

  function createQuizHandler() {

  }

  function changeHandler(value, controlName) {
    console.log(value, controlName)
  }

  function renderControls() {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName]

      return (
        <Auxiliary
          key={index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => changeHandler(event.target.value, controlName)}
          />
          { index  === 0 ? <hr className={classes.mb}/> : null}
        </Auxiliary>
      )
    })
  }

  return (
    <div className={classes.QuizCreator}>
      <div>
        <h1>Quiz Creator</h1>
        <form onSubmit={submitHandler}>

          { renderControls() }

          { select }
          <Button type='primary' onClick={addQuestionHandler}>Добавить вопрос</Button>
          <Button type='success' onClick={createQuizHandler}>Создать тест</Button>
        </form>
      </div>
    </div>
  );
};

export default QuizCreator;
