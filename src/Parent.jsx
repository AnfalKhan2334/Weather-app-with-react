import React from 'react';
import Greeting from './Greeting';

function Parent() {
  const userName = "Alice";

  return (
    <div>
      <h1>Welcome to the App!</h1>
      <Greeting name={userName} />
    </div>
  );
}

export default Parent;
