import classes from './Layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import {useState} from "react";
import Drawer from "../../components/Navigation/Drawer/Drawer";

function Layout (props) {

  const [menu, setMenu] = useState(false)

  function toggleMenuHandler() {
    setMenu(!menu)
  }

  function menuCloseHandler() {
    setMenu(false)
  }

  return (
    <div className={classes.layout}>
      <Drawer isOpen={menu} onClose={menuCloseHandler}/>
      <MenuToggle
        onToggle={toggleMenuHandler}
        isOpen={menu}
      />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
