import React from 'react';
import './home.css';
import WhoWeAre from '../../components/whoWeAre/WhoWeAre';
import CoreValues from '../../components/coreValues/CoreValues';
import ServiceInfo from '../../components/serviceInfo/ServiceInfo';
import Events from '../../components/events/Events';

export default function Home() {
  return (
  <>
    <div className='home'>
      <WhoWeAre />
      <CoreValues />
      <ServiceInfo />
      <Events />
    </div>
  </>

  )
}
