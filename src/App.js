import Login from './components/login/login';
import Categorie from './components/categories/categories';
import Messages from './components/messages/messages';

const cat = [
  {id:1, nom:"Sciences", nb: 22, lastUpdate:12311},
  {id:2, nom:"Math", nb: 45, lastUpdate:12454},
  {id:3, nom:"Sports" , nb:55, lastUpdate:1561654},
  {id:4, nom:"NodeJS" , nb:12, lastUpdate:1514651}
]

const messages =[
  {id: 200, message: "test", author:"clem", date:"22.08.2009"}
]


function App() {
  return (
    <>
      <Login/>

      <Categorie data = {cat} />

      <Messages messages = {messages}/>
    </>
  )
}

export default App;
