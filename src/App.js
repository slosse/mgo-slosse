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

const App = () => {

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
            <PrivateRoute path='/cart'>
              <Cart />
            </PrivateRoute>
            <Route path='/item/:itemid'>
              <ItemDetailContainer />
            </Route>
            <PrivateRoute path='/confirmOrder'>
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
