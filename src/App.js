import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import About from './components/About'
import Cart from './components/Cart'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import {useState} from 'react'

const App =()=> {

  const [categories,setCategories] = useState('')

  return (
    <BrowserRouter>
    <div className="App">
        <NavBar /> 
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
            
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/product/:itemid'>
            <ItemDetailContainer />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App
