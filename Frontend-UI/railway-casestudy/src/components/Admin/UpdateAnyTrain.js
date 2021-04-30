import axios from 'axios'
import React, { Component } from 'react'
import {Form, Card, Button, Col} from 'react-bootstrap'

export class UpdateAnyTrain extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            trainId : "",
            name : "",
            source : "",
            destination : "",
            date : "",
            departureTime : 0,
            arrivalTime : 0,
            duration : 0,
            seatsLeft : 0,
            generalFare : 0,
            ladiesFare : 0
       }
    }
    componentDidMount = () => {
        const id = +this.props.match.params.trainId
        axios.get("http://localhost:8082/trainSearchById/" + id)
        .then((res) => {
            this.setState({
                trainId : res.data.trainId,
                name : res.data.name,
                source : res.data.source,
                destination : res.data.destination,
                date : res.data.date,
                departureTime : res.data.departureTime,
                arrivalTime : res.data.arrivalTime,
                duration : res.data.duration,
                seatsLeft : res.data.seatsLeft,
                generalFare : res.data.generalFare,
                ladiesFare : res.data.ladiesFare
            })
        })
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
        axios.put('http://localhost:8082/updateTrain', this.state, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} })
        .then(response => {alert('Train Updated')})
        .catch(error => {alert('Train Updation Failed')})
    }

    render() {
        const {trainId, name, source, destination, date, departureTime, arrivalTime, duration, seatsLeft, generalFare, ladiesFare} = this.state;
        return (
            <div>
                <div className="container">
                    <Card bg="light" style={{width : '80%', marginLeft : '100px', marginTop : '20px'}}>
                        <Card.Header className="text-center" style={{height : '50px', fontSize: '22px', color: 'darkred'}}>UPDATE TRAIN DETAILS</Card.Header>
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
                                <Form.Control type="number" name="duration" id="duration" value={duration} placeholder="Duration" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridGeneral">
                                <Form.Label>Fare (General)</Form.Label>
                                <Form.Control type="number" name="generalFare" id="generalFare" value={generalFare} placeholder="Fare" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLadies">
                                <Form.Label>Fare (Ladies)</Form.Label>
                                <Form.Control type="number" name="ladiesFare" id="ladiesFare" value={ladiesFare} placeholder="Fare" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" id="date" value={date} onChange={this.handleDateChange} />
                        </Form.Group>

                        <Form.Group controlId="formGridSeats">
                            <Form.Label>Total Seats</Form.Label>
                            <Form.Control type="number" name="seatsLeft" id="seatsLeft" value={seatsLeft} onChange={this.handleChange} />
                        </Form.Group>

    

                        <div className="text-center">
                            <Button variant="red" type="submit" >
                                Submit
                            </Button>
                        </div>
                    </Form>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default UpdateAnyTrain
