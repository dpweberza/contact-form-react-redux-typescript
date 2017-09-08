import * as React from 'react';
import { Route } from 'react-router';
import FARocket from 'react-icons/lib/fa/rocket';
import { Jumbotron } from 'react-bootstrap';

import HomePage from './HomePage';
import ContactPage from './ContactPage';
import Navigation from './Navigation';

class Layout extends React.Component {
    render() {
      return (
        <div>
            <Navigation/>
            <header>
                <Jumbotron>
                    <h1><FARocket className="logo" /> Challenger App</h1>
                    <p>Reaching beyond the cloud! &trade;</p>
                </Jumbotron>
            </header>
            <main>
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/contact" component={ContactPage} />
            </main>
        </div>
      );
    }
  }

export default Layout;