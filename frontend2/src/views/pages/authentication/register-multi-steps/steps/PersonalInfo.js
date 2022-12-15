// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'
import { ChevronLeft, ChevronRight } from 'react-feather'

// ** Reactstrap Imports
import { Form, Label, Input, Row, Col, Button, FormFeedback } from 'reactstrap'

const defaultValues = {
  address: '',
  firstName: ''
}

const PersonalInfo = ({ stepper }) => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      stepper.next()
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
      }
    }
  }

  return (
    <Fragment>
      <div className='content-header mb-2'>
        <h2 className='fw-bolder mb-75'>Personal Information</h2>
        <span>Enter Your Information.</span>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='firstName'>
              First Name
            </Label>
            <Controller
              id='firstName'
              name='firstName'
              control={control}
              render={({ field }) => <Input placeholder='John' invalid={errors.firstName && true} {...field} />}
            />
            {errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='lastName'>
              Last Name
            </Label>
            <Input id='lastName' name='lastName' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='mobileNumber'>
              Mobile Number
            </Label>
            <Input type='number' id='mobileNumber' name='mobileNumber' placeholder='(472) 765-3654' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='pincode'>
              PIN code
            </Label>
            <Input type='number' id='pincode' name='pincode' placeholder='657482' />
          </Col>
          <Col sm='12' className='mb-1'>
            <Label className='form-label' for='address'>
              Address
            </Label>
            <Controller
              id='address'
              name='address'
              control={control}
              render={({ field }) => <Input invalid={errors.address && true} {...field} />}
            />
            {errors.address && <FormFeedback>{errors.address.message}</FormFeedback>}
          </Col>
          <Col sm={12} className='mb-1'>
            <Label className='form-label' for='area-sector'>
              Area, Street, Sector, Village
            </Label>
            <Input id='area-sector' name='area-sector' placeholder='Area, Street, Sector, Village' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='town-city'>
              Town/City
            </Label>
            <Input id='town-city' name='town-city' placeholder='Town/City' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='country'>
              Country
            </Label>
            <Input type='number' id='country' name='country' placeholder='United Kingdom' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between mt-2'>
          <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
            <ChevronLeft size={14} className='align-middle me-sm-25 me-0'></ChevronLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ChevronRight size={14} className='align-middle ms-sm-25 ms-0'></ChevronRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default PersonalInfo
