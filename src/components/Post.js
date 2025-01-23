import React, { useContext } from 'react';
import { PostContainer, PostContent, PostTitle } from '../styles/postStyles';
import { ThemeContext, themes } from '../context/ThemeContext'; // Adjust path as needed

const Post = ({ post }) => {
  const { theme } = useContext(ThemeContext); // Access the current theme
  const currentTheme = themes[theme]; // Get the theme styles (light or dark)

  return (
    <PostContainer style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.textColor }}>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.content}</PostContent>
      {/* ... rest of your Post component */}
    </PostContainer>
  );
};

export default Post;