import style from "./categories.module.css"

const CategoriesHead = () => (
    <thead>
        <tr className={style.space}>
            <th className={style.under}>Noms :</th>
            <th className={style.under}>Messages :</th>
            <th className={style.under}>Last Up :</th>
        </tr>
    </thead>
)

const CategoriesRow = ({name, count, lastUpdate, id, setIdCat}) => {
    const time = new Date(lastUpdate*1000)
    return (
        <tr className={style.space}>
            <td onClick={() => setIdCat(id)}><div className={style.btnCat}>{name}</div></td>
            <td className={style.countTd}>{count} message(s)</td>
            <td>{time.toLocaleString()}</td>
        </tr>
    )
}

const Categorie = ({data, setIdCat}) => {

    const category = data.map(
        list_cat => <CategoriesRow {...list_cat} key={list_cat.id} setIdCat={setIdCat}/>
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