import "./style.scss"
import UserTable from "./table"
import { Row, Col } from 'reactstrap'
import Card from '@components/card-snippet'

const Users = () => {
  return (
    <div>
      <h1 className="display-4">Users</h1>
      <Row>
        <Col sm="12">
          <Card title="Basic">
            <UserTable />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Users
