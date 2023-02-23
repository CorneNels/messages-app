import PropTypes from 'prop-types';
import { useId, useState } from "react"
import style from "./login.module.css"


const Login = () => {

    const id = useId();
    const [loginId, setLoginId] = useState(" ");

    const [loginList, setLoginList] = useState([])
    const [currentLogin, setCurrentLogin] = useState("")
    //const currentLogin = " "

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginList(loginList => [...loginList, loginId]); // J'ajoute les valeurs de mon tableau + la dernière
        setCurrentLogin(loginId); // J'ajoute les valeurs de mon tableau + la dernière
        //const currentLogin = loginId
        console.log("Current id : " + currentLogin)
        console.log(loginList)
    }

    return (
        <header>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>MESSAGES APP</h2>
                    <h3>Welcome ! Choose a login first</h3>
                </div>
                <div className={style.loginForm}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor={id+loginId}></label>
                        <input id={id+loginId} type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)}/>
                        <button type="submit">LOGIN</button>
                    </form>
                </div>
                <div className={style.displayLogin}>You're current login id is :<p>{currentLogin}</p></div>
            </div>
        </header>
    )
}

Login.defaultProps = {
    loginList: [],
    currentLogin: PropTypes.string
}

export default Login