import classes from './Layout.module.css'
import Quiz from "../../containers/Quiz/Quiz";

function Layout (props) {
  return (
    <div className={classes.layout}>
      <main className={classes.main}>
        <Quiz />
      </main>
    </div>
  )
}

export default Layout;
