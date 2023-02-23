import { useState } from "react"
import style from "./messages.modules.css"
import ListMessages from "./fetchMessages"

const MessagesRow = ({author, content, createAt}) => {
    return (
        <>
        <p className={style.author}>{author}</p>
        <div className="messageBubble">
            <div className="messageDate">
                <p>{content}</p>
                <span>{new Date(createAt*1000).toLocaleString()}</span>
            </div>
        </div>
        </>
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
                <div className="messageList">
                    {messageData}
                </div>
            </div>
            <form onSubmit={handleSubmitMsg}>
                <input type="text" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    )
}

export default Messages