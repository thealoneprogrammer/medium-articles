import { API_URL, BASE_URL } from './constants';
import axios from 'axios'

export const getMediumPosts = async (username: string) => {
    if (username === '') return 'Username cannot be empty';

    const URL = prepareURL(username);
    try {
        const response = await axios.post(API_URL, {
            url: URL
        })
        return { status: 200, message: 'success', posts: response.data };
    } catch (error) {
        return { status: 404, message: 'Invalid username or posts not found for this username' };
    }
};

const prepareURL = (username: string): string => {
    if (username.trim().charAt(0) === '@') username = username.substring(1);
    return `${BASE_URL}/@${username}`;
};
