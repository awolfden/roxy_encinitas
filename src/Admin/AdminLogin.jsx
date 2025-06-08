import React from 'react';
import { Container, Paper, Typography, Button, Box, useTheme, useMediaQuery } from '@material-ui/core';
import { useAuth } from './AuthProvider';

const AdminLogin = () => {
  const { signIn, isLoading } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isLoading) {
    return (
      <Container maxWidth="sm" style={{ 
        marginTop: isMobile ? '40px' : '80px',
        padding: isMobile ? '0 16px' : '0'
      }}>
        <Paper elevation={3} style={{ 
          padding: isMobile ? '20px' : '40px', 
          textAlign: 'center' 
        }}>
          <Typography variant="h6">Loading...</Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" style={{ 
      marginTop: isMobile ? '40px' : '80px',
      padding: isMobile ? '0 16px' : '0'
    }}>
      <Paper elevation={3} style={{ 
        padding: isMobile ? '20px' : '40px', 
        textAlign: 'center' 
      }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          gutterBottom 
          style={{ 
            color: '#4A5568', 
            marginBottom: '30px',
            fontSize: isMobile ? '24px' : '32px'
          }}
        >
          Roxy Admin Portal
        </Typography>
        
        <Typography 
          variant="body1" 
          style={{ 
            marginBottom: '30px', 
            color: '#718096',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.5'
          }}
        >
          Sign in to access the restaurant management dashboard
        </Typography>

        <Box style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Button
            variant="contained"
            onClick={() => signIn()}
            style={{
              backgroundColor: '#636b2f',
              color: 'white',
              padding: isMobile ? '14px 20px' : '12px 30px',
              fontSize: isMobile ? '14px' : '16px',
              textTransform: 'none',
              width: '100%',
              transition: 'background-color 0.2s ease',
              '&:hover': {
                backgroundColor: '#525a27'
              }
            }}
          >
            Sign In
          </Button>
        </Box>

        <Box style={{ marginTop: '30px', padding: '15px', backgroundColor: '#F4F5F0', borderRadius: '8px', border: '1px solid #D4D6C8' }}>
          <Typography variant="caption" style={{ color: '#636b2f', display: 'block', fontWeight: 'bold' }}>
            Admin Access Only
          </Typography>
          <Typography variant="body2" style={{ marginTop: '5px', color: '#718096', fontSize: '14px' }}>
            Contact your administrator if you need access to this system.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminLogin; 