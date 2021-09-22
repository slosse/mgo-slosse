import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import About from './components/About'
import Cart from './components/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import { getCategories } from './components/products'
import { useState } from 'react'
import { UserContext } from './context/UserContext'
import { CartContextProvider } from './context/CartContext'


const App = () => {
  const [user, setUser] = useState('quique');

  return (

    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <NavBar categories={getCategories()} />
        </UserContext.Provider>
        <Switch>
          <Route path='/category/:categoryid'>
            <ItemListContainer />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/item/:itemid'>
            <ItemDetailContainer />
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
