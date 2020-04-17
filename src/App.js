import React from 'react';
import './App.css';
// import ClassCounter from './components/useEffect-and-useState/ClassCounter'
// import ClassCounterTwo from './components/useEffect-and-useState/ClassCounterTwo'
// import HookCounter from './components/useEffect-and-useState/HookCounter'
// import HookCounterTwo from './components/useEffect-and-useState/HookCounterTwo';
// import HookCounterThree from './components/useEffect-and-useState/HookCounterThree';
// import HookCounterFour from './components/useEffect-and-useState/HookCounterFour';
// import HookCounterFive from './components/useEffect-and-useState/HookCounterFive';
// import ClassMouse from './components/useEffect-and-useState/ClassMouse'
// import HookMouse from './components/useEffect-and-useState/HookMouse'
// import MouseContainer from './components/useEffect-and-useState/MouseContainer';
// import IntervalClassCounter from './components/useEffect-and-useState/IntervalClassCounter'
// import IntervalHookCounter from './components/useEffect-and-useState/IntervalHookCounter';
// import DataFetching from './components/useEffect-and-useState/DataFetching'
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'jonah'}>
        <ChannelContext.Provider value={'blah blah blah'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
