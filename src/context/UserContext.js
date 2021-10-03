import { createContext, useState } from 'react'

export const Context = createContext('')
const time = 1000

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState('')
    /*
    const login = (objUser) => {
        return new Promise((resolve,reject) =>{
            setTimeout(()=>resolve(setUser(objUser.user)),time)
        })
    }*/

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser('')
        return
    }
    
    return (
        <Context.Provider value={{user,login,logout}}>
            {children}
        </Context.Provider>

    )

}

export default Context