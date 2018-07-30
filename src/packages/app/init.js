import express from 'express';

import packages from './packages';

export default function init() {
  const app = express();

  packages.forEach((pack) => {
    const routes = Object.values(pack.routes) || [];
    addRoutesToApp({ app, routes });
  })

  app.listen(3000, () => console.log('Listening on port 3000'));
}

function addRoutesToApp({ app, routes }) {
  routes.forEach((route) => {
    const { method, endpoint, action } = route;
    app[method](endpoint, action);
  })
}
