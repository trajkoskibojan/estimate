import React from 'react';

import { makeStyles } from '@material-ui/styles';
import mobileAppsIcon from 'assets/img/mobileIcon.svg';
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

const AppDevelopment = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box component="section" py={matchesSM ? 6 : 9}>
      <Grid
        container
        justify={matchesMD ? 'center' : 'flex-end'}
        alignItems={matchesMD ? 'center' : undefined}
      >
        <Grid
          container
          item
          direction="column"
          justify="space-around"
          alignItems="flex-end"
          md={8}
        >
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
              width: matchesMD ? '100%' : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
              width: matchesMD ? '100%' : undefined,
            }}
          >
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app a.
              {matchesMD ? null : <br />}with either mobile platform{' '}
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
                props.setSelectedIndex(2);
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
          md={4}
          style={{
            textAlign: matchesMD ? 'center' : 'right',
          }}
        >
          <img
            style={{
              width: matchesMD ? '85%' : undefined,
            }}
            alt="custom software icon"
            src={mobileAppsIcon}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppDevelopment;
