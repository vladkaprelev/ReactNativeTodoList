import React from 'react';
import NavigationService from './src/Navigation/NavigationService';
import {Provider} from 'react-redux';
import store from './src/Redux/CreateStore';

global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global._fetch(uri, options, ...args).then(response => {
    console.log('Fetch', {request: {uri, options, ...args}, response});
    return response;
  });
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationService />
    </Provider>
  );
};

export default App;
