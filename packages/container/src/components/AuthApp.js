import { mount } from 'auth/AuthApp'; // es la referencia a un elemento HTML
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// react component
export default ({ onSignIn }) => {
  const ref = useRef(null); // referencia al elemento HTML que se mostrará en pantalla
  const history = useHistory(); // copy of browser history
  // el codigo se ejecuta una sola vez cuando el componente es desplegado
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location; // para saber en que dirección se está actualmente dentro de containerApp

        if (pathname !== nextPathname) {
          //navigation inside of MarketingApp
          history.push(nextPathname);
        }
      },
      onSignIn,
    }); // create an instance of marketing app and render it into that div

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
