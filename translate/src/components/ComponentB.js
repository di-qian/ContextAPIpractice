import { useCounter } from '../context/CounterContext';

const ComponentB = () => {
  const { increaseCount } = useCounter();

  return (
    <div style={{ backgroundColor: 'red' }}>
      <button onClick={increaseCount}>IncreaseCount</button>
    </div>
  );
};

export default ComponentB;
