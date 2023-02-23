import List from '../ajax/requests'
import Login from '../login/login'
import Categorie from '../categories/categories'
import Messages from '../messages/messages'
import ListMessages from '../messages/fetchMessages'

const MessagesApp = () => {

    const id = 1

    return(
        <>
        <Login />
        <Categorie data = {List()} />
        <Messages messages = {ListMessages({id})}/>
        </>
    )
}

export default MessagesApp