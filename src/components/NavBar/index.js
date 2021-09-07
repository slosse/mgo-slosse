import 'bootstrap/dist/css/bootstrap.css'
import CartWidget from '../CartWidget'

const NavBar = (props) => {

      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">MGO</a>
            <div className="leftNav">
              <button>Home</button>

            </div>

            <div className="rigthNav">
              <button>Login</button>
              <button>Logout</button>
              <CartWidget quantity="3" />
            </div>
          </div>
        </nav>
      )
  }
  export default NavBar;