import axios from "axios"
import { useState, useEffect } from "react"


const fetchMessages = async (id) => {
    try {
        const dataMSG = await axios.get("http://localhost:8080/api/subject/"+id+"/message")
        const messages = dataMSG.data
        return messages
    } catch (error) {
        console.log(error);
    }     
}

const ListMessages = ({id}) => {
    const [msgList, setmsgList] = useState([])

    useEffect(() => {
        fetchMessages(id).then(data => setmsgList(data))
    }, [id])

    return(msgList)
}

export default ListMessages