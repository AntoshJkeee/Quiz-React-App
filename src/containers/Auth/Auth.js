import React, {useState} from 'react';
import classes from './Auth.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Auth = () => {

  const [formControls, setFormControls] = useState({
    email: {
      value: '',
      type: 'email',
      label: 'Электронная почта',
      errorMessage: 'Введите корректный email',
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true
      }
    },
    password: {
      value: '',
      type: 'password',
      label: 'Пароль',
      errorMessage: 'Пароль долджен содержать больше 6 символов',
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6
      }
    }
  })

  function loginHandler() {
    console.log('Login')
  }

  function registerHandler() {
    console.log('Register')
  }

  function submitHandler(e) {
    e.preventDefault()
  }

  function validateControl(value, validation) {
    if(!validation) {
      return true
    }

    let isValid = true
    if(validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if(validation.email) {
      isValid = validateEmail(value) && isValid
    }

    if(validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid

  }

  let onChangeHandler = (e, controlName) => {

    const myformControls = { ...formControls }
    const control = { ...myformControls[controlName] }

    control.value = e.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)

    myformControls[controlName] = control
    setFormControls(myformControls)
  }

  function renderInputs() {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => onChangeHandler(event, controlName)}
        />
      )
    })
  }

  return (
    <div className={classes.Auth}>
      <div>
        <h1>Авторизация</h1>
        <form onSubmit={submitHandler} className={classes.AuthForm}>
          {renderInputs()}
          <div>
            <Button type='success' onClick={loginHandler} >Войти</Button>
            <Button type='primary' onClick={registerHandler} >Зарегистрироваться</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
