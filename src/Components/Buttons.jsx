import { useDispatch, useSelector } from "react-redux"
import { addPoints, removePoints } from "../Redux/pointsSlice";
import { useState } from "react";

export default function Buttons () {
    const dispatch = useDispatch();
    const startPoints = useSelector(state => state.points.value);

    const [value, setValue] = useState(0)

    return (
        <div>
            <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}/>
            <button onClick={() => dispatch(addPoints(value))}>Add 10 points</button>
            <button onClick={() => dispatch(removePoints(value))}>Remove 10 points</button>
            <p>Result: {startPoints}</p>
        </div>
    )
}