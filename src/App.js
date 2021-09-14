import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import About from './components/About'
import Cart from './components/Cart'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import { getCategories } from './components/products'

const App =()=> {

  return (
    <BrowserRouter>
    <div className="App">
        <NavBar categories={getCategories()}/> 
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

    </div>
    </BrowserRouter>
  )
}

export default App
