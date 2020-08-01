import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Slide,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableHead,
  Snackbar,
} from '@material-ui/core';

import {
  defaultQuestions,
  softwareQuestions,
  websiteQuestions,
} from './Data/data';

import backArrow from '../../assets/img/backArrow.svg';
import backArrowDisabled from '../../assets/img/backArrowDisabled.svg';
import forwardArrow from '../../assets/img/forwardArrow.svg';
import forwardArrowDisabled from '../../assets/img/forwardArrowDisabled.svg';
import estimateAnimation from '../../animations/estimateAnimation/data.json';
import Lottie from 'react-lottie';

const useStyles = makeStyles((theme) => ({
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.arcOrange,
    height: 50,
    width: 225,
    fontSize: '1.25rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  papper: {
    paddingTop: '2rem',
    paddingBotoom: '2rem',
  },
}));

let selectedAnswers = [];
export const Estimate = (props) => {
  const classes = useStyles(props);
  const theme = useTheme(props);
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [defaultQ, setDefaultQ] = useState(defaultQuestions);

  const [curQuestionSection, setCurQuestionSection] = useState(
    defaultQuestions
  );

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ open: false, color: '' });
  const [alertMessage, setAlertMesssage] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [index, setIndex] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [currQ, setCurrQ] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if (Number.isInteger(index)) {
      let minSelected = curQuestionSection[index].options.find(
        (el) => el.selected === true
      );
      if (minSelected) {
        curQuestionSection[index].selection = true;
      } else {
        curQuestionSection[index].selection = false;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curQuestionSection]);

  useEffect(() => {
    const selections = curQuestionSection.filter((el) => el.selection === true);
    setIsSelected(selections.length === curQuestionSection.length);
  }, [curQuestionSection]);

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(() => {
     setIsDisabled(curQuestionSection.length === currQ + 1);
   });

  const handleSelected = (ID) => {
    if (defaultQ[0].active) {
      const defaultCopy = [
        {
          ...defaultQ[0],
          active: false,
          options: [
            ...defaultQ[0].options.map((el) => {
              return el.id === ID ? { ...el, selected: !el.selected } : el;
            }),
          ],
        },
      ];
      setDefaultQ(defaultCopy);

      switch (ID) {
        case 1:
          setCurQuestionSection(softwareQuestions); 
          break;
        case 2:
          setCurQuestionSection(softwareQuestions);
          break;
        case 3:
          setCurQuestionSection(websiteQuestions);
          setIsDisabled(true)
          break;
        default:
          setCurQuestionSection(defaultQuestions);
          break;
      }
    } else if (defaultQ[0].active === false) {
      const copyQuestions = [...curQuestionSection];

      const updateSelected = copyQuestions.map((el, i) => {
        return {
          ...el,
          options: el.options.map((option) => {
            if (option.id === ID) {
              setIndex(i);
            }

            return option.id === ID
              ? selectedAnswers.push({
                  ...option,
                  selected: !option.selected,
                }) && { ...option, selected: !option.selected }
              : option;
          }),
        };
      });

      setCurQuestionSection(updateSelected);
    }
  };

  const previousQuestion = () => {
    setCurrQ(currQ - 1);
  };

  const nextQuestion = () => {
    setCurrQ(currQ + 1);
  };

  const handleStart = () => {
    setIndex(null);
    setDefaultQ(defaultQuestions);
    setCurQuestionSection(defaultQuestions);
    setCurrQ(0);
    selectedAnswers = [];
  };

  const getEstimate = () => {
    let total = 0;
    selectedAnswers.forEach((el) => (total += el.cost));
    return total;
  };

  return (
    <Box component="section" py={matchesSM ? 3 : 6}>
      <Container>
        <Typography variant="h2">Estimate</Typography>
        <Grid container justify="center" alignItems="center" spacing={10}>
          <Grid item lg>
            <Lottie
              style={{
                marginLeft: matchesMD ? 0 : '-58.50px',
                maxWidth: matchesMD ? '40rem' : undefined,
              }}
              options={defaultOptions}
              isStopped
              height="100%"
              width="100%"
            />
          </Grid>
          <Grid item lg>
            <Grid item>
              <Typography
                variant="h2"
                align="center"
                gutterBottom
                style={{
                  fontWeight: 500,
                  fontSize: '2.15rem',
                  marginBottom: '4rem',
                }}
              >
                {curQuestionSection[currQ].title}
              </Typography>
            </Grid>
            <Grid
              item
              container
              spacing={2}
              style={{ marginBottom: '1rem' }}
              justify={matchesSM ? 'center' : undefined}
            >
              <Grid item component={Button} onClick={handleStart}>
                <img src={backArrow} alt="backarrow" />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Cnange your service of interest
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              {curQuestionSection[currQ].options.map((el, i) => (
                <Grid
                  key={i}
                  component={Button}
                  item
                  alignItems="center"
                  container
                  direction="column"
                  md
                  onClick={() => handleSelected(el.id)}
                  style={{
                    textAlign: 'center',
                    alignItems: 'stretch',
                    display: 'grid',
                    textTransform: 'none',
                    borderRadius: 0,
                    marginBottom: matchesSM ? '1.5em' : 0,
                    backgroundColor: el.selected
                      ? theme.palette.common.arcOrange
                      : null,
                  }}
                >
                  <Grid item>
                    <Typography
                      align="center"
                      variant="h6"
                      style={{ marginBottom: '1.2rem' }}
                    >
                      {el.title}
                    </Typography>
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <img
                      src={el.icon}
                      alt="icon"
                      style={{ maxWidth: '10rem' }}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
            {!defaultQ[0].active && (
              <Grid
                item
                container
                justify="space-between"
                style={{ width: '18em', margin: '0 auto', marginTop: '3rem' }}
              >
                <Grid item>
                  <img src="../../assets/img/backArrowDisabled.svg" alt="" />
                  <IconButton disabled={currQ < 1} onClick={previousQuestion}>
                    <img
                      src={currQ < 1 ? backArrowDisabled : backArrow}
                      alt="Previous question"
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton disabled={isDisabled} onClick={nextQuestion}>
                    <img
                      src={isDisabled ? forwardArrowDisabled : forwardArrow}
                      alt="Next question"
                    />
                  </IconButton>
                </Grid>
              </Grid>
            )}
            <Grid item style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                className={classes.estimateButton}
                style={{ marginTop: '3rem' }}
                disabled={!isSelected}
                onClick={() => {
                  setOpen(!open);
                  getEstimate();
                }}
              >
                Get Estimate
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Dialog
          style={{
            positin: 'relative',
            zIndex: 2500,
          }}
          classes={{ paper: classes.papper }}
          fullWidth
          maxWidth="sm"
          TransitionComponent={Slide}
          open={open}
          onClose={() => setOpen(!open)}
          aria-labelledby="dialog-estimate"
        >
          <Typography align="center" variant="h2">
            Estimate
          </Typography>

          <DialogContent>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Your choese</TableCell>
                    <TableCell align="left">Individual price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedAnswers.map((row) => (
                    <TableRow key={row.title}>
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        $ {row.cost}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography variant="h5">Total estimate Price</Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      $ {getEstimate()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Grid
              item
              container
              alignItems="center"
              justify="flex-end"
              style={{ margin: '2rem 0' }}
            >
              <Grid item>
                <Button
                  style={{ color: '#868686' }}
                  onClick={() => setOpen(!open)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  widthsize="true"
                  className={classes.estimateButton}
                  style={{ width: 175 }}
                  onClick={() => {
                    setOpen(!open);
                    handleStart();
                    setAlertMesssage('Message sent successfully!');
                    setAlert({ open: true, color: '#4BB543' });
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <Snackbar
          style={{ zIndex: 2001 }}
          open={alert.open}
          ContentProps={{
            style: {
              backgroundColor: alert.color,
            },
          }}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          message={alertMessage}
          autoHideDuration={3000}
          onClose={() => setAlert(false)}
        />
      </Container>
    </Box>
  );
};
export default Estimate;
