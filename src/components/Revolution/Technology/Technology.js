import React from 'react';

import technologyAnimation from '../../../animations/technologyAnimation/data.json';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Lottie from 'react-lottie';


export const Technology = (props) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box component="section" py={matchesSM ? 6 : 9}>
      <Grid container justify="center" alignItems="center" spacing={10}>
        <Grid item style={{ maxWidth: '40rem' }} lg>
          <Typography
            variant="h4"
            color="primary"
            style={{ marginBottom: '2rem' }}
            align={matchesMD ? 'center' : 'left'}
          >
            Technology
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            In 2013, Facebook invented a new way of building websites. This new
            system, React.js, completely revolutionizes the process and practice
            of website development.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            Instead of chaining together long individual pages, like traditional
            websites, React websites are built with little chunks of code called
            components. These components are faster, easier to maintain, and are
            easily reused and customized, each serving a singular purpose.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            Two years later they shocked the world by releasing a similar
            system, React Native, for producing iOS and Android apps. Instead of
            having to master two completely separate development platforms, you
            can leverage the knowledge you already possessed from building
            websites and reapply it directly! This was a huge leap forward.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            This technology is now being used by companies like AirBnB,
            Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
            Facebook purchased Instagram large portions of it were even rebuilt
            using React.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            Developers have since built on top of these systems by automating
            project setup and deployment, allowing creators to focus as much as
            possible on their work itself.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            These technical advancements translate into savings by significantly
            reducing the workload and streamlining the workflow for developing
            new pieces of software, while also lowering the barrier to entry for
            mobile app development.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            This puts personalization in your pocket — faster, better, and more
            affordable than ever before.
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            maxWidth: matchesXS ? '25rem' : matchesSM ? '30rem' : '40rem',
          }}
          lg
        >
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: '40em', margin: 0 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Technology;
