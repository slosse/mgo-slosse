import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import './App.css'

const App =()=> {

  return (
    <div className="App">
      <header>
        <NavBar/> 
      </header>

      <ItemDetailContainer itemId={1}/>
      
    </div>
  )
}

export default App
