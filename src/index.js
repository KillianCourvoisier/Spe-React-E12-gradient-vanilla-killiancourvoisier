import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/App';
import store from './store';

const composant = <Provider store={store}> <App /> </Provider>;
const domElement = document.getElementById('root');

render(composant, domElement);
