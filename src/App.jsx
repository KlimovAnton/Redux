import { useSelector } from "react-redux"
import Buttons from "./Components/Buttons"
import Switcher from "./Components/Switcher"


export default function App() {
  const startLang = useSelector(state => state.locale.lang.toUpperCase())
  return (
    <>
      <Buttons />
      <Switcher />
      <p>Selected lang: {startLang}</p>
    </>
  )
}