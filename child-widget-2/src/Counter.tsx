import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: any) => state);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
