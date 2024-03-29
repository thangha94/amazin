// These two module are separated form @babel/polyfill which is used for lower babel versions
import 'core-js/stable';
import 'core-js/modules/es.symbol';
import 'regenerator-runtime/runtime';

import { render } from 'react-dom';
import App from './App';
import './styles/style.scss';
import { Provider } from 'react-redux';
import { StateProvider } from './ContextApi/StateProvider';
// import store from './redux/store';
render(
  //  <Provider store={store}>
  // <Provider>
  <StateProvider>
    <App />
  </StateProvider>,
  // </Provider>,
  document.getElementById('root')
);
