import Parser from 'rss-parser';
import { BASE_URL } from './constants';

const parser: Parser = new Parser();

export const getMediumPosts = async (username: string) => {
  if (username === '') return 'Username cannot be empty';

  const URL = prepareURL(username);
  try {
    const feed = await parser.parseURL(URL);
    return { status: 200, message: 'success', posts: feed.items };
  } catch (error) {
    return { status: 404, message: 'Invalid username or posts not found for this username' };
  }
};

const prepareURL = (username: string): string => {
  if (username.trim().charAt(0) === '@') username = username.substring(1);
  return `${BASE_URL}/@${username}`;
};
