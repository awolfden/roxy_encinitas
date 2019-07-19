import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SimpleMenu from './SimpleMenu/SimpleMenu';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  // Injected by the documentation to work in an iframe.
  window: PropTypes.func,
};



export default function HideAppBar(props) {
  
  return (
    <div id="navigation">
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar id="toolbar">
                <SimpleMenu/>
                <Typography variant="h6"><a href="#home" style={{ textDecoration: 'none' }}>Roxy Encinitas</a></Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      
    </div>
  );
}
