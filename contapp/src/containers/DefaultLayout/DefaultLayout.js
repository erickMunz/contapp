import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../navs/_nav';
import navClient from '../../navs/_navClient';
import navAdmin from '../../navs/_navAdmin';
// routes config
import routes from '../../routes/routes';
import routesClient from '../../routes/routesClient';
import routesDef  from '../../routes/routesDef';
import routesAdmin from '../../routes/routesAdmin';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import api from '../../api';

class DefaultLayout extends Component {

  constructor(props){
    super(props);
    this.state = {
      cliente:false,
      admin:false,
      conta:false,
      isLoggedin:false
    }
  }
  
  componentWillMount(){
    if(sessionStorage.getItem('xkey')){
      console.log(sessionStorage.getItem('xkey'))
      this.setState({isLoggedin:true})
    }
  }
  
  enrutar = () =>{
    if(this.state.isLoggedin){
      this.setState({admin:true})
    }
  }
  render(){
    const {isLoggedin} = this.state;
    if(!isLoggedin){
      return(<Redirect to="/login"/>)
    }
    let nav, ruta;
    switch(sessionStorage.getItem('ROL')){
      case 'ADMIN': console.log("admin chidi"); nav=navAdmin; ruta=routesAdmin; break;
      case 'CONTA': nav=navigation; ruta=routes; break;
      case 'CLIENT': nav=navClient; ruta=routesClient; break;
      default : nav=navAdmin; ruta=routesAdmin;  
    }
    switch(sessionStorage.getItem('ROL')){
      case 'ADMIN': nav=navAdmin; break;
      case 'CONTA': nav=navigation; break;
      case 'CLIENT': nav=navClient; break;
      default : nav=navAdmin;  
    }
    
    //let nav=navAdmin;
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={nav} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Container fluid>
              <Switch>
                {ruta.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                </Switch>
              {<Redirect from="/" to="/charts" />}
            </Container>
          </main>
          <AppAside fixed>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
