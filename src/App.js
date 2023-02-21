import Header from './components/login/login';
import Categorie from './components/categories/categories';

const cat = [
  {id: 1, nom : "Sciences", messagesNumber : 22},
  {id: 2, nom : "Sport", messagesNumber : 63},
  {id: 3, nom : "Math", messagesNumber : 74},
  {id: 4, nom : "NodeJS", messagesNumber : 1}
]

function App() {
  return (
    <Categorie data={cat}/>
  )
}

export default App;
