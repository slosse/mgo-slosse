import { createContext, useState } from 'react'

export const Context = createContext('')
const time = 1000

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(undefined)

    const login = (objUser) => {
        console.log("login..")
        return new Promise((resolve,reject) =>{
            setTimeout(()=>resolve(setUser(objUser.user)),time)
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