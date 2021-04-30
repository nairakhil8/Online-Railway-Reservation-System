import axios from 'axios'
import React, { Component } from 'react'
import {Form, Card, Button, Col, Jumbotron} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export class ReserveTrain extends Component {

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
            ladiesFare : 0,
            seats : 0,
            quota : 'General',
            totalFare : null,
            username : '',
            result : '',
            payment : false,
            error : ''
       }
    }

    getUsername = () => {
        axios.get('http://localhost:8081/showProfile', { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} } )
        .then((res) => {
            this.setState({
                username : res.data.username
            })
        })
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
        this.getUsername()
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
    
    fareCalculator = () => {
        if(this.state.quota === 'General')
        this.setState({
            totalFare : this.state.generalFare * this.state.seats
        })
        else if(this.state.quota === 'Ladies')
        this.setState({
            totalFare : this.state.ladiesFare * this.state.seats
        })
    }

    async razorPayHandler(e) {
        e.preventDefault()
        const ticketUrl = `http://localhost:9090/razorpay/order/${this.state.totalFare}`
        const response = await axios.get(ticketUrl);
        const { data } = response;
        console.log("App -> razorPayPaymentHandler -> data", data)
        
        const options = {
          key: 'rzp_test_5CwxprOBmNppCm',
          name: `${this.state.username}`,
          description: "Proceed with your Ticket-Payment",
          order_id: data.id,
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `http://localhost:9090/razorpay/capture/${paymentId}/${this.state.totalFare}`;
             const captureResponse = await axios.post(url, {})
             const successObj = JSON.parse(captureResponse.data)
             const captured = successObj.captured;
             console.log("App -> razorPayPaymentHandler -> captured", successObj)
             if(captured){
                 console.log('success')
                 axios.post('http://localhost:8083/reserve', this.state, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} })
            .then(response => {
            this.setState({
                result : response.data
            })
        })
        .catch(error => {console.group(error)})
            }
             
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
    
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.razorPayHandler(e)     
        
    }

    render() {
        const {trainId, name, source, destination, date, quota, seats} = this.state;
        return (
            <div>
                {this.state.result === '' ?
                <div className="container" style={{height : '90%'}}>
                    <Card bg="light" style={{marginTop : '30px', marginLeft : '115px', width : '70%'}}>
                        <Card.Header className="text-center" style={{height : '60px', fontSize: '26px', color: 'darkred', backgroundColor : 'green'}}>RESERVE TRAIN!</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTrainId">
                                <Form.Label>Train ID</Form.Label>
                                <Form.Control type="text" name="trainId" id="trainId" value={trainId} placeholder="Train Id"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" id="name" value={name} placeholder="Train Name"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSource">
                                <Form.Label>Source</Form.Label>
                                <Form.Control type="text" name="source" id="source" value={source} placeholder="Source"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDestination">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" name="destination" id="destination" value={destination} placeholder="Destination"/>
                            </Form.Group>
                        </Form.Row>
                        
                         <Form.Group controlId="formGridDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" id="date" value={date}/>
                        </Form.Group>

                        <Form.Group controlId="formGridSeats">
                            <Form.Label>Seats</Form.Label>
                            <Form.Control type="number" name="seats" id="seats" value={seats} placeholder="Seats" min = '1' max = '6' onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formGridQuota">
                            <Form.Label>Quota</Form.Label>
                            {/* <Form.Control type="quota" name="quota" id="quota" value={quota} onChange={this.handleChange} /> */}
                            <select className="form-control" id="quota" name="quota" value={quota} onChange={this.handleChange} required>
                                                <option value="General">General</option>
                                                <option value="Ladies">Ladies</option>
                                            </select>
                        </Form.Group>
                         
                         

                         <div>
                             <h3><Button variant = "danger"  onClick={this.fareCalculator}>Total Fare (INR)</Button>  {this.state.totalFare}</h3><span className="text-center"></span>
                         </div>
                        <Button variant="success" type="submit" block>
                            Submit
                        </Button>
                    </Form>
                    </Card.Body>
                    </Card>
                </div>:
                <div className="container">
                    <Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "50px"}}>
                            <h2><strong>{this.state.result}</strong></h2>
                            <p className="text-white">
                               <Link to="/bookings">Check My Bookings Section for details!</Link>
                            </p>
                        </Jumbotron>
                </div> }
            </div>
        )
    }
}

export default ReserveTrain
