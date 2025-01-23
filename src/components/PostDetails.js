import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../services/api'; // Create fetchPostById in api.js
import { PostContainer, PostContent, PostTitle } from '../styles/postStyles'; 

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
        <PostContainer>
            <PostTitle>{post.title}</PostTitle> 
            <PostContent>{post.content}</PostContent>
            {/* ... rest of your Post component */}
        </PostContainer>
    </div>
  );
};

export default PostDetails;