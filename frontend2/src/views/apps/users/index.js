import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  Col,
  Row
} from "reactstrap"
import CardJob from "./CardJob"
import "./style.scss"

const Strategy = () => {
  return (
    <div>
      <div className="demo-inline-spacing" id="strategy">
        <h1 className="display-4">Strategy</h1>
        <UncontrolledButtonDropdown>
          <DropdownToggle outline color="primary" caret>
            Comprehensive sorting
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/" tag="a">
              Profit from high to low
            </DropdownItem>
            <DropdownItem href="/" tag="a">
              Profit from high to high
            </DropdownItem>
            <DropdownItem href="/" tag="a">
              Yield from high to low
            </DropdownItem>
            <DropdownItem href="/" tag="a">
              Yield from high to high
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <Button.Ripple color="primary">INQUIRE</Button.Ripple>
      </div>
      <Row className="match-height">
        <Col lg="4" md="6" sm="12">
          <CardJob />
        </Col>
        <Col lg="4" md="6" sm="12">
          <CardJob />
        </Col>
        <Col lg="4" md="6" sm="12">
          <CardJob />
        </Col>
        <Col lg="4" md="6" sm="12">
          <CardJob />
        </Col>
        <Col lg="4" md="6" sm="12">
          <CardJob />
        </Col>
        <Col lg="4" md="6" sm="12">
          <CardJob />
        </Col>
        <Col lg="4" md="6" sm="12">
          <CardJob />
        </Col>
        <Col lg="4" md="6" sm="12">
          <CardJob />
        </Col>
      </Row>
    </div>
  )
}

export default Strategy
