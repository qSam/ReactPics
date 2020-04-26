import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID 3bvy-aP8Fd-0tnLF8zlnYfw3T3IYqjbKUAkS3HBKGYs'
    }
});