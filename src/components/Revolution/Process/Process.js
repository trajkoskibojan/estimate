import React from 'react';

import consultation from '../../../assets/img/consultationIcon.svg';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
} from '@material-ui/core';

export const Process = (props) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      py={matchesSM ? 6 : 9}
      style={{ backgroundColor: '#B3B3B3' }}
    >
      <Container>
        <Grid container justify="center" alignItems="center" spacing={10}>
          <Grid item style={{ maxWidth: '40rem' }} lg>
            <Typography
              variant="h4"
              color="textPrimary"
              style={{ marginBottom: '2rem' }}
              align={matchesMD ? 'center' : 'left'}
            >
              Consultation
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'left'}
              style={{ color: 'white' }}
            >
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'left'}
              style={{ color: 'white' }}
            >
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'left'}
              style={{ color: 'white' }}
            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: matchesXS ? '25rem' : matchesSM ? '30rem' : '40rem',
            }}
            lg
          >
            <img src={consultation} alt="handshake" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Process;
