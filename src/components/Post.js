import React from 'react';
import { PostContainer, PostTitle } from '../styles/postStyles'; 

const Post = ({ post }) => {
    return (
        <PostContainer>
            <PostTitle>{post.title}</PostTitle> 
            {/* ... rest of your Post component */}
        </PostContainer>
    );
};

export default Post;