import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EventCal from './EventCal/EventCal';
import MusicCal from './MusicCal/MusicCal';





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
                <MusicCal/>
            )
        } else if(tab === 2){
            return(
                <EventCal/>
            )
        }
    }
   
  return (
    <div id="calendars">
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab onClick={() => setTab(1)} label="Music" />
                <Tab onClick={() => setTab(2)} label="Events & Specials" />
            </Tabs>
        </Paper>
        {<h1>{showTab()}</h1>}
    </div>
    
  );
}