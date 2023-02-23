import ListCat from '../ajax/requests'
import Login from '../login/login'
import Categorie from '../categories/categories'
import Messages from '../messages/messages'
import {useState} from 'react'
import style from "./message-app.module.css"

const MessagesApp = () => {

    const listCat = ListCat()
    const [user, setUser] = useState(null)
    const [idCat, setIdCat] = useState('')

    return(
        <>
            {!user && 
            <Login 
            user = {user}
            setUser = {setUser}/> 
            || <div className={style.displayLogin}>Your current login is : <p>{user}</p></div>}

            {!idCat && user && <Categorie
            data = {listCat}
            setIdCat = {setIdCat}
            idCat = {idCat} />}

            {idCat && <Messages id = {idCat}/>}
        </>
    )
}

export default MessagesApp