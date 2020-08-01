import React from 'react';
import { makeStyles } from '@material-ui/styles';

import backgroundInfo from '../../../assets/img/infoBackground.svg';
import {
  Grid,
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
  Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ButtonArrow from 'shared/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  backgroundInfo: {
    backgroundImage: `url(${backgroundInfo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  containerInfo: {
    height: '100rem',
    [theme.breakpoints.down('sm')]: {
      height: '60rem',
    },
  },
  learnButtonHero: {
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

export const InformationBlock = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery('(max-width:615px)');

  return (
    <Box component="section" className={classes.backgroundInfo}>
      <Container>
        <Grid
          container
          item
          className={classes.containerInfo}
          justify={matchesSM ? 'center' : 'space-between'}
          alignItems="center"
          direction={matchesSM ? 'column' : 'row'}
        >

          <Box
            align={matchesSM ? 'center' : 'inherit'}
            p={matchesSM ? '3rem' : '0'}
          >
            <Typography variant="h2" gutterBottom style={{ color: 'white' }}>
              About Us
            </Typography>
            <Typography variant="subtitle2">Let's get personal</Typography>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              className={classes.learnButtonHero}
              style={{ color: 'white', borderColor: 'white' }}
              onClick={() => props.setValue(3)}
            >
              <Box component="span" mr="10px">
                Learn More
              </Box>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.white}
              />
            </Button>
          </Box>
          <Box align={matchesSM ? 'center' : 'right'}>
            <Typography variant="h2" gutterBottom style={{ color: 'white' }}>
              Contact Us
            </Typography>
            <Typography variant="subtitle2">Say Hello</Typography>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              className={classes.learnButtonHero}
              style={{ color: 'white', borderColor: 'white' }}
              onClick={() => props.setValue(3)}
            >
              <Box component="span" mr="10px">
                Learn More
              </Box>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.white}
              />
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
export default InformationBlock;
