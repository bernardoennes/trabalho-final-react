import { useState } from 'react'
import './App.css'
import { Cadastrar } from './pages/CreateAccountPage/createAccountPage'
import { CadastroRealizado } from './pages/CreateAccountPage/cardCadastroRealizado/cadastroRealizado'

function App() {

  return (
  
    <CadastroRealizado nome={"Nk"} email={"test@gmail.com"} />
   
  )
}

export default App
