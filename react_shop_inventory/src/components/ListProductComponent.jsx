import React,{Component} from "react";
import ProductService from "../services/ProductService";


class ListProductComponent extends Component{
    
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
        });
    }
    
    render() {
        return(
            <div>
            <h2 className="text-center">Poduct List</h2>
            <div className = "row">
               <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
            </div>
            <br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
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
                   </table>

            </div>

       </div>  
        )
    }
    
}

export default ListProductComponent;