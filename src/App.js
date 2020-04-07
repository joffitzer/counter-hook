import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import ClassCounterTwo from './components/ClassCounterTwo'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterFive from './components/HookCounterFive';
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterTwo /> */}
      {/* <HookCounterFive /> */}
      {/* <ClassMouse /> */}
      <HookMouse />
    </div>
  );
}

export default App;
