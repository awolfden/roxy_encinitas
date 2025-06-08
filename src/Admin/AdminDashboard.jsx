import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Box,
  Button,
  Avatar
} from '@material-ui/core';
import { 
  Restaurant, 
  PhotoLibrary, 
  Event, 
  Settings,
  ExitToApp 
} from '@material-ui/icons';
import { useAuth } from './AuthProvider';
import MenuImageManager from './components/MenuImageManager';

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [activeSection, setActiveSection] = useState('menu-images');

  const menuItems = [
    { id: 'menu-images', label: 'Menu Images', icon: <PhotoLibrary /> },
    { id: 'menu-management', label: 'Menu Management', icon: <Restaurant /> },
    { id: 'events', label: 'Events', icon: <Event /> },
    { id: 'settings', label: 'Settings', icon: <Settings /> }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'menu-images':
        return <MenuImageManager />;
      case 'menu-management':
        return (
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Menu Management</Typography>
            <Typography>Coming soon - manage menu items and pricing</Typography>
          </Paper>
        );
      case 'events':
        return (
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Events Management</Typography>
            <Typography>Coming soon - manage special events and promotions</Typography>
          </Paper>
        );
      case 'settings':
        return (
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Settings</Typography>
            <Typography>Coming soon - manage restaurant settings</Typography>
          </Paper>
        );
      default:
        return <MenuImageManager />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFEFB' }}>
      {/* Top Navigation */}
      <AppBar position="static" style={{ backgroundColor: '#8B4513' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Roxy Admin Dashboard
          </Typography>
          
          {user && (
            <Box style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Avatar style={{ backgroundColor: '#6B5B73', width: 32, height: 32 }}>
                {user.firstName ? user.firstName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
              </Avatar>
              
              <Box style={{ textAlign: 'right' }}>
                <Typography variant="body2" style={{ color: 'white' }}>
                  {user.firstName || user.email}
                </Typography>
                <Typography variant="caption" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Administrator
                </Typography>
              </Box>
              
              <Button
                onClick={() => signOut()}
                startIcon={<ExitToApp />}
                style={{ 
                  color: 'white', 
                  textTransform: 'none',
                  marginLeft: '10px'
                }}
              >
                Sign Out
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" style={{ padding: '20px 0' }}>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper elevation={2}>
              <List component="nav">
                {menuItems.map((item) => (
                  <ListItem
                    key={item.id}
                    button
                    selected={activeSection === item.id}
                    onClick={() => setActiveSection(item.id)}
                    style={{
                      backgroundColor: activeSection === item.id ? '#F5F5F5' : 'transparent',
                      borderLeft: activeSection === item.id ? '4px solid #8B4513' : 'none'
                    }}
                  >
                    <ListItemIcon style={{ color: '#8B4513' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.label}
                      style={{ 
                        color: activeSection === item.id ? '#8B4513' : '#333' 
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            {renderContent()}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdminDashboard; 