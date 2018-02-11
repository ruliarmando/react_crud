import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card,
  CardHeader,
  CardBody
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
            <i className="fa fa-align-justify"></i> Students
          </CardHeader>
          <CardBody>
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
