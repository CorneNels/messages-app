import List from './components/ajax/requests'
import Login from './components/login/login'
import Categorie from './components/categories/categories'
import Messages from './components/messages/messages'
import ListMessages from './components/messages/fetchMessages'
import MessagesApp from './components/message-app/message-app'
import { useState } from 'react'

const id = 1

function App() {
  
  const listCat = List()
  const listMsg = ListMessages({id})
  
  return (
    <>
      <Login/>
      <Categorie data = {listCat} />
      <Messages messages = {listMsg}/>
    </>
  )
}

export default App;
