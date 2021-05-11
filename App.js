import React from 'react';
import NavigationService from './src/Navigation/NavigationService';
import {Provider} from 'react-redux';
import store from './src/Redux/CreateStore';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationService />
    </Provider>
  );
};

export default App;
