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
    backgroundColor: '#FFFEFB',
    border: '1px solid #E8DDD4',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(107, 91, 115, 0.15)',
    padding: theme.spacing(3, 4, 4),
    color: '#4A4A4A',
    maxWidth: '500px',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      maxWidth: 'calc(100vw - 20px)',
      padding: theme.spacing(2, 2, 3),
      margin: '10px',
      borderRadius: '8px',
    },
  },
  containerRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(1)
  },
  closeButton: {
    color: '#6B5B73',
    minWidth: '32px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'rgba(107, 91, 115, 0.1)',
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#FBF9F6',
      borderRadius: '8px',
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#9CAF88',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#9CAF88',
      },
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#9CAF88',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: theme.spacing(1),
      '& .MuiOutlinedInput-root': {
        fontSize: '16px', // Prevents zoom on iOS
      },
      '& .MuiInputLabel-root': {
        fontSize: '16px',
      },
    },
  },
  formContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    marginBottom: '35px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
    },
  },
  formContent: {
    width: '65%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    color: '#6B5B73',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    lineHeight: 1.3,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      marginBottom: theme.spacing(2),
      lineHeight: 1.4,
    },
  },
  form: {
    display: 'flex', 
    flexDirection: 'column'
  },
  nameFields: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  submitButton: {
    marginTop: theme.spacing(3),
    backgroundColor: '#9CAF88',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: theme.spacing(1.5, 3),
    border: '1px solid #9CAF88',
    '&:hover': {
      backgroundColor: '#8B6F47',
      borderColor: '#8B6F47',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(1.5, 2),
      fontSize: '16px',
      width: '100%',
    },
  }
}));

export default function EmailCapture() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: ''
  });
  const [showValidation, setShowValidation] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(handleOpen, 5000);
    return () => clearTimeout(timer);
  }, []);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = () => {
    return formData.fname.trim() && formData.lname.trim() && formData.email.trim();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!isFormValid()) {
      setShowValidation(true);
      return;
    }

    handleClose();
    
    try {
      const payload = { ...formData };
      const response = await fetch('/.netlify/functions/subscribe', {        
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      console.log('Email subscription successful:', result);
    } catch (error) {
      console.error('Email subscription failed:', error);
    }
  };

  return (
    <div className={classes.modalDiv}>
      <button 
        type="button" 
        className={classes.modalButton} 
        onClick={handleOpen}
        aria-hidden="true"
      />
      <Modal
        aria-labelledby="email-capture-title"
        aria-describedby="email-capture-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.containerRight}>
              <Button 
                onClick={handleClose} 
                aria-label="Close modal"
                className={classes.closeButton}
              >
                ×
              </Button>
            </div>
            
            <div className={classes.formContainer}>
              <div className={classes.formContent}>
                <h2 id="email-capture-title" className={classes.formTitle}>
                  Join the mailing list for 10% off your next in person order!
                </h2>
                
                <form 
                  className={classes.form}
                  noValidate 
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className={classes.nameFields}>
                    <TextField
                      required={showValidation}
                      label="First Name"
                      className={classes.textField}
                      value={formData.fname}
                      onChange={handleInputChange}
                      margin="normal"
                      variant="outlined"
                      name="fname"
                      aria-describedby="email-capture-description"
                    />
                    <TextField
                      required={showValidation}
                      label="Last Name"
                      className={classes.textField}
                      value={formData.lname}
                      onChange={handleInputChange}
                      margin="normal"
                      variant="outlined"
                      name="lname"
                    />
                  </div>
                  
                  <TextField
                    required={showValidation}
                    label="Email"
                    type="email"
                    className={classes.textField}
                    value={formData.email}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                    name="email"
                  />
                  
                  <Button 
                    type="submit" 
                    variant="outlined" 
                    className={classes.submitButton}
                  >
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