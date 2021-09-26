import 'bootstrap/dist/css/bootstrap.css'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
   

const NavBar = ({ categories }) => {

  const {user,login,logout} = useContext(UserContext)
  const {getQuantity} = useContext(CartContext)
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid"> 
        <Link to='/'>
          <div className="navbar-brand" >MGO</div>
        </Link>

        <div className="leftNav"> 
          <Link to='/'>
            <button >Home</button>
          </Link>
          <Link to='/about'>
            <button >About</button>
          </Link>

        </div>
        <div className="rigthNav">
          
          {categories.map(category => <Link key={category.id} to={`/category/${category.id}`}><button className="btn btn-primary btn-sm">{category.description}</button></Link>)}
          {user}
          {user?<button onClick={()=>logout()}>Logout</button>:<button onClick={()=>login()}>Login</button>}
          {getQuantity()>0 && <Link to='/cart'><CartWidget quantity={getQuantity()} /></Link>}
          

        </div>
      </div>
    </nav>
  )
}
export default NavBar;