import React, { useState } from 'react';
import { createPost } from '../services/api';

const NewPostForm = () => {
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newPost = { title, content }; 
      await createPost(newPost);
      // Handle success (e.g., clear form, display success message)
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea 
          id="content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPostForm;