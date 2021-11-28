import React, {useState} from 'react';
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



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = useState(1);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const showTab = () => {
    
        if(tab === 1){
            return(
                <Dinner/>
            )
        } else if(tab === 2){
            return(
                <Brunch/>
            )
        } else if(tab === 3){
            return(
                <Lunch/>
            )
        } else if(tab === 4){
          return(
              <Drinks/>
          )
      }
    }
   
  return (
    <div id="menu">
      <header className="App-header">
        <img src={menuRoxy} className="shop-logo" alt="logo" />
      </header>
      
      <div className="flex-container">
        {/* <a href="https://order.online/store/the-roxy-encinitas-931020" target="_blank" alt="Order Food Delivery with DoorDash" title="Order Food Delivery with DoorDash" style={{textDecoration: "none"}}>
            <div style={{width:180, height:80, backgroundSize: 'contain', margin: "15px 0px 5px 0px", backgroundImage: "url('https://cdn.doordash.com/media/button/button_white_xl.svg')", color:"transparent"}}>Order Food Delivery with DoorDash</div>
        </a> */}
        <Button onClick={() => { window.open("https://www.toasttab.com/the-roxy-encinitas-517-s-coast-hwy-101", "_blank") }} variant="contained" color="secondary" className='toastButton'>
          Order Online With Toast!
        </Button>
      </div>

      <p>Menu is subject to change</p>

        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab onClick={() => setTab(1)} label="Dinner" />
                <Tab onClick={() => setTab(2)} label="Brunch" />
                <Tab onClick={() => setTab(3)} label="Lunch" />
                <Tab onClick={() => setTab(4)} label="Desserts and Drinks" /> 
            </Tabs>
        </Paper>
        {<h1>{showTab()}</h1>}
    </div>
    
  );
}