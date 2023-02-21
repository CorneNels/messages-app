import PropTypes from 'prop-types';
import { useId, useState } from "react"
import style from "./login.module.css"

const Login = () => {

    const id = useId();
    const [loginId, setLoginId] = useState(" ");


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("My login is: " + loginId)

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
            </div>
        </header>
    )
}

Login.defaultProps = {
    loginList: []
}

export default Login;