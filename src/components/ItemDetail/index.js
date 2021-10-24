import 'bootstrap/dist/css/bootstrap.css'
import ItemCount from '../ItemCount'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { getDocumentById } from '../../services/firebase'
import NotificationContext  from '../../context/NotificationContext'

const ItemDetail = ({ product }) => {

    const { addItem, getProductById } = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)
    const [stock, setStock] = useState(product.stock)
    const [nostock, setNostock] = useState(false)
    const [loading, setLoading] = useState(false)
    const [addToCart, setAddToCart] = useState(false)
    const {setNotification} = useContext(NotificationContext)

    const onAdd = () => {
        setLoading(true)
        getStock()

        quantity < stock && setNostock(false)

        if (quantity >= stock) {
            setLoading(false)
            setNostock(true)
            setTimeout(function () { setNostock(false); }, 2000);

            return
        }
        setLoading(false)
        setQuantity(quantity + 1)
        setNostock(false)

    }

    const onRemove = () => {
        if (quantity <= 0) {
            return
        }
        setQuantity(quantity - 1)
        setNostock(false)

    }

    const getStock = () => {

        getDocumentById('products',product.id).then(dbProduct => {
            const cartProd = getProductById(product.id)
            if(cartProd) {
                dbProduct.stock-cartProd.quantity>=0?setStock(dbProduct.stock-cartProd.quantity):setStock(0)
                setNotification(`Ya cargaste ${cartProd.quantity} unidades de este producto. Los productos que agregues se sumaran en el carrito.`,'error')
            } else {
                setStock(dbProduct.stock)
            }

        }).catch((error) => {
            console.log('Error searching products', error)
        }).finally(() => {
            setLoading(false)
        })
    }

    const onaddtoCart = () => {
        if (quantity === 0 || loading) {
            return
        }

        addItem(product.id, product.price, product.name, quantity)
        setAddToCart(true)
    }

    useEffect(()=> {
         getStock()
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    if (product === undefined) {
        return <h3>{`NO EXISTE EL PRODUCTO :(`}</h3>
    }

    return (

        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={`/assets/${product.img}.jpg`} alt={product?.name} />
            <div className="card-body">
                <h5 className="card-title">{product?.name}</h5>
                <p className="card-text">{product?.category}</p>
                <h2 className="card-title">${product?.price}</h2>
                {`Stock actual: ${stock - quantity}`}
            </div>

            {!addToCart ?
                <div>
                    <ItemCount onAdd={onAdd} onRemove={onRemove} onaddtoCart={onaddtoCart} quantity={quantity} />
                    {nostock && setNotification(`Se ha alcanzado el stock maximo`,'error')}

                </div>
                :
                <Link to={`/cart`} >
                    <button className="btn btn-primary" >Ir al carrito</button>
                </Link>
            }
            <div>
                {loading && <p>Estamos verificando stock..</p>}
            </div>
        </div>

    )
}
export default ItemDetail