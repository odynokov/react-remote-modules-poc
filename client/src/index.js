import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ErrorBoundary from './error-boundary';
import GetItems from './get-items';
import api from './api';
import {Link} from 'react-router-dom';
import LoadModule from './load-module';

ReactDOM.render(
  <ErrorBoundary text="Oops. Something bad just happened.">
    <GetItems
      fetchFunction={api.getModules}
      fallback="Loading modules..."
      render={modules => (
        <App
          title="Test remote modules"
          modules={modules}
          renderMenuItem={
            module => <Link to={module.path}>{module.name}</Link>
          }
          renderModule={
            module => <LoadModule fallback={`Loading ${module.name} ...`} src={module.src} />
          }
        />
      )}
    />
  </ErrorBoundary>,
  document.getElementById('root'));

