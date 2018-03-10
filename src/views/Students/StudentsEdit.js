import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';

import StudentsForm from './StudentsForm';

class StudentsEdit extends Component {
  handleSubmit = (values, callback) => {
    this.props.update({
      id: this.props.match.params.id,
      data: values
    }).then(callback);
  }

  render() {
    const { students, match: { params } } = this.props;
    const student = students.items.find(student => student._id === params.id);
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="icon-plus"></i> Edit Student Data
          </CardHeader>
          <CardBody>
            <StudentsForm onSubmit={this.handleSubmit} student={student} />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default connect(
  state => ({
    students: state.students,
  }),
  ({ students: { update } }) => ({ update })
)(StudentsEdit);
