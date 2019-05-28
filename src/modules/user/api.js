import axios from 'axios';

const user = axios.create({
	baseURL: 'https://api.user.com',
});

export default {
	user,
};
