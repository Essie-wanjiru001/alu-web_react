import './App.css';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    this.htmlObj = getLatestNotification();
    this.listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New course available' },
      { id: 3, type: 'urgent', html: this.htmlObj },
    ];
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications displayDrawer={false} listNotifications={this.listNotifications} />
        <div className="App">
          <Header />
          {isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
  };

  static defaultProps = {
    isLoggedIn: false,
  };
}

export default hot(module)(App);
