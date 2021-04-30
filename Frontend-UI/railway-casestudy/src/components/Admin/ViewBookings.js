import React, { Component } from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
export class ViewBookings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             tickets : []
        }
    }

    componentDidMount =() => {
        axios.get("http://localhost:8083/getAllTickets")
        .then((res) => {
            this.setState({
                tickets : res.data
            })
        })
    }
    
    render() {
        return (
            <div>
                <div  className="row">
                <div className="container">
                    <Card className="border border-dark bg-dark text-white" style={{width : '100%', marginTop : '30px'}}>
                        <Card.Header className="text-center" style={{fontSize : '20px', backgroundColor: 'green'}}>All Reserved Tickets</Card.Header>
                        <Card.Body>
                            <table className="table table-striped table-bordered table-hover table-success">
                                <thead>
                                    <tr style={{height : '30px'}}>
                                        <th style={{fontSize : '16px'}}><strong>PNR</strong></th>
                                        <th style={{fontSize : '16px'}}>TrainID</th>
                                        <th style={{fontSize : '16px'}}>Source</th>
                                        <th style={{fontSize : '16px'}}>Destination</th>
                                        <th style={{fontSize : '16px'}}>Seats</th>                                        
                                        <th style={{fontSize : '16px'}}>Quota</th>   
                                        <th style={{fontSize : '16px'}}>Total Fare</th>                    
                                    </tr>
                                </thead>
 
                                <tbody>
                                    {this.state.tickets.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="7"><h3>OOPS! No Tickets Available!</h3></td>
                                        </tr> :
                                                
                                            this.state.tickets.map(
                                                train =>
                                                <tr key={train.pnr} style={{height : '50px'}}>
                                                    <td  style={{fontSize : '14px'}}>{train.pnr}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.trainId}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.source}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.destination}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.seats}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.quota}</td>
                                                    <td  style={{fontSize : '14px'}}>{train.totalFare}</td>
                                                </tr>
                                            )
                                        
                                    }
                                </tbody>
                            </table>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
            </div>
        )
    }
}

export default ViewBookings
