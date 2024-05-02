import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../Redux/localeSlice";

export default function Switcher () {
    const startLang = useSelector(state => state.locale.lang)
    const dispatch = useDispatch()
    return (
        <div>
            <select value={startLang} onChange={(e) => dispatch(changeLang(e.target.value))}>
                <option value="en">EN</option>
                <option value="uk">UK</option>
                <option value="pl">PL</option>
            </select>
        </div>
    )
}