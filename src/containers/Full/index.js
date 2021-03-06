import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';


import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Breadcrumb from '../../components/Breadcrumb';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';

import Dashboard from '../../views/Dashboard';
import Students from '../../views/Students';
import StudentsCreate from '../../views/Students/StudentsCreate';
import StudentsEdit from '../../views/Students/StudentsEdit';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                <Route exact path="/students" component={Students} />
                <Route path="/students/create" component={StudentsCreate} />
                <Route path="/students/:id/edit" component={StudentsEdit} />
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
          <ToastContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
