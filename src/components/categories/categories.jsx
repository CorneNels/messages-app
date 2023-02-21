import style from "./categories.module.css"

const CategoriesHead = () => (
    <thead>
        <tr>
            <th>Noms :</th>
            <th>Messages :</th>
        </tr>
    </thead>
)

const CategoriesRow = ({nom, messagesNumber}) => (
    <tr>
        <td>{nom}</td>
        <td>{messagesNumber}</td>
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