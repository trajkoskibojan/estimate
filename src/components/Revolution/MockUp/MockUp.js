import React from 'react';

import mockup from '../../../assets/img/mockupIcon.svg';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
} from '@material-ui/core';

export const MockUp = (props) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      py={matchesSM ? 6 : 9}
      style={{ backgroundColor: '#FF7373' }}
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
              MockUp
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'left'}
              style={{ color: 'white' }}
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'left'}
              style={{ color: 'white' }}
            >
              Then it’s time for us to start on your minimum viable product.
              That’s just a fancy term for a mockup, which doesn’t include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : 'left'}
              style={{ color: 'white' }}
            >
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: matchesXS ? '25rem' : matchesSM ? '30rem' : '35rem',
            }}
            lg
          >
            <img src={mockup} alt="handshake" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default MockUp;
