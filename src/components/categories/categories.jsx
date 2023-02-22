import style from "./categories.module.css"
import Messages from "../messages/messages"
import { useState } from "react"

const CategoriesHead = () => (
    <thead>
        <tr className={style.space}>
            <th className={style.under}>Noms :</th>
            <th className={style.under}>Messages :</th>
            <th className={style.under}>Last Up :</th>
        </tr>
    </thead>
)

const CategoriesRow = ({name, count, lastUpdate, id}) => {

    const time = new Date(lastUpdate*1000)
    return (
        <tr className={style.space}>
            <td><a onClick={() => console.log(id)}>{name}</a></td>
            <td>{count}</td>
            <td>{time.toLocaleString()}</td>

        </tr>
    )
}

const Categorie = ({data}) => {

    const category = data.map(
        list_cat => <CategoriesRow {...list_cat} key={list_cat.id} />
    )

    return(
        <div className={style.container}>
        <div className={style.title}>
            <h2>Liste des catégories</h2>
        </div>
            <table className={style.table}>
                <CategoriesHead />
                <tbody>
                    {category}
                </tbody>
            </table>
        </div>
    )
}



export default Categorie