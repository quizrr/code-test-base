import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';

import Root from './routes';

render(<Root />, document.getElementById('app'));
