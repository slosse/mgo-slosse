import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import About from './components/About'
import Cart from './components/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import {CartContextProvider} from './context/CartContext'
import ConfirmOrder from './components/ConfirmOrder'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import { getAuth } from "firebase/auth";
import { useContext,useEffect } from 'react'
import UserContext from './context/UserContext'
import { onAuthStateChanged } from '@firebase/auth'

const App = () => {

  const { login } = useContext(UserContext)
  const auth = getAuth();
  const {user} = useContext(UserContext) 
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        login(user.displayName)
      } 
    })


  }, [])
  console.log("APP")
  console.log(user)
  return (

    <div className='App'>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path='/category/:categoryid'>
              <ItemListContainer />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <PrivateRoute path='/cart' user={user}>
              <Cart />
            </PrivateRoute>
            <Route path='/item/:itemid'>
              <ItemDetailContainer />
            </Route>
            <PrivateRoute path='/confirmOrder' user={user}>
              <ConfirmOrder />
            </PrivateRoute>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/'>
              <ItemListContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>

    </div>


  )
}

export default App
