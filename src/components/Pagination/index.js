import React from 'react';
import PropTypes from 'prop-types';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

export default class MyPagination extends React.Component {
  state = {
    currentPage: 1,
  }

  handleChange = (selected) => {
    if ((selected + 1) !== this.state.currentPage) {
      this.setState({ currentPage: selected + 1 });
      this.props.onChange(selected);
    }
  }

  render() {
    const { total, pageSize } = this.props;
    const { currentPage } = this.state;
    const numberOfPages = Math.ceil(total / pageSize);
    return (
      <Pagination>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink previous style={{ cursor: 'pointer' }}></PaginationLink>
        </PaginationItem>
        {
          Array.from(Array(numberOfPages).keys()).map(number => (
            <PaginationItem
              key={`page_${number}`}
              active={number + 1 === currentPage}
              onClick={() => { this.handleChange(number); }}
            >
              <PaginationLink style={{ cursor: 'pointer' }}>{number + 1}</PaginationLink>
            </PaginationItem>
          ))
        }
        
        <PaginationItem disabled={currentPage === numberOfPages}>
          <PaginationLink next style={{ cursor: 'pointer' }}></PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
  
}

MyPagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};