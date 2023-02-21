import Header from './components/login/login';
import Categorie from './components/categories/categories';

const cat = [
  {id:1, nom:"Sciences", nb: 22, lastUpdate:12311},
  {id:2, nom:"Math", nb: 45, lastUpdate:12454},
  {id:3, nom:"Sports" , nb:55, lastUpdate:1561654},
  {id:4, nom:"NodeJS" , nb:12, lastUpdate:1514651}
]

function App() {
  return (
    <Categorie data = {cat} />
  )
}

export default App;
