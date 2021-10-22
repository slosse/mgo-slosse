import "./styles.css"
import CartList from '../CartList'
import CartContext from "../../context/CartContext"
import { useContext, useState, useRef } from 'react'
import Togglable from "../Togglable"
import ContactForm from "../ContactForm"
import { useHistory } from "react-router"
import NotificationContext  from '../../context/NotificationContext'

const Cart = () => {
    
    const { products } = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const contactFormRef = useRef()
    const history = useHistory()
    
    const handleConfirmOrder = () => {
        if( phone == '' && address == '' ) {
            setNotification(`Por favor ingresa los datos de contacto`,'error')
        } else {
            history.push('/confirmOrder')
        }
    }

    return (
        <div className="Cart">
            <h1>Mi compra</h1>
            {products.length===0 &&
                "El carrito está vacío"
            }
            {products.length>0 &&
                <>
                    <CartList />
                    <Togglable buttonLabelShow={(phone !== '' && address !== '') ? 'Editar contacto' : 'Agregar contacto'} ref={contactFormRef}>
                                                            <ContactForm phone={phone} setPhone={setPhone} address={address} setAddress={setAddress} comment={comment} setComment={setComment}  />
                                                          </Togglable>
                    <br/>
                    <button onClick={handleConfirmOrder} className="btn btn-primary">Finalizar la compra</button>
                </>
            }


        </div>
    )
}
export default Cart