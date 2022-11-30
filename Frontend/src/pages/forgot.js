import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function ForgotPassword() {
  return (
    <React.Fragment>
      <ResponsiveAppBar/>
      <ForgotPasswordBody />
    </React.Fragment>
  );
}

function ForgotPasswordBody() {
  return (
    <div>
      If you have lost your password you need to contact an admistrator by mail (please hand deliver to our office in California)..
    </div>
  )
}
