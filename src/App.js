import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App =()=> {

  return (
    <div >
      <NavBar /> 
      <ItemListContainer greeting="Bienvenido a nuestro sitio de compras"/>
    </div>
  );
}

export default App;
