import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap';

import StudentsForm from './StudentsForm';

export default class StudentsCreate extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="icon-plus"></i> Add New Student Data
          </CardHeader>
          <CardBody>
            <StudentsForm />
          </CardBody>
        </Card>
      </div>
    )
  }
}