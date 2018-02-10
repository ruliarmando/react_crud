import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Badge
} from 'reactstrap';

export default class StudentsTable extends Component {
  renderRow(item) {
    return (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.sex}</td>
        <td>{item.address}</td>
        <td>
          <Badge color="success">Active</Badge>
        </td>
      </tr>
    );
  }
  
  render() {
    return (
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i> Students
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sex</th>
                <th>Address</th>
                <th>{' '}</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.data.map(student => this.renderRow(student))
              }
            </tbody>          
          </Table>
        </CardBody>
      </Card>
    );
  }
}