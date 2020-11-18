import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Appbar from './components/Appbar';

const App = () => (
  <>  
    <Appbar />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
