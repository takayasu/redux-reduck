import React, { Component,Fragment } from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import {Home} from './containers/pages/Home';
import {About} from './containers/pages/About';
import {Friend} from './containers/pages/Friend'

import AppBarMenu from './containers/container/AppBarMenu';

import './App.css';

class App extends Component {

  render() {
    return (
        <Fragment>
          <BrowserRouter>
            <div>

              <AppBarMenu />
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/friend' component={Friend} />
            </div>
          </BrowserRouter>
        </Fragment>
    );
  }
}

export default App;
