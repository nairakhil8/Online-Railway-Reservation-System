import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {authenticateUser} from '../../services/index'
import {Row, Col, Card, Form, InputGroup, FormControl, Button, Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt, faEnvelope, faLock, faUndo} from "@fortawesome/free-solid-svg-icons";

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = this.initialState;
    }
     initialState = {
         username : '',
         password : '',
         error : ''
     };
    
    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = e => {
        
    }
    resetLoginForm = () => {
        this.setState(() => this.initialState);
    };
    validateUser =() => {
        this.props.authenticateUser(this.state.username, this.state.password)
        setTimeout(() => {
            if(this.props.auth.isLoggedIn) {
                return this.props.history.push("/");
            } else {
                this.resetLoginForm();
                this.setState({"error":"Invalid username or password"});
            }
        }, 1500);
    }
    
    render() {
        const {username, password, error} = this.state
        return (
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Card className={"border border-dark bg-dark text-white"} style={{marginTop : '100px', width : '80%', marginLeft : '80px'}}>
                        <Card.Header>
                            <FontAwesomeIcon icon={faSignInAlt}/> Login
                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="text" name="username" id="username" value={username} onChange={this.changeHandler}
                                            className={"bg-dark text-white"} placeholder="Enter Username"/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="password" name="password" value={password} onChange={this.changeHandler}
                                            className={"bg-dark text-white"} placeholder="Enter Password"/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"text-align":"right"}}>
                            <Button size="sm" type="button" variant="success" onClick={this.validateUser}
                                disabled={this.state.username.length === 0 || this.state.password.length === 0}>
                                <FontAwesomeIcon icon={faSignInAlt}/> Login
                            </Button>{' '}
                            <Button size="sm" type="button" variant="danger" onClick={this.resetLoginForm}
                                disabled={this.state.username.length === 0 && this.state.password.length === 0 && this.state.error.length === 0}>
                                <FontAwesomeIcon icon={faUndo}/> Reset
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth:state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: (email, password) => dispatch(authenticateUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

