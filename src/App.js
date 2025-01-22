import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails'; // Create PostDetails component
import NewPostForm from './components/NewPostForm';
import { GlobalContainer } from './styles/globalStyles'; 

function App() {
  return (
    <GlobalContainer> 
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetails />} /> 
          <Route path="/new-post" element={<NewPostForm />} /> 
        </Routes>
      </Router>
    </GlobalContainer>
  );
}

export default App;