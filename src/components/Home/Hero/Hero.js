import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import animationData from '../../../animations/landinganimation/data';
import ButtonArrow from '../../../shared/ButtonArrow';
import {
  Grid,
  Button,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50rem,',
    minWidth: '21rem',
    marginRight: '-3.625rem',
    marginLeft: '10%',
    [theme.breakpoints.down('md')]: {
      marginRight: '-1.6rem',
      marginLeft: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      maxWidth: '30rem',
    },
  },
  heroTextContainer: {
    minWidth: '21.5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '3rem',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    background: theme.palette.common.arcOrange,
    borderRadius: '50px',
    marginRight: '2rem',
    width: 145,
    '&:hover': {
      background: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
}));

const Hero = (props) => {
  const classes = useStyles(props);
  const theme = useTheme(props);
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box component="section" py={matchesSM ? 6 : 9}>
      <Grid container alignItems="center">
        <Grid item sm className={classes.heroTextContainer}>
          <Typography variant="h2" align="center" gutterBottom>
            Bringing West Coast Tehnolgy <br />
            to the Midwest
          </Typography>
          <Grid container justify="center">
            <Grid item>
              <Button
                component={Link}
                to="/estimate"
                variant="contained"
                className={classes.estimateButton}
                onClick={() => props.setValue(5)}
              >
                Free estimate
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButtonHero}
                onClick={() => props.setValue(2)}
              >
                <Box component="span" mr={1}>
                  Learn More
                </Box>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.arcBlue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm className={classes.animation}>
          <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;