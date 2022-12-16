import "./style.scss"
import UserTable from "./table"
import { Row, Col, Button, Offcanvas, OffcanvasHeader, OffcanvasBody, CardHeader, CardTitle, CardBody, Label, Input, FormText } from 'reactstrap'
import Card from '@components/card-snippet'
import classnames from 'classnames'


import { useState } from "react"
import axios from "axios"

const Users = () => {
  const [userform, setUserform] = useState('')
  const [canvasPlacement, setCanvasPlacement] = useState('end')
  const [canvasOpen, setCanvasOpen] = useState(false)

  const toggleCanvasEnd = async () => {
    await axios.get(`http://localhost:8000/api/get-user-form/`)
    .then((response) => {
      // console.log(response)

      const dom = document.createElement('div')
      dom.innerHTML = response.data
      setUserform(dom)
    })
    setCanvasPlacement('end')
    setCanvasOpen(!canvasOpen)
  }

  const createUser = () => {
    console.log('create')
  }
  return (
    <div>
      <div className="space-between">
        <h1 className="display-4">Users</h1>
        <Button.Ripple color='primary'  onClick={toggleCanvasEnd}>+ Create User</Button.Ripple>
      </div>
      <Row>
        <Col sm="12">
          <Card title="Basic">
            <UserTable />
          </Card>
        </Col>
      </Row>
      <Offcanvas direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasEnd}>
        <OffcanvasHeader toggle={toggleCanvasEnd}>Create User</OffcanvasHeader>
        <OffcanvasBody
          className={classnames({
            'my-auto mx-0 flex-grow-0': canvasPlacement === 'start' || canvasPlacement === 'end'
          })}>
            {/* <form action="" method="POST">
              {userform.map((field, index) => {
                <div key={index}>
                  <label>{field.label}</label>
                  {field}
                </div>
              })}
              
            </form> */}
            {console.log(userform)}
            <CardBody>
              <Row>
                <Col className='mb-1' sm='12'>
                  <Label className='form-label' for='basicInput'>
                    Name
                  </Label>
                  <Input type='text' id='basicInput' placeholder='Enter Name' />
                </Col>
                <Col className='mb-1' sm='12'>
                  <Label className='form-label' for='basicInput'>
                    Username
                  </Label>
                  <Input type='text' id='basicInput' placeholder='Enter Username' />
                </Col>
                <Col className='mb-1'>
                  <Label className='form-label' for='InputHelp'>
                    Email
                  </Label>{' '}<br />
                  <small className='text-muted'>
                    eg. <i>someone@example.com</i>
                  </small>
                  <Input type='email' id='InputHelp' />
                </Col>
                <Col className='mb-1'>
                  <Label className='form-label' for='InputHelp'>
                    Password
                  </Label>{' '}<br />
                  <Input type='password' id='InputHelp' />
                </Col>
                <div className="space">
                  <Button.Ripple color='primary' onClick={() => createUser()} outline>Create</Button.Ripple>
                  <Button.Ripple color='danger' outline>Cancel</Button.Ripple>
                </div>
              </Row>
            </CardBody>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default Users
