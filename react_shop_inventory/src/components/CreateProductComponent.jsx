import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            description: '',
            quantity: '',
            price: '',
            image_url: ''
            
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
    }

    // step 3
    componentDidMount(){
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            
            ProductService.getProductById(this.state.id).then((res) =>{
                let product = res.data;
                this.setState({
                    name: product.name,
                    description: product.description,
                    quantity: product.quantity,
                    price: product.price,
                    image_url: product.image_url
                });
                
            });
            
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {name: this.state.name, quantity: this.state.quantity, description: this.state.description, price: this.state.price, image_url: this.state.image_url};
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if(this.state.id === '_add'){
            
            ProductService.createProduct(product).then(res =>{
               this.props.history.push("/products") 
            });
            
        }else{
            
            ProductService.createProduct(product, this.state.id).then(res =>{
                this.props.history.push("/products") 
             });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }
    
    changePriceHandler = (event) => {
        this.setState({price: event.target.value});
    }
    
    changeImageHandler = (event) => {
        this.setState({image_url: event.target.value});
    };

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input type="number" placeholder="Quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input type="number" placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Image_url: </label>
                                            <input placeholder="image_url" name="image_url" className="form-control" 
                                                value={this.state.image_url} onChange={this.changeImageHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProductComponent
