import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavigationBar from './components/Navbar/NavigationBar';
import TrainDetails from './components/TrainDetails/TrainDetails';
import AddTrain from './components/Admin/AddTrain';
import Home from './components/Home/Home'
import CheckTrains from './components/CheckTrains/CheckTrains';
import Login from './components/Login/Login';
import RegistrationForm from './components/Login/RegistrationForm';
import About from './components/About/About'
import SearchTrainByName from './components/SearchTrain/SearchTrainByName';
import Dashboard from './components/Admin/Dashboard';
import ViewBookings from './components/Admin/ViewBookings';
import RemoveUser from './components/Admin/RemoveUser';
import Profile from './components/Profile/Profile';
import MyBookings from './components/MyBookings/MyBookings';
import UpdateTrain from './components/Admin/UpdateTrain';
import UpdateAnyTrain from './components/Admin/UpdateAnyTrain';
import ReserveTrain from './components/ReserveTrain/ReserveTrain';
import Logout from './components/Login/Logout';

function App() {
  return (
    <div>
      <div>
        
      </div>
      <div>
        <div>
          <BrowserRouter>
          <NavigationBar/>
          <div>
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/trainDetails' component={TrainDetails}></Route>
                <Route path='/register' component={RegistrationForm}></Route>
                <Route path='/check' component={CheckTrains}></Route>
                <Route path='/search' component={SearchTrainByName}></Route>
                <Route exact path='/admin' component={Dashboard}></Route>
                <Route path='/addTrain' component={AddTrain}></Route>
                <Route path='/updateTrain' exact component={UpdateTrain}></Route>
                <Route path='/updateTrain/:trainId' component={UpdateAnyTrain}></Route>
                <Route path='/reserve/:trainId' component={ReserveTrain}></Route>
                <Route path='/removeUser' component={RemoveUser}></Route>
                <Route path='/viewBookings' component={ViewBookings}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/logout' component={Logout}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/bookings' component={MyBookings}></Route>
              </Switch>
              </div>
           </BrowserRouter>
        </div>
        </div>
        
    </div>
  );
}

export default App;
