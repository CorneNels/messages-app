import style from "./categories.module.css"

const CategoriesHead = () => (
    <thead>
        <tr>
            <th>Noms :</th>
            <th>Messages :</th>
            <th>Last Up :</th>
        </tr>
    </thead>
)

const CategoriesRow = ({nom, nb, lastUpdate}) => (
    <tr>
        <td>{nom}</td>
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
            <table>
                <CategoriesHead />
                <tbody>
                    {category}
                </tbody>
            </table>
        </div>
    )
}



export default Categorie