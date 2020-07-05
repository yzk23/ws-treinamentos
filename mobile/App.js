import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="transparent" translucent />
      <Routes />
    </React.Fragment>
  );
}