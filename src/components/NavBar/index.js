import 'bootstrap/dist/css/bootstrap.css'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import { getDocs,collection } from '@firebase/firestore'
import { db } from '../../services/firebase'


const NavBar = () => {

  const { user, logout } = useContext(UserContext)
  const { getQuantity } = useContext(CartContext)
  const [categories, setCategories] = useState([])
  

  useEffect(() => {
    
    getDocs(collection(db,'categories')).then(querySnapshot => {
      const categories = querySnapshot.docs.map(doc => {
           return {id:doc.id, ...doc.data()}
      })
      setCategories(categories)
    })


  }, [])

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
          {user ? <button onClick={() => logout()}>Logout</button> : <Link to="/login"><button>Login</button></Link>}
          {getQuantity() > 0 && <Link to='/cart'><CartWidget quantity={getQuantity()} /></Link>}


        </div>
      </div>
    </nav>
  )
}
export default NavBar;