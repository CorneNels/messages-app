import style from "./login.module.css"

const Login = () => {

    return (
        <header>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>MESSAGES APP</h2>
                    <h3>Welcome ! Choose a login first</h3>
                </div>
                <div className={style.body}>
                    <form>
                        <label htmlFor=""></label>
                        <input type="text"/>
                        <button>LOGIN</button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Login