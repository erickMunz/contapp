import React, { Component } from 'react';
import Loadable from 'react-loadable';
import {post} from '../../../api/post';
import {Redirect} from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row ,Alert} from 'reactstrap';

class Login extends Component {
 constructor(props){
   super(props);
   this.state = {
     username:'',
     password:'',
     redirect: false,
     loading:false,
     error:{
       usuario:'',
       contraseña:''
     }
   }
 }
  validateEmail =(email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validate = (data) =>{
    let errores:{
      usuario:''
      ,contraseña:''}
    if(!this.validateEmail(data.username)){
      errores.usuario="Error en el correo";
    }
    if(data.contraseña.length<5){
      errores.contraseña='Error la contraseña deberia ser de mas de 5 caracteres';
    }
    this.setState({errores});
  }
  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value});
    this.validate(this.state);
  }
  onSubmit = () =>{
    post('login',this.state).then((result)=>{
      let response= result;
      if(response.user){
        sessionStorage.setItem('usuario', response.user);
        this.setState({redirect:true});
      }
      console.log(response);
    })
    this.setState({loading:true})
  }
  render() {
    if(this.state.redirect){
      return (<Redirect to={"/home"}/>);
    }
    const {error} = this.state; 
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form >
                      <h1>Inicia session</h1>
                      <p className="text-muted">Por favor ingresa tus credenciales</p>

                        {error.username && (  <Alert color="danger">error.username</Alert>)}
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="username" onChange={this.onChange}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={this.onChange}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4"onClick={this.onSubmit}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">¿Olvidaste tu contraseña?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Registrare</h2>
                      <p>Para poder usar esta app es necesaria una cuenta </p>
                      <Button color="primary"  className="mt-3" active >Registrate ahora !</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
