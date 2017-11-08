import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LanguageList from "./LanguageList";
import LanguageDetail from "./LanguageDetail";
import BuildStatus from './BuildStatus';
import About from "./About";

export default () => (
  <Switch>
      <Route exact path='/' component={LanguageList}/>
      {/*<Route exact path='/Language' component={LanguageList}/>*/}
      <Route path='/languages/:id' component={LanguageDetail}/>
      <Route path='/build-status' component={BuildStatus}/>
      <Route path='/about' component={About}/>
  </Switch>
);