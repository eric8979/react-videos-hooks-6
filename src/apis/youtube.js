import axios from 'axios';

const KEY = 'AIzaSyDg04I10oF5vAt22OVVlFUtt78GTQ7AehY';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});
