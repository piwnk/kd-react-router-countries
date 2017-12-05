import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';

import CountryFlagContainer from './containers/flag-container.components';
import CountryDetailsContainer from './containers/country-details.container';

export default (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Home} />
    <Route path="countries">
      <IndexRoute component={CountryFlagContainer} />
      <Route path="country/:id" component={CountryDetailsContainer} />
    </Route>
    <Route path="contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Route>
);