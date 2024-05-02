import { useDispatch, useSelector } from "react-redux"
import { addPoints, removePoints } from "../Redux/store";

export default function Buttons () {
    const dispatch = useDispatch();
    const startPoints = useSelector(state => state.points.value);
    const allState = useSelector(state => state)
    console.log(allState)
    return (
        <div>
            <button onClick={() => dispatch(addPoints(10))}>Add 10 points</button>
            <button onClick={() => dispatch(removePoints(10))}>Remove 10 points</button>
            <p>Result: {startPoints}</p>
        </div>
    )
}