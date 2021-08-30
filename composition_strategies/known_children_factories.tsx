import React from 'react';
import { render } from 'react-dom';

const App: React.FC = ({ createTopMenu, createLeftMenu }) => {
  return (
    <div>
      {createTopMenu()}
      {createLeftMenu()}
    </div>
  );
};

const LeftBar: React.FC = () => {
  return (
    <ul style={{ border: '1px solid black', marginTop: 2, width: '20%' }}>
      <li>Page 1</li>
      <li>Page 2</li>
      <li>Page 3</li>
    </ul>
  );
};

const TopBar: React.FC = () => {
  return (
    <div style={{ width: '100%', border: '1px solid black' }}>Top bar</div>
  );
};

render(
  <App
    createTopMenu={props => <TopBar {...props} />}
    createLeftMenu={props => <LeftBar {...props} />}
  />,
  document.getElementById('root')
);
