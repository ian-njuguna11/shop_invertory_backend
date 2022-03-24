import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    {/* <span className="text-muted"></span> */}
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">All Rights Reserved 2020 @MECODIN</a></div>
                    </nav>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
