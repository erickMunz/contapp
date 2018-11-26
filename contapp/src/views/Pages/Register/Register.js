import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row ,FormFeedback} from 'reactstrap';
import {Redirect} from 'react-router-dom';
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      email:'',
      password:'',
      rpassword:'',
      redirect: false,
      loading:false,
      login: false,
      error:{
        username:'',
        email:'',
        password:'',
        rpassword:'',
      }
    }
  }
  onChange= (e)=>{
    this.setState({[e.target.name]: e.target.value});
    this.validate(this.state);
  }
  login = () =>{
    this.setState({login:true})
  }
  validateText(text){
    var re = /^[a-zA-Z ]*$/;
    return re.test(String(text));
   }
   validateEmail =(email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validate =(data)=>{
    let err ={
      username:'',
      email:'',
      password:'',
      rpassword:'',
    }
    if(!this.validateText(data.username)){
      
      err.username="Error, no se permiten numeros";
      this.setState({error:err})
    }else{
      err.username='';
      this.setState({error:err})
    }
    if(data.email!==''&&!this.validateEmail(data.email)){
      err.email='error';
      this.setState({error:err})
    }else{
      err.email='';
      this.setState({error:err})
    }
    if(data.password!='' && data.password.length<5){
      err.password='Error la contraseña deberia ser de mas de 5 caracteres';
      this.setState({error:err});
    }else{
      err.contraseña="";
      this.setState({error:err})
      return 1;
    }
    if(data.rpassword!='' && data.rpassword!=data.password){
      
      console.log('error rcontraseña')
      err.rpassword="error";
      this.setState({error:err});
    }else{
      err.rpassword='';
      this.setState({error:err})
    }
  }
  render() {
    const {error} = this.state;
    if(this.state.login){
      
      return (<Redirect to={"/login"}/>);
    }
    return (

      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Registracion</h1>
                    <p className="text-muted">Crea tu cuenta</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Nombre completo" autoComplete="username" name="username" onChange={this.onChange}  invalid={error.username?true:false} />
                      <FormFeedback>Error, no se permiten números</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Correo electronico" autoComplete="email" name="email" onChange={this.onChange} invalid={error.email?true:false}/>
                      <FormFeedback>Correo no válido</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Contraseña" autoComplete="new-password" name="password" onChange={this.onChange} invalid={error.password?true:false}/>
                      <FormFeedback>Contraseña no válida</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Confira contraseña" autoComplete="new-password" name="rpassword" onChange={this.onChange} invalid={error.rpassword?true:false} />
                      <FormFeedback>Las contraseñas no son iguales</FormFeedback>
                    </InputGroup>
                    <Button color="success" block>Crea tu cuenta</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" >
                      <Button className="" block onClick={this.login} ><span>Ya tienes cuenta? </span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
