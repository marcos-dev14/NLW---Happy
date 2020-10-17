import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import OrphanagesMap from './Pages/OrphanagesMap';
import Orphanage from './Pages/Orphanage';
import CreateOrphanage from './Pages/CreateOrphanage';

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/app" component={OrphanagesMap} />

          <Route path="/orphanage/create" component={CreateOrphanage} />
          <Route path="/orphanage/:id" component={Orphanage} />
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;