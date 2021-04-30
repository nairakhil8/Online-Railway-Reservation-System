import react from 'react';
import axios from 'axios';

class TrainListService {
    
    getTrains(){
        return axios.get("http://localhost:8082/trainDetails");
    }
}

export default new TrainListService()