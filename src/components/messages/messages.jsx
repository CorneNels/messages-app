import { useState } from "react"
import style from "./messages.modules.css"
import ListMessages from "./fetchMessages"

const MessagesRow = ({author, content, createAt}) => {
    return (
        <tr>
            <td>{author}</td>
            <td>{content}</td>
            <td>{new Date(createAt*1000).toLocaleString()}</td>
        </tr>
    )
}

const Messages = ({id}) => {

    const [message, setMessage] = useState([])
    const messages = ListMessages({id})

    const messageData = messages.map(
        msg => <MessagesRow {...msg} key={msg.id} />
    )

    const handleSubmitMsg = (e) => {
        e.preventDefault()
        //ajout à gérer
    }

    return(
        <section>
            <div>
                <div>
                    <h2>Messages</h2>
                </div>
                <table>
                    <tbody>
                        {messageData}
                    </tbody>
                </table>
            </div>
            <form onSubmit={handleSubmitMsg}>
                <input type="text" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    )
}

export default Messages