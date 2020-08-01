import React from 'react';

import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
} from '@material-ui/core';
import AppDevelopment from 'components/Home/AppDevelopment/AppDevelopment';
import CustomSoftware from 'components/Home/CustomSoftware/CustomSoftware';
import WebsiteDevelopment from 'components/Home/WebsiteDevelopment/WebsiteDevelopment';


export const Services = (props) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box component="section" py={matchesSM ? 6 : 9}> 
      <Container>
        <Typography variant="h2">Services</Typography>
        <CustomSoftware
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
        />
        <AppDevelopment
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
        />
        <WebsiteDevelopment
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
        />
      </Container>
    </Box>
  );
};
export default Services;
