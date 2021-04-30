import React, { Component } from 'react'
import CheckTrainService from '../../services/CheckTrainService'
import {Card, Button, Carousel, CardDeck} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export class CheckTrains extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             source : "",
             destination : "",
             date : "",
             result : [],
             clicked : false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitChange = (e) => {
        e.preventDefault()
        console.log(this.state)
        CheckTrainService.checkTrains(this.state.source, this.state.destination, this.state.date).then((res) => {
            this.setState({
                result : res.data,
                clicked : true
            });
        })
    }
     
    render() {
        const {source, destination, date } = this.state
        return (
            <div>

                <Carousel style={{width : "100%"}}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1054540/pexels-photo-1054540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="500px"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h1>Check for Available Trains</h1>
                        <p>Enter the Source, Destination and Date of Travel.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container">
                <div>
                    <form onSubmit={this.submitChange}>
                        <div>
                            <CardDeck style={{marginTop : "20px"}}>
                                <Card>
                                    <Card.Header className="text-white" style={{backgroundColor : "#490808"}}>FROM</Card.Header>
                                    <Card.Text>
                                        <input type="text" name="source" id="source"  autocomplete="off" value={source} placeholder="Source" onChange={this.handleChange}></input>
                                    </Card.Text>
                                </Card>

                                <Card>
                                    <Card.Header className="text-white" style={{backgroundColor : "#490808"}}>TO</Card.Header>
                                    <Card.Text>
                                    <input type="text" name="destination" id="destination"  autocomplete="off" value={destination} placeholder="Destination" onChange={this.handleChange}></input>
                                    </Card.Text>
                                </Card>

                                <Card >
                                    <Card.Header className="text-white" style={{backgroundColor : "#490808"}}>DATE</Card.Header>
                                    <Card.Text>
                                        <input type="date" name="date" id="date" value={date} onChange={this.handleChange}></input>
                                    </Card.Text>
                                </Card>
                            </CardDeck>
                            <Button type="submit" style={{marginLeft:"45%", borderRadius:"40px"}}>Search</Button>
                            
                        </div>
                    </form>
                </div>

               
                                    {
                                         this.state.clicked === true && this.state.result.length !== 0 ?        
                                            this.state.result.map(
                                                train =>
                                                <>
                                                <Link to={"reserve/"+train.trainId}><Card key={train.trainId} style={{marginTop : '30px', paddingBottom : '20px'}}>
                                                    <Card.Header className="text-white" style={{backgroundColor : 'black'}}>
                                                       <strong>{train.name} ({train.trainId})</strong> 
                                                    </Card.Header>
                                                    
                                                    <Card.Text>
                                                            <br/>
                                                            <CardDeck style={{marginLeft : '5px', marginRight : '5px', color : 'white'}}>
                                                                <Card bg="light">
                                                                    <Card.Title style={{marginLeft : "10px", paddingTop : '20px', color: 'black'}}>FROM :  <span style={{marginLeft : '20px'}}>{train.source}</span> </Card.Title>
                                                                    <Card.Title style={{marginLeft : "10px", color : 'black'}}>TO :     <span style={{marginLeft : '50px'}}>{train.destination}</span></Card.Title>                                                                
                                                                </Card>
    
                                                                <Card bg="light">
                                                                    <Card.Title style={{marginLeft : "10px", paddingTop : '20px', color : 'black'}}>Departure :    <span style={{marginLeft : '10px'}}>{train.departureTime}</span></Card.Title>
                                                                    <Card.Title style={{marginLeft : "10px", color : 'black'}}>Arrival :     <span style={{marginLeft : '40px'}}>{train.arrivalTime}</span></Card.Title>                                                               
                                                                </Card>
    
                                                                <Card bg="light">
                                                                    <Card.Title style={{marginLeft : "10px", paddingTop : '20px', color : 'black'}}>Seats :   <span style={{marginLeft : '10px'}}> {train.seatsLeft}</span></Card.Title>
                                                                    <Card.Title style={{marginLeft : "10px", color : 'black'}}>Date :    <span style={{marginLeft : '20px'}}> {train.date}</span></Card.Title>
                                                                </Card>
    
                                                                <Card bg="light">
                                                                    <Card.Title style={{marginLeft : "10px", paddingTop : '20px', color : 'black'}}>GEN :    <span style={{marginLeft : '35px'}}>{train.generalFare} (INR)</span></Card.Title>
                                                                    <Card.Title style={{marginLeft : "10px", color : 'black'}}>LADIES :     <span style={{marginLeft : '10px'}}>{train.ladiesFare} (INR)</span></Card.Title>
                                                                </Card>
                                                            </CardDeck>
                                                            
                                                        </Card.Text>

                                                </Card>
                                                </Link>
                                                </>
                                            ) : this.state.clicked === false ?
                                            <div className="container">                                                        
                                            </div>: 
                                            <div className="container">                                                        
                                                <Card bg="dark" className="text-center text-warning" style={{width : '40%', marginLeft : '325px', marginTop : '10px', paddingTop :'20px'}}>
                                                    <Card.Title><h3><strong>No Such Train Available!</strong></h3></Card.Title>
                                                </Card>
                                            </div>
                                        
                                    }
                    </div>
                </div>
            
        )
    }
}

export default CheckTrains
