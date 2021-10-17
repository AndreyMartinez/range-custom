import axios from "axios";

const URL = 'https://demo9961313.mockable.io'
class RangeService {
    static findFirstExcercise() {
     return axios.get(`${URL}/custom`);
    }

    static findSecondExcercise() {
    return axios.get(`${URL}/range`); 
    }
}

export default RangeService