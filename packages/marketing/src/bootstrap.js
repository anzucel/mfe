import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// main code
// mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if we are development and in isolations, call amount inmediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through container and we should export the mount function
export { mount };
