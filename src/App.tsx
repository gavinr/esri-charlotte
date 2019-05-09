import React from 'react';
import { Greeter } from './Greeter';

const App: React.FC = () => {
  return (
    <main className="container">
      <header>
        <Greeter companyName={'Weyland-Yutani Corporation'} />
        <hr />
      </header>
    </main>
  );
};

export default App;
