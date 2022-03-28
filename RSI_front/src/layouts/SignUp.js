import React, { Component } from 'react'    
import SignUpService from 'services/SignUpService';
import "assets/css/auth.css"    

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
            
        }
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password};
        console.log('user => ' + JSON.stringify(user));
        
        SignUpService.createUser(user).then((res) => {
            this.props.history.push("/login") 
        })
        
        // Pro.createProduct(product).then(res =>{
        //            this.props.history.push("/products") 
        // });

        // step 5
        // if(this.state.id === '_add'){
            
        //     ProductService.createProduct(product).then(res =>{
        //        this.props.history.push("/products") 
        //     });
            
        // }else{
            
        //     ProductService.createProduct(product, this.state.id).then(res =>{
        //         this.props.history.push("/products") 
        //      });
        // }
    }
    
    changefirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changelastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    
    changepasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                    <form>
                                    <h3>Sign Up</h3>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="Product Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changefirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Description" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changelastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input type="email" placeholder="email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input type="password" placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default SignUp
