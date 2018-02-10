import React, { Component } from 'react';
import { connect } from 'react-redux';

import { load } from '../../ducks/students';

import StudentsTable from './StudentsTable';

class Students extends Component {
  componentDidMount() {
    this.props.load().then(() => console.log('woi'));
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <StudentsTable data={this.props.students.items} />
      </div>
    )
  }
}

export default connect(
  state => ({
    students: state.students,
  }),
  {
    load,
  }
)(Students);
