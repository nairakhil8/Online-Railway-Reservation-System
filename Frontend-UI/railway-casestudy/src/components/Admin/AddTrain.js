import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Form, Col, Button, Card, Jumbotron} from 'react-bootstrap'

export class AddTrain extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            trainId : "",
            name : "",
            source : "",
            destination : "",
            date : "",
            departureTime : "",
            arrivalTime : "",
            duration : "",
            seatsLeft : "",
            generalFare : "",
            ladiesFare : "",
            response : ''
       }
     
   }


   handleChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
   }

   handleDateChange = e => {
       this.setState({
           date : e.target.value.toString()
       })
   }

   handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8082/addTrains', this.state, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} })
    .then((res) => {this.setState({
        response : res.data
    })})
    .catch(error => {console.group(error)})
}
   
    render() {

        const {trainId, name, source, destination, date, departureTime, arrivalTime, duration, seatsLeft, generalFare, ladiesFare} = this.state;
        return (
            <div>
                {this.state.response === '' ?
                <div className="container">
                    <Card bg="light" style={{width : '80%', marginLeft : '100px', marginTop : '20px'}}>
                        <Card.Header className="text-center" style={{height : '50px', fontSize: '22px', color: 'darkred'}}>ADD A NEW TRAIN!</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTrainId">
                                <Form.Label>Train ID</Form.Label>
                                <Form.Control type="text" name="trainId" id="trainId" value={trainId} autocomplete="off" placeholder="Train Id" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" id="name" value={name} autocomplete="off" placeholder="Train Name" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSource">
                                <Form.Label>Source</Form.Label>
                                <Form.Control type="text" name="source" id="source" value={source} autocomplete="off" placeholder="Source" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDestination">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" name="destination" id="destination" value={destination} autocomplete="off" placeholder="Destination" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridDepartureTime">
                                <Form.Label>Departure Time</Form.Label>
                                <Form.Control type="text" name="departureTime" id="departureTime" value={departureTime} autocomplete="off" placeholder="Departure" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridArrivalTime">
                                <Form.Label>Arrival Time</Form.Label>
                                <Form.Control type="text" name="arrivalTime" id="arrivalTime" value={arrivalTime} autocomplete="off" placeholder="Arrival" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDuration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control type="number" name="duration" id="duration" value={duration} autocomplete="off" placeholder="Duration" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridGeneral">
                                <Form.Label>Fare (General)</Form.Label>
                                <Form.Control type="number" name="generalFare" id="generalFare" value={generalFare} autocomplete="off" placeholder="Fare" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLadies">
                                <Form.Label>Fare (Ladies)</Form.Label>
                                <Form.Control type="number" name="ladiesFare" id="ladiesFare" value={ladiesFare} autocomplete="off" placeholder="Fare" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" id="date" value={date} onChange={this.handleDateChange} />
                        </Form.Group>

                        <Form.Group controlId="formGridSeats">
                            <Form.Label>Total Seats</Form.Label>
                            <Form.Control type="number" name="seatsLeft" id="seatsLeft" value={seatsLeft} autocomplete="off" onChange={this.handleChange} />
                        </Form.Group>

    
                        <div className="text-center">
                            <Button variant="red" type="submit" >
                                Submit
                            </Button>
                        </div>
                    </Form>
                    </Card.Body>
                    </Card>
                </div> :
                <div className="container">
                <Link to="/admin"><Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "50px"}}>
                    <h2><strong>{this.state.response}</strong></h2>
                    
                </Jumbotron></Link> </div>}
            </div>
        )
    }
}

export default AddTrain
