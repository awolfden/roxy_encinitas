import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div id="dropMenu">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img src={require("../../images/gramophone_logo_white.png")} alt="gramophone"></img>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href="#home" style={{ textDecoration: 'none', color: 'black' }}>Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#calendars" style={{ textDecoration: 'none', color: 'black' }}>Calendar</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://www.toasttab.com/the-roxy-encinitas-517-s-coast-hwy-101" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>Online Shop</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#menu" style={{ textDecoration: 'none', color: 'black' }}>Menu</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://egift.technology/Main.aspx?key=theroxy" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>Gift Cards</a></MenuItem>
        {/* <MenuItem onClick={handleClose}><a href="#insta" style={{ textDecoration: 'none', color: 'black' }}>Instagram</a></MenuItem> */}
        <MenuItem onClick={handleClose}><a href="https://www.yelp.com/reservations/the-roxy-encinitas-encinitas-2?from_reserve_now=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>Reservations</a></MenuItem>
      </Menu>
    </div>
  );
}