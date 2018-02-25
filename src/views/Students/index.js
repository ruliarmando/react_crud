import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap';

import Pagination from '../../components/Pagination';

import { load, remove } from '../../ducks/students';

import StudentsTable from './StudentsTable';

class Students extends Component { 
  componentDidMount() {
    this.props.load();
  }

  handleItemDelete = (id) => {
    this.props.remove(id).then(this.props.load);
  }

  handlePageChange = (number) => {
    const skip = number * 10;
    this.props.load({ skip });
  }
  
  render() {
    const { students: { items, paging } } = this.props;
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
            <StudentsTable
              data={items}
              onItemDelete={this.handleItemDelete}
            />
            <Pagination
              total={paging.total}
              pageSize={paging.limit}
              onChange={this.handlePageChange}
            />
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
  { load, remove }
)(Students);
