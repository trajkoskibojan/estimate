import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25rem',
    },
  },
  drawerIcon: {
    width: '50px',
    height: '50px',
  },
  drawer: {
    background: theme.palette.common.arcBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    background: theme.palette.common.arcOrange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  expansion: {
    backgroundColor: theme.palette.common.arcBlue,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    '&.Mui-expanded': {
      margin: 0,
      borderBottom: 0,
    },
    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  },
  expansionDetails: {
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
  expansionSummary: {
    padding: '0 24px 0 16px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    backgroundColor: (props) =>
      props.value === 1 ? 'rgba(0, 0, 0, 0.14)' : 'inherit',
  },
}));

const Drawer = (props) => {
  const classes = useStyles(props);
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <Box display={{ xs: 'flex', lg: 'none' }} ml="auto">
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {props.routes.map((route) =>
            route.name === 'Services' ? (
              <Accordion
                elevation={0}
                key={route.name}
                classes={{ root: classes.expansion }}
              >
                <AccordionSummary
                  classes={{ root: classes.expansionSummary }}
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                    style={{ opacity: props.value === 1 ? 1 : null }}
                    onClick={() => {
                      setOpenDrawer(false);
                      props.setValue(route.activeIndex);
                    }}
                  >
                    <Link
                      to={route.link}
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                        opacity: 0.7,
                      }}
                    >
                      {route.name}
                    </Link>
                  </ListItemText>
                </AccordionSummary>
                <AccordionDetails classes={{ root: classes.expansionDetails }}>
                  <Grid container direction="column">
                    {props.menuOptions.map((route, i) => (
                      <Grid key={i} item>
                        <ListItem
                          divider
                          key={`${route}${route.setSelectedIndex}`}
                          button
                          component={Link}
                          to={route.link}
                          selected={
                            props.selectedIndex === route.selectedIndex &&
                            props.value === 1 &&
                            window.location.pathname !== '/services'
                          }
                          classes={{ selected: classes.drawerItemSelected }}
                          onClick={() => {
                            setOpenDrawer(false);
                            props.setSelectedIndex(route.selectedIndex);
                          }}
                        >
                          <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                            {route.name
                              .split(' ')
                              .filter((word) => word !== 'Development')
                              .join(' ')}
                            <br />
                            <span style={{ fontSize: '0.75rem' }}>
                              Development
                            </span>
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem
                divider
                key={`${route}${route.activeIndex}`}
                button
                component={Link}
                to={route.link}
                selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            to="/estimate"
            selected={props.value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        style={{ background: 'transparent', padding: '17.75px' }}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Box>
  );
};

export default Drawer;
