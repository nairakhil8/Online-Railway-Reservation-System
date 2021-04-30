import { faRegistered, faTicketAlt, faTrain, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Jumbotron, Card, CardColumns, Carousel, CardDeck} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div>
            
            <div className="container">
            <div >
                <Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "20px"}}>
                    <h1><strong>Welcome to Get-UR-Train</strong></h1>
                    <p className="text-white">
                        The Perfect train for the Perfect Destinations!
                    </p>
                </Jumbotron>
            </div>
            <CardColumns>
                <Link to="/register">
                    <Card bg="light">
                    <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Darjeeling%20Himalayan%20Railways/3.jpg" />
                    <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faUser} />REGISTER NOW! </Card.Title>
                    <Card.Text><strong>
                        Become a part of the Get-UR-Train Network by registering yourself.
                            <br/><br/>
                            Kindly Login if already registered.{" "}            
                            </strong>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><i>Get-UR-Train welcomes you!</i></small>
                    </Card.Footer>
                </Card></Link> 

                <Link to="/trainDetails">
                    <Card bg="dark">
                    <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Kangara%20Valley/4.jpg" />
                    <Card.Body>
                    <Card.Title className="text-warning"><FontAwesomeIcon icon={faTrain} /> LOOK FOR TRAINS & FARES!</Card.Title>
                    <Card.Text className="text-white">
                            
                            Get to know the various trains and their fares in our network.
                            <br/><br/>
                            Find train with the most affordable rates!{" "}
                                             
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted text-white"><i>Get-UR-Train welcomes you!</i></small>
                    </Card.Footer>
                </Card>
                </Link>

                
                <Link to="/login"><Card bg="light">
                    <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Matheran%20Railway/4.jpg" />
                    <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faTicketAlt}/> BOOK YOUR TICKET NOW!</Card.Title>
                    <Card.Text>
                        <strong>                            
                        Check for the appropriate trains and get your ticket now!
                            <br/><br/>
                        Also, cancel tickets with minimum loss!{" "}
                        </strong>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><i>Get-UR-Train welcomes you!</i></small>
                    </Card.Footer>
                </Card>
                </Link>
            </CardColumns>
        </div>
                

                <div className="container">
                    <CardDeck style={{marginTop : '20px'}}>
                        <Card>
                            <Card.Header className="text-center text-white" style={{backgroundColor : '#490808', fontSize : '18px'}}>
                                <strong>GALLERY</strong>
                            </Card.Header>
                            <Card.Body>
                                <Carousel style={{width : "100%"}}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/2365430/pexels-photo-2365430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                                        alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        <h3>Our Trains</h3>
                                        <p>One of the most luxurious trians.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/2475301/pexels-photo-2475301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                                        alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                        <h3>Our Trains</h3>
                                        <p>One of the most luxurious trians.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/5982046/pexels-photo-5982046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                                        alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                        <h3>Our Trains</h3>
                                        <p>One of the most luxurious trians.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/2928780/pexels-photo-2928780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                                        alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                        <h3>Our Trains</h3>
                                        <p>One of the most luxurious trians.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                                        alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                        <h3>Our Trains</h3>
                                        <p>One of the most luxurious trians.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                                        alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                        <h3>Our Trains</h3>
                                        <p>One of the most luxurious trians.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                </Carousel>    
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"><i>Get-UR-Train welcomes you!</i></small>
                            </Card.Footer>
                        </Card>

                        <Card bg="dark">
                            <Card.Header className="text-center text-white" style={{backgroundColor : '#490808', fontSize : '18px'}}>
                                <strong>FUTURE PLANS & UPDATES!</strong>
                            </Card.Header>

                            <Card.Body>
                                <Card bg="light" className="text-success" style={{marginTop : '20px'}}>
                                    <Card.Body>
                                       <strong>Special Discounts and Exclusive offers for registered members!</strong> 
                                    </Card.Body>
                                </Card>

                                <Card bg="light" className="text-danger" style={{marginTop : '30px'}}>
                                    <Card.Body>
                                       <strong>New Trains with uniques features and facilities!</strong> 
                                    </Card.Body>
                                </Card>

                                <Card bg="light" className="text-success" style={{marginTop : '30px'}}>
                                    <Card.Body>
                                       <strong>Proper measures and safety for the pandemic!</strong> 
                                    </Card.Body>
                                </Card>

                                <Card bg="light" className="text-danger" style={{marginTop : '30px'}}>
                                    <Card.Body>
                                        <strong>Holiday Packages for your vacations at the most affordable rates!</strong>
                                    </Card.Body>
                                </Card>

                                <Card bg="light" className="text-success" style={{marginTop : '30px'}}>
                                    <Card.Body>
                                        <strong>Separate quotas for differently-abled Passengers!</strong>
                                    </Card.Body>
                                </Card>
                            </Card.Body>

                            <Card.Footer>
                                <small className="text-muted"><i>Get-UR-Train welcomes you!</i></small>
                            </Card.Footer>

                        </Card>
                    </CardDeck>
                </div>
        
        
        
        </div>
    )
}

export default Home
