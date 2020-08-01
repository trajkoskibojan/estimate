import React from 'react';
import { makeStyles } from '@material-ui/styles';

import revolutionBackground from '../../../assets/img/repeatingBackground.svg';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import ButtonArrow from 'shared/ButtonArrow';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  cardContainer: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10rem',
    [theme.breakpoints.down('sm')]: {
      padding: '8rem 0',
      borderRadius: 0,
      width: '100%',
    },
  },
}));

export const RevolutionCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      className={classes.revolutionBackground}
      component="section"
    >
      <Grid
        container
        style={{ height: matchesSM ? '60rem' : '100rem'}}
        alignItems="center"
        justify="center"
      >
        <Card className={classes.cardContainer}>
          <CardContent>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                {' '}
                <Typography variant="subtitle1" align='center'>
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution.
                </Typography>
              </Grid>
              <CardActions>
                <Button
                  component={Link}
                  to="/revolution"
                  className={classes.learnButtonHero}
                  variant="outlined"
                  onClick={() => props.setValue(2)}
                >
                  <Box component="span" style={{ marginRight: 10 }}>
                    Learn More
                  </Box>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </CardActions>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};
export default RevolutionCard;
