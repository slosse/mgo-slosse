import "./styles.css"
import CartList from '../CartList'
import CartContext from "../../context/CartContext"
import { useContext, useState, useRef } from 'react'
import Togglable from "../Togglable"
import ContactForm from "../ContactForm"
import { useHistory } from "react-router"
import NotificationContext  from '../../context/NotificationContext'

const Cart = () => {
    
    const { products, setContactData } = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const toggleVisibility = useRef()
    const history = useHistory()
    
    const handleConfirmOrder = () => {
        if( phone !== '' && address !== '' ) {
            const contactData = {phone: phone, address: address, comment: comment}
            setContactData(contactData)
            history.push('/confirmOrder')
        } else {
            setNotification(`Por favor ingresa todos los datos de contacto`,'error')
            toggleVisibility.current.setVisibilityTrue()
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
                    <Togglable buttonLabelShow={(phone !== '' && address !== '') ? 'Editar contacto' : 'Agregar contacto'} ref={toggleVisibility}>
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