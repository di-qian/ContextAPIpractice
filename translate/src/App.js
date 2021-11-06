import React, { useState } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import MyCounter from './components/MyCounter';
import CounterContextProvider from './context/CounterContext';

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <h1>Context API</h1>
        <MyCounter />
        <ComponentA />
        <ComponentB />
      </div>
    </CounterContextProvider>
  );
}

export default App;
