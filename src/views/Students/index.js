import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap';

import { load } from '../../ducks/students';

import StudentsTable from './StudentsTable';

class Students extends Component {
  componentDidMount() {
    this.props.load();
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="icon-list"></i> Students
          </CardHeader>
          <CardBody>
            <Link to="/students/create">
              <Button color="primary"><i className="icon-plus"></i> Add New Student</Button>
            </Link>
            <br/>
            <br/>
            <StudentsTable data={this.props.students.items} />
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
  { load }
)(Students);
