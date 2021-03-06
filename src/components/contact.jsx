import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React,{Component} from 'react'
import './css/contact.css'

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

export default class Contact extends React.Component{
  
   render()
   {
  return(
      <div className="contact-out">
        <ScrollToTopOnMount/>
        <div className="contact">
            <Form>

            <Form.Group  md="4" controlId="validationCustom01">
          <Form.Label className="head-form">First name</Form.Label>
          <Form.Control
            required type="text" placeholder="First name"
          />
        </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label className="head-form">Email address</Form.Label>
    <Form.Control required type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="head-form">Write here...</Form.Label>
    <Form.Control required as="textarea" placeholder="message....." rows={3} />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>
 
  </div>
    )
  }
}