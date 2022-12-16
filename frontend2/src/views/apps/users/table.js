// ** Custom Components
import { Table } from 'reactstrap'
import React, {useEffect, useState} from 'react'
import axios from 'axios'


const TableBasic = () => {

  const [users, setUsers] = useState([])

  useEffect(async () => {
    await axios.get(`${process.env.REACT_APP_BACKEND}/api/users`)
      .then((response) => {
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
          users.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
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
