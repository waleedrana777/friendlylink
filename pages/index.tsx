import App from '../components/App';
import AuthProvider from '../auth/AuthProvider';
import React from 'react';

function HomePage() {
  return <AuthProvider>
    <App />
  </AuthProvider>
}

export default HomePage
