import ListCat from '../ajax/requests'
import Login from '../login/login'
import Categorie from '../categories/categories'
import Messages from '../messages/messages'
import ListMessages from '../messages/fetchMessages'
import {useState} from 'react'

const MessagesApp = () => {

    const id = 1
    const listCat = ListCat()
    const listMsg = ListMessages({id})


    
    const [user, setUser] = useState(null)
    const [idCat, setIdCat] = useState(null)

    return(
        <>
            {!user && 
            <Login 
            user = {user}
            setUser = {setUser}/> 
            || <div>Login is : {user}</div>}

            {!idCat && <Categorie
            data = {listCat}
            setIdCat = {setIdCat}
            idCat = {idCat} />}

            {idCat && <Messages messages = {ListMessages({idCat})}/>}
            
        </>
    )
}

export default MessagesApp