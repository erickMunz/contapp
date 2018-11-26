import React from 'react';
import Loadable from 'react-loadable'


import DefaultLayout from '../containers/DefaultLayout';






// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Inicio', component: DefaultLayout }
];

export default routes;
