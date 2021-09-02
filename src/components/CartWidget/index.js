import './style.css'

const CartWidget = (props) => {
    return(
        <button>
            <img src="/assets/cart.svg" class="cartWidget"/>
            {props.quantity}
        </button>
  
    );
}

export default CartWidget
