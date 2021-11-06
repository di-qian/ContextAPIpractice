import { useCounter } from '../context/CounterContext';

const MyCounter = () => {
  const { count, increaseCount, decreaseCount } = useCounter();
  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count is: {count}</p>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
    </div>
  );
};

export default MyCounter;
