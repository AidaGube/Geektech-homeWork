import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UsersPage = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(baseUrl)
      .then(result => {
        setUsers(result.data)
      }).catch((error) => {
        console.log(error);
      });
  }, [])
  return (
    <>
      <h1>Список:</h1>
      <ul>
        {
          users.map(user =>(<li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default UsersPage