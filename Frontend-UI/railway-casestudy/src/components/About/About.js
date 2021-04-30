import React from 'react'
import { Card, CardDeck, Jumbotron } from 'react-bootstrap'

function About() {
    return (
        <div>
            <div className="container">
                <Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "20px"}}>
                    <h2><strong>ABOUT</strong></h2>
                    <p className="text-white">
                        A little insight on this application!
                    </p>
                </Jumbotron>

                

                <CardDeck style={{width  :'90%', marginLeft : '60px'}}>
                    <Card>
                        <Card.Header>
                            <h5><strong>Features</strong></h5>
                        </Card.Header>
                        <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Darjeeling%20Himalayan%20Railways/3.jpg" height="300px"/>
                        
                        <Card.Body>
                            <ul>
                                <li>Become a Member and Login</li>
                                <li>View the various trains and their fares</li>
                                <li>Search for any Train</li>
                                <li>Check for available trains</li>
                                <li>Fill in your details and get the ticket</li>
                                <li>Change of plans? No worries! Cancel tickets at any time!</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><i>Get-UR-Train welcomes you!</i></small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Header>
                        <h5><strong>Developer's Note</strong></h5>
                        </Card.Header>
                        <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Matheran%20Railway/4.jpg" height="300px"/>
                        <Card.Body>
                            <ul>
                                <li>Developed by Akhil S Nair</li>
                                <li>It is an Online Railway Reservation Sytem</li>
                                <li>Developed as a part of Java Full-Stack Training</li>
                                <li>Future improvements and updates will be made</li>
                                <li>Contact me via email : nairakhil8@gmail.com</li>
                                <li>Checkout my LinkedIn Profile</li>
                            </ul>
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

export default About
