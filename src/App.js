import { useContext, useEffect } from 'react'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import About from './components/About'
import Cart from './components/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import UserContext from './context/UserContext'
import { NotificationContextProvider } from './context/NotificationContext'
import { CartContextProvider } from './context/CartContext'
import ConfirmOrder from './components/ConfirmOrder'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from '@firebase/auth'
import Notification from './components/Notification'
import ContactForm from './components/ContactForm'


const App = () => {

  const { login } = useContext(UserContext)
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user && login(user.displayName)
    })
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (

    <div className='App'>
      <NotificationContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Notification />
            <Switch>
              <Route path='/category/:categoryid'>
                <ItemListContainer />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/item/:itemid'>
                <ItemDetailContainer />
              </Route>
              <PrivateRoute path='/cart'>
                <Cart />
              </PrivateRoute>
              <PrivateRoute path='/confirmOrder'>
                <ConfirmOrder />
              </PrivateRoute>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path="/contactForm">
                <ContactForm/>
              </Route>
              <Route path='/'>
                <ItemListContainer />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationContextProvider>
    </div>


  )
}

export default App
