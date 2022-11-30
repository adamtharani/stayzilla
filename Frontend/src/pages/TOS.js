import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function ForgotPassword() {
  return (
    <React.Fragment>
      <ResponsiveAppBar/>
      <TOS />
    </React.Fragment>
  );
}

function TOS() {
  return (
    <div>
      Terms of Service: you must accept our terms of service! This is our only term!
    </div>
  )
}