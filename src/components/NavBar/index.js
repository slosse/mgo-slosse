import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget';

const NavBar = (props) => {

      return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">MGO</a>
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