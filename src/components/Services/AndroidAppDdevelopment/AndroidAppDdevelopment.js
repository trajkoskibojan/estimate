import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  Hidden,
  IconButton,
} from '@material-ui/core';

import backArrow from '../../../assets/img/backArrow.svg';
import forwardArrow from '../../../assets/img/forwardArrow.svg';
import swiss from '../../../assets/img/swissKnife.svg';
import access from '../../../assets/img/extendAccess.svg';
import engagement from '../../../assets/img/increaseEngagement.svg';

import integrationAnimation from '../../../animations/integrationAnimation/data.json';

import CallToAction from '../../CallToAction/CallToAction';
import Lottie from 'react-lottie';

export const AndroidAppDdevelopment = (props) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Fragment>
      <Container>
        <Box component="section" pt={matchesSM ? 3 : 6} pb={matchesSM ? 6 : 9}>
          <Grid
            container
            direction="column"
            alignItems={matchesMD ? 'center' : undefined}
          >
            <Grid
              item
              container
              style={{ margin: '1rem -1.2rem' }}
              justify={matchesMD ? 'center' : undefined}
            >
              <Hidden mdDown>
                <IconButton
                  component={Link}
                  to="/customsoftware"
                  style={{ padding: '20px' }}
                  onClick={() => props.setSelectedIndex(1)}
                >
                  <img src={backArrow} alt="backArrow" />
                </IconButton>
              </Hidden>
              <Typography
                variant="h2"
                style={{ textAlign: matchesMD ? 'center' : undefined }}
              >
                iOS/Android App Development
              </Typography>
              <Hidden mdDown>
                <IconButton
                  component={Link}
                  to="/websites"
                  style={{ padding: '20px' }}
                  onClick={() => props.setSelectedIndex(3)}
                >
                  <img src={forwardArrow} alt="forwardArrow" />
                </IconButton>
              </Hidden>
            </Grid>
            <Grid
              item
              style={{
                maxWidth: '45rem',
                textAlign: matchesMD ? 'center' : undefined,
              }}
            >
              <Typography paragraph variant="body1">
                Mobile apps allow you to take your tools on the go.
              </Typography>
              <Typography paragraph variant="body1">
                Whether you want an app for your customers, employees, or
                yourself, we can build cross-platform native solutions for any
                part of your business process. This opens you up to a whole new
                world of possibilities by taking advantage of phone features
                like the camera, GPS, push notifications, and more.
              </Typography>
              <Typography paragraph variant="body1">
                Convenience. Connection.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" py={matchesSM ? 6 : 9}>
          <Grid
            container
            justify={matchesSM ? 'center' : undefined}
            style={{ textAlign: matchesSM ? 'center' : undefined }}
            spacing={5}
          >
            <Grid item md>
              <Typography variant="h4" gutterBottom>
                Integration
              </Typography>
              <Typography paragraph variant="body1">
                Our technology enables an innate interconnection between web and
                mobile applications, putting everything you need right in one
                convenient place.
              </Typography>
              <Typography variant="body1">
                This allows you to extend your reach, reinvent interactions, and
                develop a stronger relationship with your users than ever
                before.
              </Typography>
            </Grid>
            <Grid item container md alignItems="center">
              <Lottie
                options={defaultOptions}
                isStopped={true}
                style={{ maxWidth: '20em' }}
              />
            </Grid>
            <Grid
              item
              md
              style={{
                paddingTop: matchesSM ? '2rem' : 0,
                textAlign: matchesSM ? 'center' : 'right',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Simultaneous Platform Support
              </Typography>
              <Typography paragraph variant="body1">
                Our cutting-edge development process allows us to create apps
                for iPhone, Android, and tablets — all at the same time.
              </Typography>
              <Typography paragraph variant="body1">
                This significantly reduces costs and creates a more unified
                brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" py={matchesSM ? 6 : 9}>
          <Grid container justify="center" spacing={10}>
            <Grid item md sm={12} style={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Extend Functionality
              </Typography>
              <img src={swiss} alt="bulb" />
            </Grid>
            <Grid item md sm={12} style={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Extend Access
              </Typography>
              <img src={access} alt="bulb" />
            </Grid>
            <Grid item md sm={12} style={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Increase Engagement
              </Typography>
              <img src={engagement} alt="bulb" />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <CallToAction />
    </Fragment>
  );
};
export default AndroidAppDdevelopment;
