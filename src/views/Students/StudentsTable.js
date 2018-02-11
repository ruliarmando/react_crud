import React, { Component } from 'react';
import {
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
      <div>
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
        <Pagination>
          <PaginationItem>
            <PaginationLink previous href="#"></PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#"></PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}