import axios from "axios";
import { useState, useEffect } from "react";

const fetchCategory = async () => {
        return (await axios.get("http://localhost:8080/api/subject/category")).data
}

const ListCat = () => {
    const [catList, setcatList] = useState([])

    useEffect(() => {
        fetchCategory().then(data => setcatList(data))
    }, [])

    return(catList)
}

export const sendNewMessage = ((categoryId, data) => {
    return axios.post('http://localhost:8080/api/subject/' + categoryId + '/message', data)
})

export default ListCat