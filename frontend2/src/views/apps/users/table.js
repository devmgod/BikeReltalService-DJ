// ** Custom Components
import { Table } from 'reactstrap'
import React, {useEffect, useState} from 'react'
import axios from 'axios'


const TableBasic = () => {

  const [users, setUsers] = useState([])

  useEffect(async () => {
    await axios.get(`http://localhost:8000/api/users`)
      .then((response) => {
        console.log('-------------', response.data)
        setUsers(response.data)
      })
  }, [])
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>No</th>
          <th>Avatar</th>
          <th>Username</th>
          <th>Email</th>
          <th>Joined Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{user.avatar}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.date_joined}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))
        }
        
      </tbody>
    </Table>
  )
}

export default TableBasic
