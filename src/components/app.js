import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AlarmApp from '../containers/alarmApp';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlarmApp/>
      </Provider>
    );
  }
}

export default App;