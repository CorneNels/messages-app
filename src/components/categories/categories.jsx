import style from "./categories.module.css"
import Messages from "../messages/messages"

const CategoriesHead = () => (
    <thead>
        <tr className={style.space}>
            <th className={style.under}>Noms :</th>
            <th className={style.under}>Messages :</th>
            <th className={style.under}>Last Up :</th>
        </tr>
    </thead>
)

const CategoriesRow = ({nom, nb, lastUpdate}) => (
    <tr className={style.space}>
        <td onClick={<Messages />}>{nom}</td>
        <td>{nb}</td>
        <td>{lastUpdate}</td>
    </tr>
)

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