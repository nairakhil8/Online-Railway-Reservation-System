import axios from 'axios'
import React, { Component } from 'react'
import {Card, Button, ButtonGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


export class UpdateTrain extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             trains : []
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:8082/trainDetails")
        .then((response) => {
            this.setState({
                trains : response.data
            })
        })
    }

    deleteTrain = (trainId) => {
        axios.delete("http://localhost:8082/removeTrain/" + trainId, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} })
        .then((response) => {
            if(response.data != null){
                alert('Train Deleted Successfully!')
                this.setState({
                    trains: this.state.trains.filter(train => train.trainId !== trainId)
                })
            }
        })
    }
    
    render() {
        return (
            <div  className="row">
                <div className="container">
                    <Card className="border border-dark bg-dark text-white" style={{width : '100%', marginTop: '30px'}}>
                        <Card.Header className="text-center" style={{fontSize : '20px', backgroundColor: 'green'}}>Update/Delete a Train</Card.Header>
                        <Card.Body>
                            <table className="table table-striped table-bordered table-hover table-success">
                                <thead>
                                    <tr style={{height : '30px'}}>
                                        <th style={{fontSize : '16px'}}><strong>ID</strong></th>
                                        <th style={{fontSize : '16px'}}>Name</th>
                                        <th style={{fontSize : '16px'}}>Source</th>
                                        <th style={{fontSize : '16px'}}>Destination</th>
                                        <th style={{fontSize : '16px'}}>Departure Time</th>
                                        <th style={{fontSize : '16px'}}>Arrival Time</th>
                                        <th style={{fontSize : '16px'}}>Seats</th>
                                        <th style={{fontSize : '16px'}}>Date</th>  
                                        <th style={{fontSize : '16px'}}>Actions</th>                     
                                    </tr>
                                </thead>
 
                                <tbody>
                                    {this.state.trains.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="8"><h3>OOPS! No Trains Available!</h3></td>
                                        </tr> :
                                                
                                            this.state.trains.map(
                                                train =>
                                                <tr key={train.trainId} style={{height : '50px'}}>
                                                    <td  style={{fontSize : '14px'}}>{train.trainId}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.name}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.source}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.destination}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.departureTime}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.arrivalTime}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.seatsLeft}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.date}</td>
                                                    <td>
                                                    <ButtonGroup>
                                                        <Link to={"updateTrain/"+ train.trainId} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                                        <Button size="sm" variant="outline-danger" onClick={this.deleteTrain.bind(this, train.trainId)}><FontAwesomeIcon icon={faTrash} /></Button>
                                                    </ButtonGroup>
                                                    </td>
                                                </tr>
                                            )
                                        
                                    }
                                </tbody>
                            </table>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        )
    }
}

export default UpdateTrain
