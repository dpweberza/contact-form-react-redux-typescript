import * as React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

class HomePage extends React.Component {
    render() {
      return (
        <div>
          <PageHeader>Exciting Landing Page</PageHeader>
          <p>
            <span>We're launching soon! head over to our </span>
            <Link to="/contact">contact us</Link> 
            <span> page to get in on the action.</span>
          </p>
        </div>
      );
    }
  }

export default HomePage;