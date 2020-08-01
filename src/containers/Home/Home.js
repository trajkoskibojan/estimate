import React, { Fragment } from 'react';

import Hero from 'components/Home/Hero/Hero';
import CustomSoftware from 'components/Home/CustomSoftware/CustomSoftware';
import AppDevelopment from 'components/Home/AppDevelopment/AppDevelopment';
import WebsiteDevelopment from 'components/Home/WebsiteDevelopment/WebsiteDevelopment';
import RevolutionCard from 'components/Home/RevolutionCard/RevolutionCard';
import InformationBlock from 'components/Home/InformationBlock/InformationBlock';
import CallToAction from 'components/CallToAction/CallToAction'
import { Container } from '@material-ui/core';

const Home = (props) => {
  return (
    <Fragment> 
      <Container>
        <Hero setValue={props.setValue} />
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
        <RevolutionCard setValue={props.setValue} />
      </Container>
      <InformationBlock setValue={props.setValue} />
      <CallToAction setValue={props.setValue} />
    </Fragment>
  );
};

export default Home;
