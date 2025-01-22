import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../services/api'; // Create fetchPostById in api.js

const PostDetails = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await fetchPostById(id);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      {/* ... display post content, author, etc. */}
    </div>
  );
};

export default PostDetails;