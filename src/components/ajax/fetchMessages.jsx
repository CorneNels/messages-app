import axios from "axios"
import { useState, useEffect } from "react"


const fetchMessages = async (id) => {
        return (await axios.get("http://localhost:8080/api/subject/"+id+"/message")).data
}

const ListMessages = ({id}) => {
    const [msgList, setmsgList] = useState([])

    useEffect(() => {
        fetchMessages(id).then(data => setmsgList(data))
    }, [id])

    return(msgList)
}

export default ListMessages