import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { Component } from 'react'
import {Card, Jumbotron} from 'react-bootstrap'

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userDetails : []
        }
    }   

    componentDidMount(){
        
        axios.get('http://localhost:8081/showProfile', { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} } ).then((res)=> {
            this.setState({
                userDetails : res.data
            })
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="container text-center">
                    <Jumbotron className="bg-dark text-warning jumbotron" style={{marginTop : '30px'}}>
                        <h2><strong>My Profile</strong></h2>
                    </Jumbotron>
                    
                    <FontAwesomeIcon icon={faUser} style = {{fontSize : '122px', color : 'maroon'}}/>
                </div>
                <br/>
                
                <div>
                    <Card className="container text-center text-white" bg="dark" style={{width : '45%', marginLeft : '295px'}}>
                        <Card.Body>
                            <p><strong>Name : {this.state.userDetails.name} </strong></p>
                            <p><strong>Username : {this.state.userDetails.username}</strong></p>
                            <p><strong>Gender : {this.state.userDetails.gender}</strong></p>
                            <p><strong>Email : {this.state.userDetails.email}</strong></p>
                            <p><strong>Age : {this.state.userDetails.age}</strong></p>
                            <p><strong>Contact : {this.state.userDetails.contact}</strong></p>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        )
    }
}

export default Profile
