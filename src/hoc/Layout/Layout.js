import classes from './Layout.css'

console.log(classes)

function Layout (props) {
  return (
      <main>
        {props.children}
      </main>
  )
}

export default Layout;
