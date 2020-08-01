import React from 'react';

import { makeStyles } from '@material-ui/styles';
import websitesIcon from 'assets/img/websiteIcon.svg';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ButtonArrow from 'shared/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    marginTop: '.5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

const WebsiteDevelopment = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box component="section" py={matchesSM ? 6 : 9}>
      <Grid
        container
        justify={matchesMD ? 'center' : 'flex-start'}
        alignItems={matchesMD ? 'center' : undefined}
      >
        <Grid
          container
          item
          direction="column"
          justify="space-around"
          lg
          md={8}
        >
          <Grid item style={{ textAlign: matchesMD ? 'center' : undefined }}>
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1">
              Reach More. Discover More. Sell More.
            </Typography>
          </Grid>
          <Grid
            item
            style={{ textAlign: matchesMD ? 'center' : undefined }}
          >
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed{' '}
              <Box
                component="span"
                fontFamily="Pacifico"
                color={theme.palette.common.arcOrange}
              >
                celebration.
              </Box>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <Box component="span">Learn More</Box>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.arcBlue}
              />
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          lg
          md={4}
          style={{ textAlign: matchesMD ? 'center' : undefined }}
        >
          <img alt="custom software icon" src={websitesIcon} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WebsiteDevelopment;
