import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
} from '@material-ui/core';

import history from '../../assets/img/history.svg';

const useStyles = makeStyles((theme) => ({
  aboutIntro: {
    fontSize: '1.5rem',
    maxWidth: '50em',
    fontStyle: 'italic',
    fontWeight: 300,
    lineHeight: 1.4,
    textAlign: 'center',
    padding: '1rem 0',
  },
}));

export const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <Box component="section" py={matchesSM ? 6 : 9}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h4" className={classes.aboutIntro}>
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Box>
      <Box component="section" py={matchesSM ? 6 : 9}>
        <Grid container alignItems="center" spacing={5}>
          <Grid item lg style={{ textAlign: matchesMD ? 'center' : undefined }}>
            <Typography variant="h2">History</Typography>
            <Typography
              variant="body1"
              gutterBottom
              style={{
                fontWeight: 700,
                fontStyle: 'italic',
                marginBottom: '1rem',
              }}
            >
              We're the new kid on the block
            </Typography>
            <Typography paragraph variant="body1">
              Founded in 2019, we’re ready to get our hands on the world’s
              business problems
            </Typography>
            <Typography paragraph variant="body1">
              It all started with one question: Why aren’t all businesses using
              available technology? There are many different answers to that
              question: economic barriers, social barriers, educational
              barriers, and sometimes institutional barriers.
            </Typography>
            <Typography paragraph variant="body1">
              We aim to be a powerful force in overcoming these obstacles.
              Recent developments in software engineering and computing power,
              compounded by the proliferation of smart phones, has opened up
              infinite worlds of possibility. Things that have always been done
              by hand can now be done digitally and automatically, and
              completely new methods of interaction are created daily. Taking
              full advantage of these advancements is the name of the game.
            </Typography>
            <Typography paragraph variant="body1">
              All this change can be a lot to keep up with, and that’s where we
              come in.
            </Typography>
          </Grid>
          <Grid
            item
            container
            lg
            justify={matchesMD ? 'center' : 'flex-end'}
            style={{margin: '0 auto', maxWidth: matchesMD ? '40rem' : undefined }}
          >
            <img src={history} alt="history" width="100%" height="100%" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default About;
