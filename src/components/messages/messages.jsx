import style from "./messages.modules.css"


const MessagesRow = ({author, message, date}) => (
    <tr>
        <td>{message}</td>
        <td>{author}</td>
        <td>{date}</td>
    </tr>
)


const Messages = ({categorie}) => {

    const msg = categorie.map(
        mess => <MessagesRow {...mess} key={mess.id} />
    )

    return(
        <div>
            <div>
                <h2>Messages</h2>
            </div>
            <table>
                <MessagesHead />
                <tbody>{msg}</tbody>
            </table>
        </div>
    )
}

export default Messages