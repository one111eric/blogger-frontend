import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend's actual URL

export const fetchPosts = async () => {
  try {
    console.log("getting posts")
    const response = await axios.get(`${API_BASE_URL}/v1/posts`);
    console.log(response.data.items)
    return response.data.items;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; 
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/v1/posts`, post);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const fetchPostById = async (postId) => {
    try {
        const response = await axios.get(`<span class="math-inline">{API_BASE_URL}/posts/</span>{postId}`); 
        return response.data;
    } catch (error) {
        console.error('Error fetching post by ID:', error);
        throw error;
    }
};