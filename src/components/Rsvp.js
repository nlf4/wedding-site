import React from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Rsvp = props => {

  return (
    <Container className="rsvp-container">
      <p>Please RSVP by April 15th, 2022</p>
      <Form onSubmit={ props.handleOnSubmit }>
        <Col>
          <FormGroup>
            <Label for="name" hidden>Name</Label>
            <Input type="text"
              name="name"
              placeholder="Full Name"
              onChange={ props.handleOnChange }
              value={ props.nameValue } />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="email" hidden>Email</Label>
            <Input type="email"
              name="email"
              placeholder="Email"
              onChange={ props.handleOnChange }
              value={ props.emailValue } />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="attendees">Number of Guests Attending</Label>
            <Input type="number"
              name="attendees"
              onChange={ props.handleOnChange }
              value={ props.attendeesValue } />
          </FormGroup>
        </Col>
        <FormGroup tag="fieldset">
          <legend className="col-form-label col-md-6">Will your party be attending?</legend>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio"
                  name="accept"
                  onChange={ props.handleOnChange }
                  value="accepts"
                  checked={props.acceptValue === "accepts"} />{' '}
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio"
                  name="accept"
                  onChange={ props.handleOnChange }
                  value="declines"
                  checked={props.acceptValue === "declines"} />{' '}
                No
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <Button className="submit-btn">Submit</Button>
      </Form>
    </Container>
  );
}

export default Rsvp