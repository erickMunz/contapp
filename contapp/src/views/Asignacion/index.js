import React, { Component } from 'react';
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  FormGroup,
  FormFeedback,
  Row,
} from 'reactstrap';

class Asignacion extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(2).fill(false),
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
        <Col xs="12">
              <Card>
                <CardHeader>
                  Dar de alta Administrador
                </CardHeader>
                <CardBody>
                  <Form action="" method="post">
                    <FormGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="username1" name="username1" placeholder="Username" autoComplete="name"/>
                        <FormFeedback valid>Non-required</FormFeedback>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" id="email1" name="email1" placeholder="Email" autoComplete="username"/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" id="password1" name="password1" placeholder="Password" autoComplete="current-password"/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="form-actions">
                      <Button type="submit" size="sm" color="success">Submit</Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          <Col md={12}>
            <Card >
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Seleccion</strong>
              </CardHeader>
              <CardBody>
                <ButtonGroup size="lg" >
                  <Button>Izquierda</Button>
                  <Button>Cancelar</Button>
                  <Button>Derecha</Button>
                </ButtonGroup>
               
              </CardBody>
            </Card>
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default Asignacion;
