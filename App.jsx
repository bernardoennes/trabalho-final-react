import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { UserProfilePage } from './components/UserProfilePage';

function App() {
  return (
    <AuthProvider>
      <UserProfilePage />
    </AuthProvider>
  );
}

export default App;