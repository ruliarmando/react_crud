import React from 'react';
import { withFormik } from 'formik';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Yup from 'yup';

const isValid = (error) => {
  if (error === undefined) {
    return null;
  }

  return false;
};

const StudentsForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Form onSubmit={handleSubmit}>
    <FormGroup row>
      <Label for="name" sm={2}>Name</Label>
      <Col sm={10}>
        <Input 
          type="text"
          name="name" 
          id="name" 
          placeholder="Student Name" 
          onChange={handleChange}
          valid={isValid(errors.name)}
        />
        <FormFeedback>{errors.name}</FormFeedback>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="sex" sm={2}>Sex</Label>
      <Col sm={10}>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" name="sex" value="male" onChange={handleChange} valid={isValid(errors.sex)} />{' '}
            Male
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" name="sex" value="female" onChange={handleChange} valid={isValid(errors.sex)} />{' '}
            Female
          </Label>
        </FormGroup>
        <FormFeedback>{errors.sex}</FormFeedback>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="address" sm={2}>Address</Label>
      <Col sm={10}>
          <Input
            type="text" 
            name="address"
            id="address"
            placeholder="Student Address"
            onChange={handleChange}
            valid={isValid(errors.address)}
          />
          <FormFeedback>{errors.address}</FormFeedback>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col>
        <Button className="float-right">Save</Button>
      </Col>
    </FormGroup>
  </Form>
);

export default withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    sex: Yup.string().required('Sex is required'),
    address: Yup.string().required('Address is required'),
  }),
  handleSubmit: (values, actions) => {
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false)
  }
})(StudentsForm);