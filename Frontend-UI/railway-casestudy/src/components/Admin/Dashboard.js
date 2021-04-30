import React from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Card, CardDeck} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faCrown, faEye, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
    return (
        <div className="container">
            <div>
                <Jumbotron className="container text-center bg-primary text-white jumbotron" style={{marginTop : '30px'}}>
                    <h2><strong><FontAwesomeIcon icon = {faCrown} /> Admin Dashboard</strong></h2>
                    
                </Jumbotron>
            </div>
            <div className="my-cards">
                <CardDeck>
                    <Card bg="light">
                        
                        <Card.Body>
                        <Link to="/addTrain"><Card.Title><FontAwesomeIcon icon = {faPlus} /> ADD TRAIN</Card.Title></Link>
                        <Card.Text>
                            You can add new trains by entering the required details. Fill out the form and submit it to add new trains.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><i>Welcome Admin!</i></small>
                        </Card.Footer>
                    </Card>

                    <Card bg="light">
                       
                        <Card.Body>
                        <Link to="/updateTrain"><Card.Title><FontAwesomeIcon icon = {faAlignJustify} /> UPDATE/REMOVE TRAIN</Card.Title></Link>
                        <Card.Text>
                            You can Update or Delete the required trains from the table show. Click on the required option.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><i>Welcome Admin!</i></small>
                        </Card.Footer>
                    </Card>
                    
                </CardDeck>

                <br/>

                <CardDeck>
                    <Card bg="light">
                        
                        <Card.Body>
                        <Link to="/viewBookings"><Card.Title><FontAwesomeIcon icon = {faEye} /> VIEW BOOKINGS</Card.Title></Link>
                        <Card.Text>
                            You can view all the tickets booked by various users. The details willbe shown in the form of a table.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><i>Welcome Admin!</i></small>
                        </Card.Footer>
                    </Card>

                    

                    <Card bg="light">
                        
                        <Card.Body>
                        <Link to="/removeUser"><Card.Title><FontAwesomeIcon icon = {faTrashAlt} /> REMOVE USER</Card.Title></Link>
                        <Card.Text>
                            You can remove a particular user if necessary. You just have to enter the username and he/she will be removed!
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><i>Welcome Admin!</i></small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>

        </div>
    )
}

export default Dashboard
