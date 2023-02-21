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

    const messageData = messages.map(
        message => <MessagesRow {...message} key={message.id} />
    )


    const handleSubmitMsg = (e) => {

    }

    return(
        <section>

            <div>
                <div>
                    <h2>Messages</h2>
                </div>
                <table>
                    <tbody>{messageData}</tbody>
                </table>
            </div>

            <form onSubmit={handleSubmitMsg}>
                <input type="text" placeholder="Type your message..." value={message}/>
                <button type="submit"></button>
            </form>

        </section>
    )
}

export default Messages