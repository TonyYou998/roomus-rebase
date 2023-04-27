import React from 'react';
import ServiceBanner from './components/ServiceBanner';
import ServiceContainer from './components/ServiceContainer';

export default function ServicePage() {
  return (
    <div className='container container__service'>
       <ServiceBanner/>
       <ServiceContainer/>
    </div>
  )
}
