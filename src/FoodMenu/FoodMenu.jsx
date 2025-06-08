import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Drinks from './Drinks/Drinks';
import Lunch from './Lunch/Lunch';
import Brunch from './Brunch/Brunch';
import menuRoxy from '../images/menu-roxy-logo.png';
import Dinner from './Dinner/Dinner';
import Specials from './Specials/Specials';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFEFB',
    border: '1px solid #E8DDD4',
    borderRadius: '12px',
    margin: '20px 40px',
    boxShadow: '0 6px 24px rgba(107, 91, 115, 0.12)',
    overflow: 'hidden',
    '& .MuiTabs-root': {
      minHeight: '60px',
    },
    '& .MuiTabs-flexContainer': {
      height: '60px',
    },
    '& .MuiTab-root': {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#6B5B73',
      textTransform: 'none',
      minHeight: '60px',
      padding: '12px 24px',
      transition: 'all 0.2s ease',
      borderRight: '1px solid #F0E8DA',
      '&:last-child': {
        borderRight: 'none',
      },
      '&:hover': {
        backgroundColor: '#FBF9F6',
        color: '#9CAF88',
      },
      '&.Mui-selected': {
        backgroundColor: '#9CAF88',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#8B6F47',
        },
      },
    },
    '& .MuiTabs-indicator': {
      display: 'none', // Hide the default indicator since we're using background colors
    },
    [theme.breakpoints.down('md')]: {
      margin: '20px 20px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  desktopTabs: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileTabs: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      backgroundColor: '#FFFEFB',
      border: '1px solid #E8DDD4',
      borderRadius: '8px',
      margin: '10px 15px',
      boxShadow: '0 4px 20px rgba(107, 91, 115, 0.08)',
    },
  },
  mobileTabButton: {
    width: '100%',
    padding: '15px 20px',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #F0E8DA',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#6B5B73',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: '#FBF9F6',
      color: '#9CAF88',
    },
  },
  mobileTabButtonActive: {
    backgroundColor: '#9CAF88',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#8B6F47',
      color: '#fff',
    },
  },
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = useState(1);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const showTab = () => {

    if (tab === 1) {
      return (
        <Specials />
      )
    } else if (tab === 2) {
      return (
        <Dinner />
      )
    } else if (tab === 3) {
      return (
        <Brunch />
      )
    } else if (tab === 4) {
      return (
        <Lunch />
      )
    } else if (tab === 5) {
      return (
        <Drinks />
      )
    }
  }

  const menuTabs = [
    { id: 1, label: "Specials" },
    { id: 2, label: "Dinner" },
    { id: 3, label: "Brunch" },
    { id: 4, label: "Lunch" },
    { id: 5, label: "Desserts and Drinks" }
  ];

  return (
    <div id="menu">
      <header className="App-header">
        <img src={menuRoxy} className="shop-logo" alt="logo" />
      </header>

      <p>Menu is subject to change</p>

      {/* Desktop Tabs */}
      <Paper className={`${classes.root} ${classes.desktopTabs}`}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab onClick={() => setTab(1)} label="Specials" />
          <Tab onClick={() => setTab(2)} label="Dinner" />
          <Tab onClick={() => setTab(3)} label="Brunch" />
          <Tab onClick={() => setTab(4)} label="Lunch" />
          <Tab onClick={() => setTab(5)} label="Desserts and Drinks" />
        </Tabs>
      </Paper>

      {/* Mobile Tabs */}
      <div className={classes.mobileTabs}>
        {menuTabs.map((menuTab) => (
          <button
            key={menuTab.id}
            className={`${classes.mobileTabButton} ${
              tab === menuTab.id ? classes.mobileTabButtonActive : ''
            }`}
            onClick={() => {
              setTab(menuTab.id);
              setValue(menuTab.id - 1);
            }}
          >
            {menuTab.label}
          </button>
        ))}
      </div>

      {<h1>{showTab()}</h1>}
    </div>

  );
}