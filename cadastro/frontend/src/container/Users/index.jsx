import React, { useEffect, useState } from "react";
import { Button, Container, ContainerItens, Image, Titulo, User } from "./styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Pessoas from '../../assets/image2.svg'
import Seta from '../../assets/flecha.svg'
import Lixo from '../../assets/lixeira.svg'




const Users = () => {

  const [users, setUsers] = useState([])
  const history = useHistory()



  useEffect(() => {
    const fetchUsers = async ()=> {
      const { data:newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    
    }
    fetchUsers()


  }, [])



  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage (){
    history.push('/')
  }

  return (
    <Container>
      <Image alt="logo-image" src={Pessoas} />
      <ContainerItens>
        <Titulo>Usuários</Titulo>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}> <img alt="lixeira" src={Lixo} /> </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}> <img alt="arrow" src={Seta} /> Voltar  </Button>


      </ContainerItens>
    </Container>
  )
}

export default Users