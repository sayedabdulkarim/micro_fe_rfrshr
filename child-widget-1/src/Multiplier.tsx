import { useDispatch, useSelector } from "react-redux";
import { multiply, divide } from "./redux/action";

const Multiplier = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state: any) => state);

  return (
    <div>
      <h1>Product: {product}</h1>
      <button onClick={() => dispatch(multiply())}>Multiply</button>
      <button onClick={() => dispatch(divide())}>Divide</button>
    </div>
  );
};

export default Multiplier;
