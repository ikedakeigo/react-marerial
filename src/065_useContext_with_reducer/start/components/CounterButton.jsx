import { useCounterDispatch } from "../context/CounterContext";

const CounterButton = ({calcType, step}) => {

    const dispatch = useCounterDispatch();
    const clickHandler = () => {
        dispatch({ type: calcType, step });
        console.log(dispatch)
    }
    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;
