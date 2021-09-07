import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import './App.css'

const App =()=> {

  return (
    <div className="App">
      <header>
        <NavBar/> 
      </header>
      <ItemListContainer/>
      
    </div>
  )
}

export default App
