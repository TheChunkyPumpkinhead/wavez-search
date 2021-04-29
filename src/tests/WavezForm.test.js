import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WavezForm from '../WavezForm/WavezForm';

it('renders App component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <WavezForm />
    </BrowserRouter>
    ,div );
    ReactDOM.unmountComponentAtNode(div);
});