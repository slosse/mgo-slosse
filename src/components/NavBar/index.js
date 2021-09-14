import 'bootstrap/dist/css/bootstrap.css'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'

const NavBar = ({ categories }) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">MGO</a>
        <div className="leftNav">
          <Link to='/'>
            <button >Home</button>
          </Link>
          <Link to='/about'>
            <button >About</button>
          </Link>

        </div>
        <div className="rigthNav">
          
          {categories.map(category => <Link key={category.id} to={`/categories/${category.id}`}><button className="btn btn-primary btn-sm">{category.description}</button></Link>)}
          
          <button >Login</button>
          <Link to='/cart'>
            <CartWidget quantity="3" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;