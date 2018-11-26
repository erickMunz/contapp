import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import Redirect from 'react-router-dom/Redirect';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props){
    super(props);
    this.state={
      redirect:false
    }
  }


  loggout = () =>{
    console.log("cerrar session");
    sessionStorage.clear();
    this.setState({redirect:true})

  }

  render() {

    // eslint-disable-next-line
    const {redirect} = this.state;
    const { children, ...attributes } = this.props;
    if(redirect){
      return (<Redirect to="/login"/>);
    }
    return (
    
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
     
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Inicio</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/altaadmin">Administrador</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/altacon">Contador</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/tablacontabilidad">Contabilidades</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/tablaadmin">Contador</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/users">Asignacion</NavLink>
          </NavItem>
          
        </Nav>
        <Nav className="ml-auto" navbar>
         
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>config</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              
              <DropdownItem  onClick={this.loggout}><i className="fa fa-lock" /> Cerrar session</DropdownItem>

            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-md-down-none" />*/}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
