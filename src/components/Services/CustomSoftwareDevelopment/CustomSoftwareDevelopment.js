import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  IconButton,
  Hidden,
} from '@material-ui/core';

import backArrow from '../../../assets/img/backArrow.svg';
import forwardArrow from '../../../assets/img/forwardArrow.svg';
import lightbulb from '../../../assets/img/bulb.svg';
import cash from '../../../assets/img/cash.svg';
import stopwatch from '../../../assets/img/stopwatch.svg';
import roots from '../../../assets/img/root.svg';

import documentsAnimation from '../../../animations/documentsAnimation/data';
import automationAnimation from '../../../animations/automationAnimation/data.json';
import uxAnimation from '../../../animations/uxAnimation/data';

import CallToAction from '../../CallToAction/CallToAction';
import Lottie from 'react-lottie';

export const CustomSoftwareDevelopment = (props) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
                Custom Software Development
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
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography paragraph variant="body1">
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography paragraph variant="body1">
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography paragraph variant="body1">
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" py={matchesSM ? 6 : 9}>
          <Grid container justify="center" spacing={10}>
            <Grid item md sm={12} style={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Save Energy
              </Typography>
              <img src={lightbulb} alt="bulb" />
            </Grid>
            <Grid item md sm={12} style={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Save Time
              </Typography>
              <img src={stopwatch} alt="bulb" />
            </Grid>
            <Grid item md sm={12} style={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Save Money
              </Typography>
              <img src={cash} alt="bulb" />
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
                Digital Documents & Data
              </Typography>
              <Typography paragraph variant="body1">
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1">
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography paragraph variant="body1">
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
            <Grid item container md alignItems="center">
              <Lottie
                options={documentsOptions}
                isStopped={true}
                style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
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
                Scale
              </Typography>
              <Typography paragraph variant="body1">
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" py={matchesSM ? 6 : 9}>
          <Grid container direction="column" alignItems="center">
            <Grid item style={{ width: '25rem' }}>
              <img src={roots} alt="roots" width="100%" height="100%" />
            </Grid>
            <Grid item style={{ textAlign: 'center', maxWidth: '40rem' }}>
              <Typography variant="h4">Root-Cause Analysis</Typography>
              <Typography paragraph variant="body1">
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography paragraph variant="body1">
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" py={matchesSM ? 6 : 9}>
          <Grid
            container
            style={{ textAlign: matchesSM ? 'center' : undefined }}
          >
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              lg
            >
              <Grid item md style={{ order: matchesSM ? 2 : 1 }}>
                <Typography gutterBottom variant="h4">
                  Automation
                </Typography>
                <Typography paragraph variant="body1">
                  Why waste time when you don’t have to?
                </Typography>
                <Typography paragraph variant="body1">
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography paragraph variant="body1">
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
              <Grid item md style={{ order: matchesSM ? 1 : 2 }}>
                <Lottie
                  options={automationOptions}
                  isStopped={true}
                  style={{ maxHeight: 290, maxWidth: 280, padding: 20 }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              style={{ marginTop: matchesMD ? '6rem' : 0 }}
              lg
            >
              <Grid item md>
                <Lottie
                  options={uxOptions}
                  isStopped={true}
                  style={{ maxHeight: 310, maxWidth: 155, padding: 20 }}
                />
              </Grid>
              <Grid
                item
                md
                style={{ textAlign: matchesSM ? 'center' : 'right' }}
              >
                <Typography variant="h4">User Experience Design</Typography>
                <Typography variant="body1">
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography variant="body1">
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography variant="body1">
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <CallToAction />
    </Fragment>
  );
};
export default CustomSoftwareDevelopment;
