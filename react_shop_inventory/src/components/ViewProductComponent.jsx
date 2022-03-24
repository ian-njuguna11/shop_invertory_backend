import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( (res) => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Poduct Name: </label>
                            <div> { this.state.product.name }</div>
                        </div>
                        <div className = "row">
                            <label> Product Description: </label>
                            <div> { this.state.product.description }</div>
                        </div>
                        <div className = "row">
                            <label> Product Quantity: </label>
                            <div> { this.state.product.quantity }</div>
                        </div>
                         <div className = "row">
                            <label> Product price: </label>
                            <div> { this.state.product.price }</div>
                        </div> 
                        {/* <div className = "row">
                            <label> Product image_url: </label>
                            <div> { this.state.product.image_url }</div>
                        </div> */}
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProductComponent
