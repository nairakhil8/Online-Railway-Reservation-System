import axios from 'axios'
import React, { Component } from 'react'
import { Button, Card , Jumbotron} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export class RemoveUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             response : ''
        }
    }

    removeUser = (e) => {
        e.preventDefault()
        axios.delete("http://localhost:8081/removeUser/" + this.state.username, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} })
        .then((res) => {
            this.setState({
                response : res.data
            })
        })
    }

    changeHandler = (e) => {
        this.setState({
            username : e.target.value
        })
    }


    
    render() {
        const {username} = this.state
        return (
            <div className="container">
                {this.state.response === '' ?
                <Card bg="dark" className="text-white" style={{marginTop : '130px', width : '50%', marginLeft : '270px'}}>
                    <Card.Header className="text-center">REMOVE USER</Card.Header>

                    <Card.Body className="text-center" >
                        <form onSubmit={this.removeUser}>
                            <input type="text" name="username" id="username" value={username} autocomplete="off" placeholder="Enter Username" onChange={this.changeHandler} required></input>
                            <br/><br/>
                            <Button variant="danger" type="submit">Submit</Button>
                        </form>
                    </Card.Body>

                </Card> :

                        <div className="container">
                        <Link to="/admin"><Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "50px"}}>
                            <h2><strong>{this.state.response}</strong></h2>
                            
                        </Jumbotron></Link>

</div> }
            </div>
        )
    }
}

export default RemoveUser
