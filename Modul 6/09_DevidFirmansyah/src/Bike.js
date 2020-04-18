import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function Bike() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/MTBHardTail">Mountain Bike Hard Tail</Link>
          </li>
          <li>
            <Link to="/MTBSoftTail">Mountain Bike Soft Tail</Link>
          </li>
          <li>
            <Link to="/RB">Road Bike</Link>
          </li>
          <li>
            <Link to="/Folding">Folding Bike</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route path="/MTBHardTail">
            <MTBHardTail />
          </Route>
          <Route path="/MTBSoftTail">
            <MTBSoftTail />
          </Route>
          <Route path="/RB">
            <RB />
          </Route>
          <Route path="/Folding">
            <Folding />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function MTBHardTail() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Mountain Bike Hard Tail</h2>
      <ul>
        <li>
          <Link to={`${url}/Polygon Cascade, Polygon Premier, Polygon Xtrada`}>Polygon</Link>
        </li>
        <li>
          <Link to={`${url}/United Detroit, United Clovis, United SL7`}>United</Link>
        </li>
        <li>
          <Link to={`${url}/Thrill Ravage, Thrill Vanquish, Thrill Cleave, Thrill Wreak`}>Thrill</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function MTBSoftTail() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Mountain Bike Soft Tail</h2>
      <ul>
        <li>
          <Link to={`${url}/Polygon Xquarone, Polygon Siskiu, Polygon Collosus`}>Polygon</Link>
        </li>
        <li>
          <Link to={`${url}/United Epsilon T1, United Epsilon T2, United Epsilon T5, United Epsilon T6`}>United</Link>
        </li>
        <li>
          <Link to={`${url}/Thrill Ricochet, Thrill Fervent, Thrill Oust`}>Thrill</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function RB() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>RoadBike</h2>
      <ul>
        <li>
          <Link to={`${url}/Polygon Divine, Polygon Strattos, Polygon Helios`}>Polygon</Link>
        </li>
        <li>
          <Link to={`${url}/United Vitessa, United Stygma, United Sterling`}>United</Link>
        </li>
        <li>
          <Link to={`${url}/Thrill Ardent, Thrill Enthral`}>Thrill</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Folding() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Folding Bike</h2>
      <ul>
        <li>
          <Link to={`${url}/Polygon Urbano I3, Polygon Urbano 3`}>Polygon</Link>
        </li>
        <li>
          <Link to={`${url}/United Quest, United Stylo, United Trifold`}>United</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}