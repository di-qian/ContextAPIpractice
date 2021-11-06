import { useCounter } from '../context/CounterContext';

const ComponentA = () => {
  const { count } = useCounter();

  return (
    <div style={{ backgroundColor: 'wheat' }}>
      <p>Count:{count}</p>
    </div>
  );
};

export default ComponentA;
