import "./styles.css"
import UserContext from '../../context/UserContext'
import { useContext, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const { user, login, logout } = useContext(UserContext)
    const [vUser, setvUser] = useState('')
    const [vPassword, setvPassword] = useState('')
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()

        const objUser = {
            user: vUser,
            password: vPassword
        }

        login(objUser)
        history.goBack()
    }

    return (
        <div className="Login">
            Login
            <table>
                <tbody>
                    <tr>
                        <td>Usuario</td>
                        <td>
                            <input type="text" id="user" name="user" size="15" 
                            value={vUser} onChange={({ target }) => setvUser(target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                        <input type="password" id="password" name="password" required size="15" 
                         value={vPassword} onChange={({ target }) => setvPassword(target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button className="btn btn-primary" onClick={(target) => handleLogin(target)  }>Ingresar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Login