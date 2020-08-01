import React, { Fragment } from 'react';

import vision from '../../../assets/img/vision.svg';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';


export const Vision = (props) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fragment>
      <Typography
        variant="h2"
        color="primary"
        style={{ fontFamily: 'Pacifico', padding: '2rem 0' }}
      >
        The Revolution
      </Typography>
      <Box component="section" py={matchesSM ? 6 : 9}>
        <Grid container justify='center' alignItems="center" spacing={10}>
          <Grid item lg>
            <img
              src={vision}
              alt="Vision"
              style={{ maxWidth: matchesXS ? '22rem' : matchesSM ? '30rem' : '40rem' }} />
          </Grid>
          <Grid item style={{ maxWidth: '40rem' }} lg>
            <Typography
              variant="h4"
              color="primary"
              style={{ marginBottom: '2rem' }}
              align={matchesMD ? 'center' : 'right'}
            >
              Vison
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'right'}
            >
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'right'}
            >
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'right'}
            >
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'right'}
            >
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'right'}
            >
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default Vision;
