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
import analytics from '../../../assets/img/analytics.svg';
import seo from '../../../assets/img/seo.svg';
import outreach from '../../../assets/img/outreach.svg';
import ecommerce from '../../../assets/img/ecommerce.svg';

import CallToAction from '../../CallToAction/CallToAction';

export const WebDevelopment = (props) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery('(max-width: 750px)');
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery('(max-width: 855px)');

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
                  to="/services"
                  style={{ padding: '20px' }}
                  onClick={() => props.setSelectedIndex(0)}
                >
                  <img src={backArrow} alt="backArrow" />
                </IconButton>
              </Hidden>
              <Typography
                variant="h2"
                style={{ textAlign: matchesMD ? 'center' : undefined }}
              >
                Website Development
              </Typography>
              <Hidden mdDown>
                <IconButton
                  component={Link}
                  to="/mobileapps"
                  style={{ padding: '20px' }}
                  onClick={() => props.setSelectedIndex(2)}
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
                Having a website is a necessity in today’s business world. They
                give you one central, public location to let people know who you
                are, what you do, and why you’re the best at it.
              </Typography>
              <Typography paragraph variant="body1">
                From simply having your hours posted to having a full fledged
                online store, making yourself as accessible as possible to users
                online drives growth and enables you to reach new customers.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" py={matchesSM ? 6 : 9}>
          <Grid
            container
            alignItems="center"
            justify={matchesMD ? 'center' : undefined}
            spacing={3}
          >
            <Grid item style={{ width: matchesXS ? '17rem' : '22rem'}}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ textAlign: matchesMD ? 'center' : undefined }}
              >
                Analitycs
              </Typography>
              <img src={analytics} alt="analytics" width="100%" height="100%" />
            </Grid>
            <Grid item style={{ maxWidth: '30rem', textAlign: matchesMD ? 'center' : undefined }}>
              <Typography variant="body1">
                Knowledge is power, and data is 21st Century gold. Analyzing
                this data can reveal hidden patterns and trends in your
                business, empowering you to make smarter decisions with
                measurable effects.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" py={matchesSM ? 6 : 9}>
          <Grid
            container
            alignItems="center"
            justify={matchesMD ? 'center' : 'flex-end'}
            spacing={3}
          >
            <Grid item style={{ width: matchesXS ? '17rem' : '22rem' }}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ textAlign: matchesMD ? 'center' : undefined}}
              >
                E-Commerce
              </Typography>
              <img src={ecommerce} alt="analytics" width="100%" height="100%" />
            </Grid>
            <Grid item style={{ maxWidth: '30rem', textAlign: matchesMD ? 'center' : undefined }}>
              <Typography variant="body1">
                It’s no secret that people like to shop online.
              </Typography>
              <Typography variant="body1">
                In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                time for your slice of that pie.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" py={matchesSM ? 6 : 9}>
          <Grid
            container
            alignItems="center"
            justify={matchesMD ? 'center' : undefined}
            spacing={3}
          >
            <Grid item style={{ width: matchesXS ? '17rem' : '22rem' }}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ textAlign: matchesMD ? 'center' : undefined }}
              >
                Outreach
              </Typography>
              <img src={outreach} alt="analytics" width="100%" height="100%" />
            </Grid>
            <Grid item style={{ maxWidth: '30rem', textAlign: matchesMD ? 'center' : undefined }}>
              <Typography variant="body1">
                Draw people in with a dazzling website. Showing off your
                products online is a great way to help customers decide what’s
                right for them before visiting in person.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" py={matchesSM ? 6 : 9}>
          <Grid
            container
            alignItems="center"
            justify={matchesMD ? 'center' : 'flex-end'}
            spacing={3}
          >
            <Grid item style={{ width: matchesXS ? '17rem' : '22rem' }}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ textAlign: matchesMD ? 'center' : 'center' }}
              >
                Search Engine Optimization
              </Typography>
              <img src={seo} alt="analytics" width="100%" height="100%" />
            </Grid>
            <Grid item style={{ maxWidth: '30rem', textAlign: matchesMD ? 'center' : undefined }}>
              <Typography variant="body1">
                How often have you ever been to the second page of Google
                results?
              </Typography>
              <Typography variant="body1">
                If you’re like us, probably never.
              </Typography>
              <Typography variant="body1">
                Customers don’t go there either, so we make sure your website is
                designed to end up on top.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
};
export default WebDevelopment;
