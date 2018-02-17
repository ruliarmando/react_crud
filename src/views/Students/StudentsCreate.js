import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';

import StudentsForm from './StudentsForm';
import { save } from '../../ducks/students';

class StudentsCreate extends Component {
  handleSubmit = (values, callback) => {
    this.props.save(values).then(callback);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="icon-plus"></i> Add New Student Data
          </CardHeader>
          <CardBody>
            <StudentsForm onSubmit={this.handleSubmit} />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default connect(null, { save })(StudentsCreate);