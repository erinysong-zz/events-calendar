import React from 'react';
import { render } from 'react-dom';
import Timeline from './timeline';
import './index.css';

const App = () => (
  <div className="container">
    <Timeline/>
  </div>
);

render(<App />, document.getElementById('root'));
