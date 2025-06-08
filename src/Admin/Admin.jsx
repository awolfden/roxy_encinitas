import React from 'react';
import { AuthProvider, useAuth } from './AuthProvider';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminContent = () => {
  const { user, isLoading } = useAuth();

  // Basic debug logging
  console.log('Admin Auth State:', { user: !!user, isLoading });

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#FFFEFB'
      }}>
        <div>Loading authentication...</div>
      </div>
    );
  }

  if (user) {
    return <AdminDashboard />;
  } else {
    return <AdminLogin />;
  }
};

const Admin = () => {
  return (
    <AuthProvider>
      <AdminContent />
    </AuthProvider>
  );
};

export default Admin; 