import style from "./login.module.css"

const Header = () => (
    <header>
        <div className={style.container}>
            <div className={style.title}>
                <h2>MESSAGES APP: test</h2>
            </div>
            <div className={style.body}>
                <form>
                    <label htmlFor=""></label>
                    <input type="text" />
                    <button>LOGIN</button>
                </form>
            </div>
        </div>
    </header>
)

export default Header