import ListCat from '../ajax/requests'
import Login from '../login/login'
import Categorie from '../categories/categories'
import Messages from '../messages/messages'
import ListMessages from '../messages/fetchMessages'

const MessagesApp = () => {

    const id = 1
    const listCat = ListCat()
    const listMsg = ListMessages({id})

    return(
        <>
            <Login />
            <Categorie data = {listCat} />
            <Messages messages = {listMsg}/>
        </>
    )
}

export default MessagesApp