import react from 'react';
import axios from 'axios';

class SearchTrainService {
    
    searchTrainByName(search){
        return axios.get("http://localhost:8082/trainSearchByName/"+ search);
    }

    searchTrainById(search){
        return axios.get("http://localhost:8082/trainSearchById/"+ search);
    }
}

export default new SearchTrainService()