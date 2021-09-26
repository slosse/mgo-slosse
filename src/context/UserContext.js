import { createContext, useState } from 'react'

export const Context = createContext('')
const time = 1000

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(undefined)

    const login = () => {
        console.log("login..")
        return new Promise((resolve,reject) =>{
            setTimeout(()=>resolve(setUser('quique')),time)
        })
    }

    const logout = () => {
        console.log("logout..")
        setUser(undefined)
        return
    }
    
    return (
        <Context.Provider value={{user,login,logout}}>
            {children}
        </Context.Provider>

    )

}

export default Context