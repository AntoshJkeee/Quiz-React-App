import React from 'react';
import classes from './Drawer.module.scss'
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink} from 'react-router-dom'


const Drawer = (props) => {

  const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false},
  ]
  const cls = [classes.Drawer]

  if(!props.isOpen) {
    cls.push(classes.close)
  }

  function renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={props.onClose}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <React.Fragment>
      <nav className={cls.join(' ')}>
        <ul>
          {renderLinks()}
        </ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.onClose}/> : null}
  </React.Fragment>
  );
};

export default Drawer;
