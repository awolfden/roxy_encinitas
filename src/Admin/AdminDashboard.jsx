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
  Avatar,
  Drawer,
  IconButton,
  Hidden,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import { 
  Restaurant, 
  PhotoLibrary, 
  Event, 
  Settings,
  ExitToApp,
  Menu as MenuIcon
} from '@material-ui/icons';
import { useAuth } from './AuthProvider';
import MenuImageManager from './components/MenuImageManager';

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [activeSection, setActiveSection] = useState('menu-images');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { id: 'menu-images', label: 'Menu Images', icon: <PhotoLibrary /> },
    { id: 'menu-management', label: 'Menu Management', icon: <Restaurant /> },
    { id: 'events', label: 'Events', icon: <Event /> },
    { id: 'settings', label: 'Settings', icon: <Settings /> }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    if (isMobile) {
      setMobileOpen(false); // Close mobile drawer when item is selected
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'menu-images':
        return <MenuImageManager />;
      case 'menu-management':
        return (
          <Paper style={{ 
            padding: '48px 40px', 
            textAlign: 'center',
            borderRadius: '12px',
            backgroundColor: '#FAFAFA',
            border: '1px solid #E2E8F0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <Typography variant="h5" style={{ color: '#4A5568', marginBottom: '16px', fontWeight: '600' }}>
              Menu Management
            </Typography>
            <Typography style={{ color: '#718096', fontSize: '16px' }}>
              Coming soon - manage menu items and pricing
            </Typography>
          </Paper>
        );
      case 'events':
        return (
          <Paper style={{ 
            padding: '48px 40px', 
            textAlign: 'center',
            borderRadius: '12px',
            backgroundColor: '#FAFAFA',
            border: '1px solid #E2E8F0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <Typography variant="h5" style={{ color: '#4A5568', marginBottom: '16px', fontWeight: '600' }}>
              Events Management
            </Typography>
            <Typography style={{ color: '#718096', fontSize: '16px' }}>
              Coming soon - manage special events and promotions
            </Typography>
          </Paper>
        );
      case 'settings':
        return (
          <Paper style={{ 
            padding: '48px 40px', 
            textAlign: 'center',
            borderRadius: '12px',
            backgroundColor: '#FAFAFA',
            border: '1px solid #E2E8F0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <Typography variant="h5" style={{ color: '#4A5568', marginBottom: '16px', fontWeight: '600' }}>
              Settings
            </Typography>
            <Typography style={{ color: '#718096', fontSize: '16px' }}>
              Coming soon - manage restaurant settings
            </Typography>
          </Paper>
        );
      default:
        return <MenuImageManager />;
    }
  };

  const sidebarContent = (
    <List component="nav" style={{ padding: '0 12px' }}>
      {menuItems.map((item) => (
        <ListItem
          key={item.id}
          button
          selected={activeSection === item.id}
          onClick={() => handleMenuClick(item.id)}
          style={{
            backgroundColor: activeSection === item.id ? '#EDF2F7' : 'transparent',
            borderRadius: '8px',
            marginBottom: '4px',
            padding: '12px 16px',
            border: activeSection === item.id ? '2px solid #636b2f' : '2px solid transparent',
            transition: 'all 0.2s ease'
          }}
        >
          <ListItemIcon style={{ 
            color: activeSection === item.id ? '#636b2f' : '#718096',
            minWidth: '40px'
          }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.label}
            style={{ 
              color: activeSection === item.id ? '#636b2f' : '#4A5568'
            }}
            primaryTypographyProps={{
              fontSize: '14px',
              fontWeight: activeSection === item.id ? 600 : 500
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F5F6F7' }}>
      {/* Desktop Sidebar */}
      <Hidden mdDown>
        <div style={{
          width: '280px',
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid #E2E8F0',
          boxShadow: '2px 0 4px rgba(0,0,0,0.1)',
          position: 'fixed',
          height: '100vh',
          zIndex: 1200
        }}>
          {/* Sidebar Header */}
          <div style={{
            padding: '24px 20px',
            borderBottom: '1px solid #E2E8F0',
            backgroundColor: '#4A5568'
          }}>
            <Typography variant="h6" style={{ 
              color: 'white',
              fontWeight: 600,
              fontSize: '18px'
            }}>
              Roxy Admin
            </Typography>
            <Typography variant="body2" style={{ 
              color: 'rgba(255,255,255,0.8)',
              fontSize: '14px',
              marginTop: '4px'
            }}>
              Restaurant Management
            </Typography>
          </div>
          
          {/* Sidebar Navigation */}
          <div style={{ padding: '20px 0' }}>
            {sidebarContent}
          </div>
          
          {/* User Info in Sidebar */}
          {user && (
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              padding: '20px',
              borderTop: '1px solid #E2E8F0',
              backgroundColor: '#FAFAFA'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <Avatar style={{ backgroundColor: '#718096', width: 36, height: 36 }}>
                  {user.firstName ? user.firstName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                </Avatar>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="body2" style={{ 
                    color: '#4A5568',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {user.firstName || user.email}
                  </Typography>
                  <Typography variant="caption" style={{ color: '#718096' }}>
                    Administrator
                  </Typography>
                </div>
              </div>
              <Button
                onClick={() => signOut()}
                startIcon={<ExitToApp />}
                style={{ 
                  color: '#718096',
                  textTransform: 'none',
                  width: '100%',
                  justifyContent: 'flex-start',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#EDF2F7'
                  }
                }}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </Hidden>

      {/* Main Content Area */}
      <div style={{ 
        flex: 1,
        marginLeft: !isMobile ? '280px' : '0',
        minHeight: '100vh'
      }}>
                {/* Top Navigation - Mobile Only */}
        <Hidden lgUp>
          <AppBar position="static" style={{ backgroundColor: '#4A5568' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                style={{ marginRight: '10px' }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: 1, fontSize: '18px' }}>
                Roxy Admin
              </Typography>
              
              {user && (
                <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Avatar style={{ backgroundColor: '#718096', width: 32, height: 32 }}>
                    {user.firstName ? user.firstName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                  </Avatar>
                  
                  <Button
                    onClick={() => signOut()}
                    style={{ 
                      color: 'white', 
                      textTransform: 'none',
                      minWidth: '40px',
                      padding: '8px'
                    }}
                  >
                    <ExitToApp />
                  </Button>
                </Box>
              )}
            </Toolbar>
          </AppBar>
        </Hidden>

              {/* Mobile Navigation Drawer */}
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          style={{
            display: isMobile ? 'block' : 'none',
          }}
          PaperProps={{
            style: { width: 250 }
          }}
        >
          <div style={{ padding: '20px 0' }}>
            <Typography variant="h6" style={{ padding: '0 20px', color: '#4A5568', marginBottom: '20px' }}>
              Navigation
            </Typography>
            {sidebarContent}
          </div>
        </Drawer>

        {/* Main Content */}
        <Container maxWidth="lg" style={{ 
          padding: isMobile ? '20px 16px' : '40px 48px',
          width: '100%'
        }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {renderContent()}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default AdminDashboard; 