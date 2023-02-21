
import Categorie from './components/categories/categories';
import Login from './components/login/login';
import List from './components/ajax/requests';

const cat = [
  {id:1, nom:"Sciences", nb: 22, lastUpdate:12311},
  {id:2, nom:"Math", nb: 45, lastUpdate:12454},
  {id:3, nom:"Sports" , nb:55, lastUpdate:1561654},
  {id:4, nom:"NodeJS" , nb:12, lastUpdate:1514651}
]

function App() {
  
  const test = List()
  
  return (
    <>
      <Login/>
      <Categorie data = {test} />
    </>
  )
}

export default App;
