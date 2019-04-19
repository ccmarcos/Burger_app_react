import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-43449.firebaseio.com/'
});

export default instance;