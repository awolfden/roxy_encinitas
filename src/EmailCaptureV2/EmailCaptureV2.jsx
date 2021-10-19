
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDiv: {
    height: 0
  },
  modalButton: {
    
    height: '0px',
    border: 'none'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '15px'
  },
  containerRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [requiredField, setRequiredField] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => handleOpen(), 5000)
  }, []);
  
  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }
  const handleChangeLName = (e) => {
    e.preventDefault();
    setLName(e.target.value)
  }
  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }

const handleSubmit = async (formData, e) => {
    e.preventDefault();
    // console.log(JSON.stringify(formData));
    
    if (!name || !lname || !email) {
      setRequiredField(true);
      return;
    }
    handleClose();
    try {
        formData.site = 'encinitas';
        const response = await fetch(`https://broadway-roxy-mailchimp-server.herokuapp.com/users/newuser`, {        
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status !== 200){
          throw(Error(response.statusText));
        }

        const parsedResponse = await response.json();
        console.log(parsedResponse);
    } catch (err) {
        console.log(err);
    }
}

  return (
    <div className={classes.modalDiv}>
      <button type="button" className={classes.modalButton} onClick={handleOpen}></button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.containerRight}>
              <div onClick={handleClose}><Button>x</Button></div>
            </div>
            <div id="emailForm" style={{display:'flex', justifyContent: 'center', marginBottom: '35px'}}>
                <div style={{width: '65%'}}>
                <h2 style={{textAlign: 'center'}}>Join the mailing list for 10% off your next in person order!</h2>
                <form 
                    id={'form'}
                    style={{display: 'flex', flexDirection: 'column'}}
                    noValidate autoComplete="off"
                    onSubmit={handleSubmit.bind(null, {"fname": name, "lname": lname, "email": email})}
                    >
                    <div style={{display: 'flex'}}>
                      <TextField
                          required={requiredField ? true : false}
                          id="outlined-name"
                          label="First Name"
                          className={classes.textField}
                          value={name}
                          onChange={handleChangeName}
                          margin="normal"
                          variant="outlined"
                          name="name"
                      />
                      <TextField
                          required={requiredField ? true : false}
                          id="outlined-name"
                          label="Last Name"
                          className={classes.textField}
                          value={lname}
                          onChange={handleChangeLName}
                          margin="normal"
                          variant="outlined"
                          name="lname"
                      />
                    </div>
                    <TextField
                        required={requiredField ? true : false}
                        id="outlined-name"
                        label="Email"
                        className={classes.textField}
                        value={email}
                        onChange={handleChangeEmail}
                        margin="normal"
                        variant="outlined"
                        name="email"
                    />
                    <Button type="submit" variant="outlined" className={classes.button}>
                        Submit
                    </Button>
                </form>
                </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}