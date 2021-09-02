import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import {useState} from 'react'

const App =()=> {

  const [quantity,setQuantity] = useState(0);

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a nuestro sitio de compras"/>
    
    </div>
  )
}

export default App
