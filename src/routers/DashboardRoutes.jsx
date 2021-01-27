import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { DcScreen } from "../components/dc/DcScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroesScreen} />
          <Route exact path="/dc">
            <DcScreen />
          </Route>

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
