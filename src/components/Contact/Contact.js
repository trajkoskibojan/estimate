import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
  Dialog,
  Slide,
  DialogContent,
  Snackbar,
} from '@material-ui/core';

import CallToAction from 'components/CallToAction/CallToAction';

import phoneIcon from '../../assets/img/phone.svg';
import emailIcon from '../../assets/img/email.svg';
import airplane from '../../assets/img/send.svg';

const useStyles = makeStyles((theme) => ({
  message: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.arcOrange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },
  },
  widthBox: {
    width: '25rem',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      width: '18rem',
      margin: '0 auto',
    },
  },
}));

export const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const [alert, setAlert] = useState({ open: false, color: '' });
  const [alertMessage, setAlertMesssage] = useState('');

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper('Invalid phone');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    setAlert({ open: true, color: '#4BB543' });
    setAlertMesssage('Message sent successfully!');
    setOpen(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const form = (
    <Box className={classes.widthBox}>
      <Grid item style={{ marginBottom: '0.5em' }}>
        <TextField
          id="name"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item style={{ marginBottom: '0.5em' }}>
        <TextField
          id="email"
          label="Email"
          error={emailHelper.length > 0}
          helperText={emailHelper}
          fullWidth
          value={email}
          onChange={onChange}
        />
      </Grid>
      <Grid item style={{ marginBottom: '0.5em' }}>
        <TextField
          id="phone"
          label="Phone"
          error={phoneHelper.length > 0}
          helperText={phoneHelper}
          fullWidth
          value={phone}
          onChange={onChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id="text"
          InputProps={{ disableUnderline: true }}
          className={classes.message}
          multiline
          rows={10}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Grid>
      <Grid item container justify="center" style={{ marginTop: '2em' }}>
        <Button
          style={{ fontWeight: 300, display: open ? 'block' : 'none' }}
          color="primary"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          disabled={
            name.length === 0 ||
            message.length === 0 ||
            phoneHelper.length !== 0 ||
            emailHelper.length !== 0
          }
          variant="contained"
          className={classes.sendButton}
          onClick={open ? () => handleSubmit() : () => setOpen(true)}
          endIcon={
            <img
              src={airplane}
              alt="paper airplane"
              style={{ marginLeft: '.5em' }}
            />
          }
        >
          Send Message
        </Button>
      </Grid>
    </Box>
  );

  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        alignItems={matchesMD ? 'center' : undefined}
        style={{ padding: '3rem 1.5rem' }}
        lg={4}
      >
        <Grid item style={{ textAlign: matchesMD ? 'center' : undefined }}>
          <Box className={classes.widthBox}>
            <Typography variant="h2">Contact Us</Typography>
            <Typography variant="body1" color="primary">
              We're waitting
            </Typography>
          </Box>
        </Grid>
        <Box py={4} className={classes.widthBox}>
          <Grid item container spacing={1}>
            <Grid item>
              <img src={phoneIcon} alt="phone" />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                color="primary"
                style={{ fontSize: '.9rem' }}
              >
                <a
                  href="tel:5555555555"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  (555) 555-5555
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={1} alignItems="baseline">
            <Grid item>
              <img src={emailIcon} alt="email" />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                color="primary"
                style={{ fontSize: '.9rem' }}
              >
                <a
                  href="mailto:bojan.trajkoski.mk@gmail.com"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  bojan.trajkoski.mk@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {form}
        <Dialog
          style={{ zIndex: 2000 }}
          aria-labelledby="dialog"
          TransitionComponent={Slide}
          fullWidth
          maxWidth="sm"
          open={open}
          onClose={() => setOpen(false)}
        >
          <DialogContent style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Typography align="center" variant="h4" gutterBottom>
              Confirm Message
            </Typography>
            {form}
          </DialogContent>
        </Dialog>
      </Grid>
      <Snackbar
        style={{ zIndex: 2001 }}
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
          },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={alertMessage}
        autoHideDuration={3000}
        onClose={() => setAlert(false)}
      />
      <Grid container item lg={8}>
        <CallToAction />
          
      </Grid>
    </Grid>
  );
};
export default Contact;