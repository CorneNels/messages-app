import { useState } from "react";
import style from "./messages.modules.css"

const MessagesHead = () => (
    <thead>
        <tr className={style.space}>
            <th className={style.under}>Noms :</th>
            <th className={style.under}>Messages :</th>
            <th className={style.under}>Last Up :</th>
        </tr>
    </thead>
)

const MessagesRow = ({author, message, date}) => {

    return (
        <tr>
            <td>{message}</td>
            <td>{author}</td>
            <td>{date}</td>
        </tr>
    )
}


const Messages = ({messages}) => {

    const [message, setMessage] = useState([]);
    const [messageList, setMessagesList] = useState([]);

    const messageData = messages.map(
        msg => <MessagesRow {...msg} key={msg.id} />
    )


    const handleSubmitMsg = (e) => {
        e.preventDefault();
        setMessagesList(messageList => [...messageList, message]); // J'ajoute les valeurs de mon tableau + la dernière
        console.log(messageList)
        console.log(messageData)
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