import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Header from './layout/Header';
import Footer from './layout/Footer';
import AppRoutes from './routes/AppRoutes';
import './App.css';

/**
 * App - Root component.
 * Wraps the application with BrowserRouter and sets up the global layout.
 */
function App() {
  return (
    <BrowserRouter>
      {/* CssBaseline provides a consistent baseline for styling across browsers */}
      <CssBaseline />
      <Header />
      <Container>
        {/* AppRoutes contains all route definitions and page components */}
        <AppRoutes />
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
