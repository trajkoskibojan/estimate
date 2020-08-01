import React, { Fragment } from 'react'
import { Container } from '@material-ui/core';
import Vision from '../../components/Revolution/Vision/Vision'
import Technolology from '../../components/Revolution/Technology/Technology';
import Process from '../../components/Revolution/Process/Process';
import MockUp from '../../components/Revolution/MockUp/MockUp';
import CallToAction from 'components/CallToAction/CallToAction';


const Revolution = (props) => {
  return (
    <Fragment>
      <Container>
        <Vision />
        <Technolology />
      </Container>
      <Process />
      <MockUp />
      <CallToAction setValue={props.setValue} />
    </Fragment>
  );
}

export default Revolution
