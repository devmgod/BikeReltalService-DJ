// ** Custom Components
import Avatar from "@components/avatar"

// ** Third Party Components
import { Card, CardBody, CardText, Button, Badge } from "reactstrap"
import { Copy } from 'react-feather'

// ** Images
import profileImg from "@src/assets/images/portrait/small/avatar-s-7.jpg"

const CardJob = () => {
  return (
    <Card className="card-apply-job">
      <CardBody>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <div className="d-flex align-items-center">
            <Avatar
              className="me-1"
              img={profileImg}
              imgHeight="42"
              imgWidth="42"
            />
            <div>
              <h6 className="mb-0">Spot Half Stud Magic Change Average</h6>
              <small className="text-muted">
                Total running time: 20 days, 13 hours and 16 minutes
              </small>
            </div>
          </div>
          <Copy />
        </div>
        <hr />
        <h5 className="apply-job-title">
          Income: <span className="text-success">+250 USDT</span>
        </h5>
        <h5 className="apply-job-title">
          Yield: <span className="text-success">+0.9 %</span>
        </h5>
        {/* <CardText className="mb-2">
          Design high-quality designs, graphics, mock-ups and layouts for both
          new and existing web sites/ web applications / mobile applications.
        </CardText> */}
        <div className="apply-job-package bg-light-primary rounded">
          <div>
            <sup className="text-body">
              <small>$</small>
            </sup>
            <h2 className="d-inline me-25">9,800</h2>
            <sub className="text-body">
              <small>/ month</small>
            </sub>
          </div>
          <Badge color="light-primary" pill>
            Full Time
          </Badge>
        </div>
        <div className="d-grid">
          <Button color="primary">Apply For This Job</Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardJob
