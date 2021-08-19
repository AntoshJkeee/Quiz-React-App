import React from 'react';
import classes from './Drawer.module.scss'
import Backdrop from "../../UI/Backdrop/Backdrop";

const Drawer = (props) => {

  const links = ['Пункт первый','Пункт второй','Пункт третий','Пункт четвертый']
  const cls = [classes.Drawer]

  if(!props.isOpen) {
    cls.push(classes.close)
  }

  function renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href='!#'>{link}</a>
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
