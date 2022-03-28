import React, {Component} from "react";


// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";
import ProductService from "services/ProductService";

class RegularTables extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProduct = this.addProduct.bind(this);
    }
    
    editProduct(id){
        this.props.history.push(`/add-product/${id}`);
    }
    
    viewProduct(id){
        this.props.history.push(`/view-product/${id}`);
    }
    
    deleteProduct(id){
        ProductService.deleteProduct(id).then( (res) => {
            this.setState({products: this.state.products.filter(product => product.id !== id)})
        })
    }
    
    addProduct(){
        this.props.history.push('/add-product/_add');
    }
    
    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
            console.log(this.products);
        });
    }
    
  render (){
      return(
        <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                              <div className = "row">
                   <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                </div>
                <br></br>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                            <th> Product Name</th>
                            <th> Product Desc</th>
                            <th> Product Quantity</th>
                            <th> Product Price</th>
                            <th> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.products.map(
                        products => 
                            <tr key = {products.id}>
                                <td> {products.name} </td>   
                                <td> {products.description}</td>
                                <td> {products.quantity}</td>
                                <td> {products.price}</td>
                                <td>
    
                                    <button onClick={ () => this.editProduct(products.id)}  className="btn btn-info">Update </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(products.id)} className="btn btn-danger">Delete </button>
                                    <button style={{marginLeft: "10px"}}  onClick={ () => this.viewProduct(products.id)}  className="btn btn-info">View</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>       
      );
  };
}

export default RegularTables;
