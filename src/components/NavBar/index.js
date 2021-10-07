import 'bootstrap/dist/css/bootstrap.css'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import { getCollection } from '../../services/firebase'
import { getAuth, signOut } from "firebase/auth"
import { useHistory } from 'react-router'

const NavBar = () => {

  const { user, logout } = useContext(UserContext)
  const { getQuantity, emptyCart } = useContext(CartContext)
  const [categories, setCategories] = useState([])
  const history = useHistory()

  useEffect(() => {
    getCollection('categories').then(categories => {
      setCategories(categories)
    })
      .catch((error) => {
        console.log('Error searching categories', error)
    }).finally(() => {

    })

  }, [])

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      logout()
      emptyCart()
      history.push('/')
    }).catch((error) => {

    })
  }

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

          {categories.map(category => <Link key={category.id} to={`/category/${category.description}`}><button className="btn btn-primary btn-sm">{category.description}</button></Link>)}
          {user}
          {user ? <button onClick={() => handleLogout()}>Logout</button> : <Link to="/login"><button>Login</button></Link>}
          {getQuantity() > 0 && <Link to='/cart'><CartWidget quantity={getQuantity()} /></Link>}


        </div>
      </div>
    </nav>
  )
}
export default NavBar;