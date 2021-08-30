import React from 'react';
import { render } from 'react-dom';

const App: React.FC = () => {
  return <div>I'm an application</div>;
};

const getHighOrderComponent = Component => () => (
  <div>
    <Component /> extended by a HOC
  </div>
);

const ExtendedApp = getHighOrderComponent(App);

render(<ExtendedApp />, document.getElementById('root'));
