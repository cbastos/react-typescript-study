import React from 'react';

export const App: React.FC = () => {
  return (
    <div>
      <TopBar />
      <LeftBar />
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
