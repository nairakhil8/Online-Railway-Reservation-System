import react from 'react';
import axios from 'axios';

class CheckTrainService {
    
    checkTrains(source, destination, date){
        let dateFinal = date.toString()
        return axios.get("http://localhost:8082/checkTrains/"+ source + "/" + destination + "/" + dateFinal, { headers: {Authorization : `Bearer ${localStorage.getItem('jwtToken')}`} });
    }

}

export default new CheckTrainService()