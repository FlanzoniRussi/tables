import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Doctors from '../pages/TableDoctors';
import Patients from '../pages/TablePatients';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Doctors} />
      <Route path="/patients" component={Patients} />
    </Switch>
  );
};

export default Routes;