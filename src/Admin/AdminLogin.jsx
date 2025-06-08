import React from 'react';
import { Container, Paper, Typography, Button, Box } from '@material-ui/core';
import { useAuth } from './AuthProvider';

const AdminLogin = () => {
  const { signIn, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Container maxWidth="sm" style={{ marginTop: '80px' }}>
        <Paper elevation={3} style={{ padding: '40px', textAlign: 'center' }}>
          <Typography variant="h6">Loading...</Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '80px' }}>
      <Paper elevation={3} style={{ padding: '40px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#8B4513', marginBottom: '30px' }}>
          Roxy Admin Portal
        </Typography>
        
        <Typography variant="body1" style={{ marginBottom: '30px', color: '#666' }}>
          Sign in to access the restaurant management dashboard
        </Typography>

        <Box style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Button
            variant="contained"
            onClick={() => signIn()}
            style={{
              backgroundColor: '#8B4513',
              color: 'white',
              padding: '12px 30px',
              fontSize: '16px',
              textTransform: 'none'
            }}
          >
            Sign In
          </Button>
        </Box>

        <Box style={{ marginTop: '30px', padding: '15px', backgroundColor: '#FFF8F0', borderRadius: '8px' }}>
          <Typography variant="caption" style={{ color: '#8B4513', display: 'block', fontWeight: 'bold' }}>
            Admin Access Only
          </Typography>
          <Typography variant="body2" style={{ marginTop: '5px', color: '#666', fontSize: '14px' }}>
            Contact your administrator if you need access to this system.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminLogin; 