import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import NewPostForm from './components/NewPostForm';
import { AppContainer, AppTitle } from './styles/appStyles';
import { ThemeProvider, ThemeContext, themes } from './context/ThemeContext'; // Import ThemeProvider
import ThemeToggleButton from './components/ToggleButton'; // Import ThemeToggleButton
import { ThemeProvider as StyledThemeProvider } from 'styled-components'; // Import ThemeProvider from styled-components

function AppContent() {
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  return (
    <StyledThemeProvider theme={themes[theme]}>
      <AppContainer>
        <AppTitle>My Blog</AppTitle>
        <ThemeToggleButton />
        <Router>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/new-post" element={<NewPostForm />} />
          </Routes>
        </Router>
      </AppContainer>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;