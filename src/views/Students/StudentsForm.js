import React from 'react';
import { withFormik } from 'formik';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { toast } from 'react-toastify';
import Yup from 'yup';

const isValid = (error, touched) => {
  if (touched && error) return false;
  if (!touched && !error) return null;
  if (!touched && error) return null;
  return true;
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
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          valid={isValid(errors.name, touched.name)}
        />
        <FormFeedback>{errors.name}</FormFeedback>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="sex" sm={2}>Sex</Label>
      <Col sm={10}>
        <FormGroup check inline>
          <Label check>
            <Input
              type="radio"
              name="sex"
              value="male"
              onChange={handleChange}
              valid={isValid(errors.sex, touched.sex)}
              checked={values.sex === 'male'}
            />{' '}Male
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input
              type="radio"
              name="sex"
              value="female"
              onChange={handleChange}
              valid={isValid(errors.sex, touched.sex)}
              checked={values.sex === 'female'}
            />{' '}Female
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
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            valid={isValid(errors.address, touched.address)}
          />
          <FormFeedback>{errors.address}</FormFeedback>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col>
        <Button className="float-right" disabled={isSubmitting}>Save</Button>
      </Col>
    </FormGroup>
  </Form>
);

export default withFormik({
  mapPropsToValues: props => ({
    name: props.student ? props.student.name : '',
    sex: props.student ? props.student.sex : '',
    address: props.student ? props.student.address : '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    sex: Yup.string().required('Sex is required'),
    address: Yup.string().required('Address is required'),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    props.onSubmit(values, () => {
      resetForm();
      toast('Data has been saved');
    });
  }
})(StudentsForm);