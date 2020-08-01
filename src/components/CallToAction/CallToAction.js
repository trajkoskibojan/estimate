import React from 'react';

import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  Container,
} from '@material-ui/core';

import background from '../../assets/img/background.jpg';
import mobileBackground from '../../assets/img/mobileBackground.jpg';
import { Link } from 'react-router-dom';
import ButtonArrow from 'shared/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  actionBtnEstimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    background: theme.palette.common.arcOrange,
    height: 80,
    width: 205,
    fontSize: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
}));

export const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme(); 
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box component="section" className={classes.background}>
      <Container style={{ height: '100%' }}>
        <Grid
          container
          direction={matchesSM ? 'column' : 'row'}
          alignItems="center"
          justify="center"
          style={{ height: '100%' }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems={matchesSM ? 'center' : undefined}
            md
          >
            <Box align={matchesSM ? 'center' : undefined}>
              <Typography variant="h2">Simple Software.</Typography>
              <Typography variant="h2">Revolutionary Results.</Typography>
              <Typography variant="subtitle2">
                Take advantage of the 21st Century.
              </Typography>
            </Box>
            <Box mt=".5rem">
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(2);
                }}
              >
                <Box component="span">Learn More</Box>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.arcBlue}
                />
              </Button>
            </Box>
          </Grid>
          <Grid item container justify={matchesSM ? 'center' : 'flex-end'} md>
            <Button
              className={classes.actionBtnEstimate}
              component={Link}
              to="/estimate"
              onClick={() => props.setValue(5)}
            >
              Free Estimate
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default CallToAction;
