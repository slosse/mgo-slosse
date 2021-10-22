import { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [contact, setContact] = useState('')
   
    var BreakException = {}

    const setContactData = (contactData) => {
        setContact(contactData)
    }

    const addItem = (id, price, name, quantity) => {

        var newQuantity = quantity
        var vProducts = [...products]
        try {
            products.forEach(element => {
                if (element.id == id) {

                    if (element.quantity + quantity < 0) {
                        throw BreakException
                    }
                    const oldQuantity = element.quantity

                    vProducts = vProducts.filter(element => element.id != id)
                    newQuantity = oldQuantity + quantity
                    throw BreakException

                }
            })


        } catch (e) {
            if (e !== BreakException) throw e;
            
        } 

        const newItem = [{ 'id': id, 'price': price, 'name': name, 'quantity': newQuantity }]
        const newProducts = [...vProducts, ...newItem]
        setProducts(newProducts)

    }


    const removeItem = (id) => {
        const newProducts = products.filter(element => element.id != id)
        setProducts(newProducts)
    }

    const emptyCart = () => {
        setProducts([])
    }
    
    const isInCart = (id) => {
        try {
            products.forEach(element => {
                if (element.id == id) throw BreakException
            })
        } catch(e){
            if(e==BreakException) return true
            else throw e
        }
        
        return false
    }

    const getProductById = (id) => {
    let element
        try {
            products.forEach(e => {

                if (e.id == id) {
                    element=e
                    throw BreakException
                }
            })
        } catch (e) {
            if (e == BreakException) return element
            else throw e
        }
        return false
    }

    const getTotal = () => {
        var total=0
        products.forEach(element => {
            total = total +element.price * element.quantity
        })
        return total
    }

    const getQuantity = () => {
        var count=0
        products.forEach(element => {
            count = count +element.quantity
        })
        return count
    }

    return (
        <Context.Provider value={{products,addItem, removeItem, emptyCart, isInCart, getQuantity, getTotal, getProductById, contact, setContact}}>
            {children}
        </Context.Provider>

    )
}

export default Context
