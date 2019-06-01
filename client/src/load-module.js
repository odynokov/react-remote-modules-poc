import React, {Suspense, lazy} from 'react';

export default function loadModule(props) {
  const Component = lazy(() => import(/* webpackIgnore: true */ props.src));
  return (
    <Suspense fallback={props.fallback}>
      <Component {...props} />
    </Suspense>
  );
}
