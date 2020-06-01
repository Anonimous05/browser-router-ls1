import axios from 'axios';

const axiosAPI = axios.create({
    baseURL:'https://airpress-697c5.firebaseio.com/'
});

export default axiosAPI;
