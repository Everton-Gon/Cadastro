import React, { useRef, useState } from "react";
import { Button, Container, ContainerItens, Image, Input, Label, Listar, Titulo } from "./styles";
import axios from "axios";
import Pessoas from '../../assets/image1.svg'
import Seta from '../../assets/flecha.svg'
import { useHistory } from "react-router-dom";




const App = () => {

  const [users, setUsers] = useState([])
  const history = useHistory()
  
  const inputName = useRef()
  const inputAge = useRef()


  const addNewUser = async () => {
    const { data: newUsers } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    })


    setUsers([...users, newUsers])

    history.push('/usuarios')

  }



  const lista = async () => {

    history.push('/usuarios')
    await axios.get("http://localhost:3001/users");


  }




  return (
    <Container>
      <Image alt="logo-image" src={Pessoas} />
      <ContainerItens>
        <Titulo>Olá!</Titulo>

        <Label>Nome</Label>
        <Input ref={inputName} placeholder="Nome" />

        <Label>Idade</Label>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="arrow" src={Seta} /> </Button>
        <Listar onClick={lista}>Lista de Usuarios</Listar>

      </ContainerItens>
    </Container>
  )
}

export default App