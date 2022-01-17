import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// main code
// mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// if we are development and in isolations, call amount inmediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through container and we should export the mount function
export { mount };
