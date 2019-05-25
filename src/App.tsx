import React, { FC } from "react";
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Menu from './Menu';
import Flex from './flex';
import Grid from './grid';

const App: FC<{}> = () => {
  return (
    <HashRouter>
      <Route path="/" component={Menu} />
      <Switch>
        <Route path='/flex' component={Flex} />
        <Route path="/grid" component={Grid} />
        <Redirect from="/" to="/flex" />
      </Switch>
    </HashRouter>
  );
};

export default App;
