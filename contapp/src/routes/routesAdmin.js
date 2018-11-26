import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from '../containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Charts = Loadable({
  loader: () => import('../views/Charts'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('../views/Dashboard'),
  loading: Loading,
});

const Colors = Loadable({
  loader: () => import('../views/Theme/Colors'),
  loading: Loading,
});


const Widgets = Loadable({
  loader: () => import('../views/Widgets/Widgets'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('../views/Users/Users'),
  loading: Loading,
});
const Asignacion = Loadable({
  loader: ()=> import('../views/Tabla/Asignacion'),
  loading: Loading,
})
const User = Loadable({
  loader: () => import('../views/Users/User'),
  loading: Loading,
});

const AltaAdmin = Loadable({
  loader: () => import ('../views/Alta/Admin'),
  loading: Loading,
});
const AltaCont = Loadable({
  loader: () => import ('../views/Alta/Admin'),
  loading: Loading,
});

const TablaAdmin = Loadable({
  loader: () => import ('../views/Tabla/Admin'),
  loading: Loading,
});
const TablaContabilidad = Loadable({
  loader: () => import ('../views/Tabla/Contabilidad'),
  loading: Loading,
});
const TablaContadores = Loadable({
  loader: () => import ('../views/Tabla/Contabilidad'),
  loading: Loading,
});
const Asignaciones = Loadable({
  loader: () => import ('../views/Asignacion'),
  loading: Loading,
});





// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routesAdmin = [
  { path: '/', exact: true, name: 'Inicio', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/altacon', exact: true,  name: 'Alta contador', component: AltaCont },
  { path: '/altaadmin', exact: true,  name: 'Alta contador', component: AltaAdmin },
  { path: '/tablaadmin', exact: true,  name: 'Tabla administradores', component: TablaAdmin },
  { path: '/tablacontabilidad', exact: true,  name: 'Tabla contabilidad', component: TablaContabilidad },
  { path: '/tablacontador', exact: true,  name: 'Tabla contador', component: TablaContadores },
  { path:'/asignaciones', exact: true, name:'Asignacion', component:Asignaciones}
];

export default routesAdmin;
