import React, { Component } from 'react';
import filterFactory, { textFilter , numberFilter} from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table ,Button} from 'reactstrap';

class Tables extends Component {
  render() {
    const products = [ 
      {
      price:60.1,
      id:1,
      name:"perro"
    },{
      price:80.1,
      id:2,
      name:"gato"
    },{
      price:55.1,
      id:4,
      name:"algo"
    },{
      price:20.1,
      id:3,
      name:"bonito",

    },
  ];

    const columns = [
      {
      dataField: 'price',
      text: 'Product Price',
      filter: numberFilter()
    },{
      dataField: 'id',
  text: 'Product ID',
  sort: true,
}, {
  dataField: 'name',
  text: 'Nombre Administrador',
  sort: true
}, {
  dataField: 'price',
  text: 'Rol'
    },
    {
      dataField: 'isDummyField',
      text:'Eliminar',
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          
          console.log(row);
          console.log(rowIndex);
          alert('Click on Product ID field' );
        }
      },
      formatter: (cellContent, row) => (
        <Button block color="danger" className="btn-pill">Eliminar</Button>
      )
      
    },
    {
      dataField: 'isDummyField',
      text:'Editar',
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          console.log(e);
          console.log(column);
          console.log(columnIndex);
          console.log(row);
          console.log(rowIndex);
          alert('Click on Product ID field'+rowIndex);
        },
        onMouseEnter: (e, column, columnIndex, row, rowIndex) => {
          console.log(e);
          console.log(column);
          console.log(columnIndex);
          console.log(row);
          console.log(rowIndex);
          console.log('onMouseEnter on Product ID field : '+ rowIndex);
        }
      },
      formatter: (cellContent, row) => (
        <Button block color="dark" className="btn-pill">Editar </Button>
      )
      
    }
  ];
  
    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader>Tabla de administradores</CardHeader>
              <CardBody>
              <BootstrapTable keyField='id' data={ products } columns={ columns } striped hover condensed filter={ filterFactory() } pagination={ paginationFactory() }/>
              </CardBody>
            </Card>
           </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
