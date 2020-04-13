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
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter'

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
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalClassCounter />
    </div>
  );
}

export default App;
