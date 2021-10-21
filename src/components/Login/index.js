import "./styles.css"
import UserContext from '../../context/UserContext'
import NotificationContext from '../../context/NotificationContext'
import { useContext } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth"

const Login = (props) => {
    const { login } = useContext(UserContext)
    const {setNotification} = useContext(NotificationContext)
    const history = useHistory()
    const auth = getAuth();

    
    const handleLogin = (provider) => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user.displayName;
                login(user)
                setNotification("Bienvenido "+user)
                
                history?.location?.state?.from?.pathname ? history.push(history.location.state.from.pathname) : history.goBack()

            }).catch((error) => {
                error.code==='auth/account-exists-with-different-credential' && setNotification("Parece que ya ingresaste con Gmail, por favor intenta ingresar con Gmail","error")
            })

    }
    
    return (
        <div className="Login">
            <h3>Login</h3>
            <table>
                <tbody>
                     <tr>
                        <td >
                            <button className="btn btn-primary" onClick={() => handleLogin(new GoogleAuthProvider())}>Ingresar con Gmail</button>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <button className="btn btn-primary" onClick={() => handleLogin(new FacebookAuthProvider())}>Ingresar con Facebook</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Login



