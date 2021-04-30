import { faShoppingBasket, faTicketAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Card, Carousel , CardDeck} from 'react-bootstrap'
import SearchTrainService from '../../services/SearchTrainService'

export class SearchTrainByName extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search : "",
             result : [],
             clicked : false
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        SearchTrainService.searchTrainByName(this.state.search).then((res) => {
            this.setState({
                result : res.data,
                clicked : true
            });
        })
        
    }
    
    // componentDidMount(){
    //     SearchTrainService.searchTrainByName().then((res) => {
    //         this.setState({result : res.data});
    //     })
    // }

    render() {
       const {search} = this.state
        return (
            <div>
                    <Carousel style={{width : "100%"}}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2790395/pexels-photo-2790395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="500px"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1><strong>Search UR Train!</strong></h1>
                            <p className="container" style={{width : "60%"}}>
                                <form onSubmit={this.submitHandler}>
                                    <input type="text" name="search" id="search" value={search} autocomplete="off" placeholder="Search Name..." onChange={this.changeHandler} style={{color : 'whitesmoke'}}></input>
                                    <Button type="submit" variant="danger">Search</Button>
                                </form>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                {        
                        this.state.clicked === true && this.state.result.length !== 0 ?                               
                                                this.state.result.map(
                                                    train =>
                                                    <div className="container">
                                                        

                                                                                                                
                                                        
                                                       
                                                    <Card key={train.trainId} style={{paddingBottom : '20px', marginTop : '20px'}}>
                                                        <Card.Header className="text-white" style={{backgroundColor : 'green'}}>
                                                           <h5><strong>{train.name} ({train.trainId})</strong></h5> 
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
                                                    </div>
                                                ) : this.state.clicked === false ?
                                                    <div className="container">                                                        
                                                    </div>: 
                                                    <div className="container">                                                        
                                                        <Card bg="dark" className="text-center text-warning" style={{width : '40%', marginLeft : '325px', marginTop : '20px', paddingTop :'20px', borderRadius : '50px'}}>
                                                            <Card.Title><h3><strong>No Such Train Available!</strong></h3></Card.Title>
                                                        </Card>
                                                    </div>
                                            
                                        }

                        
<div className="container" style={{marginTop : '40px'}}>
                    <CardDeck>
                        
                            <Card className="text-black">
                            <Link to="/register">
                                <Card.Header className="text-black">
                                    <strong><FontAwesomeIcon icon={faUser}/>{" "} REGISTER NOW!</strong>                             
                                </Card.Header>
                            </Link>
                                <Card.Body>
                                    Become a part of the Get-UR-Train Network by registering yourself.<br/>
                                </Card.Body>

                                <Card.Footer>

                                </Card.Footer>
                            </Card>
                        <Card bg="dark" className="text-white">
                            <Card.Header>
                                <strong><FontAwesomeIcon icon={faShoppingBasket}/>{" "} SPECIAL OFFERS! *</strong>                             
                            </Card.Header>

                            <Card.Body>
                                Exclusive offers to our regular customers! Stay tuned for upcoming special offers.<br/>
                            </Card.Body>

                            <Card.Footer>
                                
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Link to="/login"><Card.Header>
                                <strong><FontAwesomeIcon icon={faTicketAlt}/>{" "} BOOK NOW!</strong>                             
                            </Card.Header>
                            </Link>
                            <Card.Body>
                                Check for the appropriate trains and get your ticket now!<br/>
                            </Card.Body>

                            <Card.Footer>
                                
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>

            </div>
        )
    }
}




export default SearchTrainByName
