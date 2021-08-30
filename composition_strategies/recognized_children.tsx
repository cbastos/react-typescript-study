import React from 'react';
import { render } from 'react-dom';

const App: React.FC = ({ children }) => {
  const recognized_child_top_bar = findChildByFlag(children, 'top-bar');
  const recognized_child_left_bar = findChildByFlag(children, 'left-bar');
  return (
    <div>
      {recognized_child_top_bar}
      <br />
      {recognized_child_left_bar}
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

function findChildByFlag(children, flag) {
  let foundChild;
  React.Children.forEach(children, child => {
    if (child.props.flag === flag) {
      foundChild = child;
      return;
    }
  });
  return foundChild;
}

render(
  <App>
    <TopBar flag="top-bar" />
    <LeftBar flag="left-bar" />
  </App>,
  document.getElementById('root')
);
