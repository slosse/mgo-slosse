import ItemCount from '../ItemCount';
import './style.css';

const ItemListContainer = (props)=> {
    return (
        <div class="ItemListContainer" >
            <h2>{props.greeting}</h2>
            <ItemCount></ItemCount>
        </div>
    )    
    
}

export default ItemListContainer