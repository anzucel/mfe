import { mount } from 'marketing/MarketingApp'; // es la referencia a un elemento HTML
import React, { useRef, useEffect } from 'react';

// react component
export default () => {
  const ref = useRef(null); // referencia al elemento HTML que se mostrará en pantalla

  // el codigo se ejecuta una sola vez cuando el componente es desplegado
  useEffect(() => {
    mount(ref.current); // create an instance of marketing app and render it into that div
  });

  return <div ref={ref} />;
};
