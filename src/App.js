import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HelloClass } from "./HelloClass/HelloClass";
import { HelloFunction } from "./HelloFunction/HelloFunction";
import { PropsDrilling } from "./PropsDrilling/PropsDrilling";
import { Element, HelloJSX } from "./HelloJSX/HelloJSX";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">jsx</Link>
          </li>
          <li>
            <Link to="/helloClass">클래스 컴퍼넌트 테스트</Link>
          </li>
          <li>
            <Link to="/hellofunctional">함수형 컴퍼넌트 테스트</Link>
          </li>
          <li>
            <Link to="/propsdrilling">props drilling 확인</Link>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <Element />
            <HelloJSX />
          </Route>
          <Route path="/helloClass" exact={true}>
            <HelloClass>클래스 컴퍼넌트 카운터</HelloClass>
          </Route>
          <Route path="/hellofunctional" exact={true}>
            <HelloFunction>함수형 컴퍼넌트 카운터</HelloFunction>
          </Route>
          <Route path="/propsdrilling" exact={true}>
            <PropsDrilling>PropsDrilling 확인</PropsDrilling>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
