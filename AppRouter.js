
import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
} from 'react-native-router-flux';

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import FooterEx from './components/Footer';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    console.log('ACTION:', action)
    return defaultReducer(state, action)
  }
}

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="lightbox" lightbox>
          <Scene key="modal" modal hideNavBar>
            <Scene key="root">
              <Scene key="login" component={Login} title="登录" initial/>
              <Scene key="register" component={Register} title=""/>
            </Scene>
            <Scene key="home" component={Home} title="首页"/>
            <Scene key="footer" component={FooterEx} title="首页"/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({

});


export default AppRouter;