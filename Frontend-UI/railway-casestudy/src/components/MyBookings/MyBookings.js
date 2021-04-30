import React, { Component } from 'react'
import axios from 'axios'
import {Jumbotron, Card, CardDeck, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export class MyBookings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             bookings : [],
             pnr : ""
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:8081/myBookings", { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} }).then((res) => {
            this.setState({
                bookings : res.data
            })
        })
    }

    cancelTicket = (pnr) => {
        axios.delete("http://localhost:8083/cancel/" + pnr, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} })
        .then((response) => {
            if(response.data != null){
                alert('Ticket Cancelled Successfully!')
                this.setState({
                    bookings: this.state.bookings.filter(train => train.pnr !== pnr)
                })
            }
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="container">                                                        
                    <Card bg="dark" className="text-center text-warning" style={{width : '50%', marginLeft : '260px', marginTop : '20px', paddingTop :'20px', borderRadius : '50px'}}>
                        <Card.Title><h1><strong>My Bookings</strong></h1></Card.Title>
                    </Card>
                </div>

                {this.state.bookings.length === 0 ? 
                    <Jumbotron className="bg-dark text-white jumbotron" style={{marginTop : '15px'}}>
                        <h2>No Bookings Yet!</h2>                    
                    </Jumbotron> :
                this.state.bookings.map( train =>
                    <Card key={train.pnr} style={{marginTop : '20px', width : "100%"}}>
                                                    <Card.Header className="text-white" style={{backgroundColor : 'black'}}>
                                                       <strong>PNR: {train.pnr}</strong> 
                                                       <Button size="sm" variant="outline-danger" style={{marginLeft : '850px', borderRadius : '20px'}} onClick={this.cancelTicket.bind(this, train.pnr)}>CANCEL { " " }<FontAwesomeIcon icon={faTrash} /></Button>
                                                    </Card.Header>
                                                    
                                                    <Card.Text>
                                                        <br/>
                                                        <CardDeck style={{marginLeft : '5px', marginRight : '5px', color : 'white'}}>
                                                            <Card style={{backgroundColor : "#D2691E"}}>
                                                                <Card.Title style={{marginLeft : "10px", paddingTop : '20px'}}>Number :    {train.trainId}</Card.Title>
                                                                <Card.Title style={{marginLeft : "10px",}}>Train :     {train.name}</Card.Title>                                                               
                                                            </Card>

                                                            <Card style={{backgroundColor : "#D2691E"}}>
                                                                <Card.Title style={{marginLeft : "10px", paddingTop : '20px'}}>From :     {train.source}</Card.Title>
                                                                <Card.Title style={{marginLeft : "10px"}}>To :     {train.destination}</Card.Title>                                                                
                                                            </Card>

                                                            

                                                            <Card style={{backgroundColor : "#D2691E"}}>
                                                                <Card.Title style={{marginLeft : "10px", paddingTop : '20px'}}>Seats :    {train.seats}</Card.Title>
                                                                <Card.Title style={{marginLeft : "10px",}}>Date :     {train.date}</Card.Title>
                                                            </Card>

                                                            <Card style={{backgroundColor : "#D2691E"}}>
                                                                <Card.Title style={{marginLeft : "10px", paddingTop : '20px'}}>Quota :    {train.quota}</Card.Title>
                                                                <Card.Title style={{marginLeft : "10px",}}>Total Fare :     {train.totalFare}</Card.Title>
                                                            </Card>
                                                        </CardDeck>
                                                        
                                                    </Card.Text>

                                                    <Card.Footer>
                                                        <small className="text-muted"><i>Travel Safe: Use Masks & Sanitizers during travel!</i></small>
                                                    </Card.Footer>


                                                </Card>
                 ) }
            </div>
        )
    }
}

export default MyBookings
