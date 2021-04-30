import React from 'react';
import { Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
import {connect} from 'react-redux'
import {logoutUser} from '../../services/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faSignInAlt, faSignOutAlt, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends React.Component {
    
    logout = () => {
        this.props.logoutUser();
    };

    render() {
        const guestLinks = (
            <>
                <Nav className="mr-auto">
                    <Link to={"about"} className="nav-link">ABOUT</Link>
                    <Link to={"trainDetails"} className="nav-link">TRAINS</Link>
                    <Link to={"search"} className="nav-link">SEARCH</Link>
                    <Link to={"trainDetails"} className="nav-link"><FontAwesomeIcon icon={faDollarSign}/>{" "} FARES</Link>
                </Nav>
            <Nav className="navbar-right">
                <Link to="/register" className="nav-link"><FontAwesomeIcon icon={faUserPlus}/>{" "} REGISTER  </Link>
                <Link to="/login" className="nav-link"><FontAwesomeIcon icon={faSignInAlt}/>{" "} LOGIN</Link>
            </Nav> 
            </>
        );

        const adminLinks = (
            <>
                <Nav className="mr-auto">
                    <Link to={"about"} className="nav-link">ABOUT</Link>
                    <Link to={"trainDetails"} className="nav-link">TRAINS</Link>
                    <Link to={"search"} className="nav-link">SEARCH</Link>
                    <Link to={"trainDetails"} className="nav-link"><FontAwesomeIcon icon={faDollarSign}/>{" "} FARES</Link>
                    <Link to="/check" className="nav-link">TRAVEL</Link>                    
                    <Link to="/admin" className="nav-link">ADMIN</Link>                                   
                </Nav>
                <Nav className="navbar-right">
                    <Link to="/bookings" className="nav-link">MY BOOKINGS</Link>  
                    <Link to="/profile" className="nav-link"><FontAwesomeIcon icon={faUser}/>{" "} PROFILE</Link>   
                    <Link to="/logout" className="nav-link" onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt}/>{" "} LOGOUT</Link>
                </Nav> 
            </>
        );

        const userLinks = (
            <>
                <Nav className="mr-auto">
                    <Link to={"about"} className="nav-link">ABOUT</Link>
                    <Link to={"trainDetails"} className="nav-link">TRAINS</Link>
                    <Link to={"search"} className="nav-link">SEARCH</Link>
                    <Link to={"trainDetails"} className="nav-link"><FontAwesomeIcon icon={faDollarSign}/>{" "} FARES</Link>
                    <Link to="/check" className="nav-link">TRAVEL</Link>                                     
                </Nav>
                <Nav className="navbar-right">
                    <Link to="/bookings" className="nav-link">MY BOOKINGS</Link>  
                    <Link to="/profile" className="nav-link"><FontAwesomeIcon icon={faUser}/>{" "} PROFILE</Link>   
                    <Link to="/logout" className="nav-link" onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt}/>{" "}LOGOUT</Link>
                </Nav> 
            </>
        );
        return(
            <div>
                <Navbar style={{backgroundColor : "#490808"}} variant="dark">
                        <Link to="" className="navbar-brand">Get-UR-Train</Link>
                        {this.props.auth.isLoggedIn ? 
                            localStorage.getItem('role') === '[ROLE_ADMIN]' ? adminLinks : userLinks : 
                            guestLinks}
                </Navbar>
            </div>
          
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};
const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
