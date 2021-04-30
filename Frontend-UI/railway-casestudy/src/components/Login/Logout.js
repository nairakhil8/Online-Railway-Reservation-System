import React from 'react'
import {Button, Jumbotron} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Logout() {
    return (
        <div className="container">
            <Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "50px"}}>
                <h2><strong>Logout Successful</strong></h2>
                <h3><strong>We hope to see you soon!</strong></h3>
                <p className="text-white">
                    <Link to="/login"><Button variant="success">Login</Button></Link>
                    <Link to="/"><Button variant="danger">Home</Button></Link>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Logout
