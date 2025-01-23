import React, { useState, useEffect, useContext } from 'react';
import { fetchPosts } from '../services/api';
import Post from './Post';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import styled from 'styled-components'; // Import styled-components
import { StyledList } from '../styles/appStyles';

const PostListContainer = styled.div`
  color: ${(props) => props.theme.textColor}; /* Apply text color from theme */
  background-color: ${(props) => props.theme.backgroundColor}; /* Apply background color from theme */
  padding: 1rem;
  border-radius: 8px;
`;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPostData();
  }, []);

  return (
    <PostListContainer theme={theme}>
      <StyledList>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <Post post={post} />
            </Link>
          </li>
        ))}
      </StyledList>
    </PostListContainer>
  );
};

export default PostList;
