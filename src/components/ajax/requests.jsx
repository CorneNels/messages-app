import axios from "axios";
import { useState, useEffect } from "react";


const fetchCategory = async () => {
    try {
        const data = await axios.get("http://localhost:8080/api/subject/category")
        const catList = data.data
        return catList
    } catch (error) {
        console.log(error);
    }     
}

const List = () => {

    const [catList, setcatList] = useState([])

    useEffect(() => {
        fetchCategory().then(data => setcatList(data))
    }, [])

    return(catList)
}

export default List