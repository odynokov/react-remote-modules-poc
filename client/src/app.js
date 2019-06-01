import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = props => (
  <>
    <h1>{props.title}</h1>
    <Router>
      <ul>
        {props.modules.map((module, i) =>
          <li key={i}>{props.renderMenuItem(module)}</li>
      )}
      </ul>
      <div>
        {props.modules.map((module, i) =>
          <Route key={i} exact={module.exact} path={module.path} render={() => props.renderModule(module)} />
        )}
      </div>
    </Router>
  </>
);

export default App;
