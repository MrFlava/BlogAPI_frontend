import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

import history from '../history';
import Header from './layout/Header';
import DashBoard from './providers/DashBoard';
import PrivateRoute from './common/PrivateRoute';

import configureStore from '../store';

class App extends Component {
    render(){
      const { store, persistor } = configureStore();

      return (

        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div  className='container'>
              <Router history={history}>
                    <Header />
                    <Switch>
                        <PrivateRoute exact path='/' component={DashBoard} />
                    </Switch>
              </Router>
            </div>
          </PersistGate>
        </Provider>
      )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));
