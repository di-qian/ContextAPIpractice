import { useState, useContext, createContext } from 'react';

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

function CounterContextProvider(props) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <CounterContext.Provider value={{ count, increaseCount, decreaseCount }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
