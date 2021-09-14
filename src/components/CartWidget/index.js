import 'bootstrap/dist/css/bootstrap.css'

const CartWidget = (props) => {
    return(
        <button >
            <img src="/assets/cart.svg" className="cartWidget"/>
            {props.quantity}
        </button>
  
    );
}

export default CartWidget
