import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const AppTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textColor}; /* Dynamically sets the text color */
`;

export const StyledList = styled.ul`
    list-style: none; /* Prevent browser default dots for lists */
    padding: 0;
    margin: 0;        /* Optional: Remove default margin */
`;