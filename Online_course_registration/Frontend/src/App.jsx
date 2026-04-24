import { RouterProvider } from "react-router-dom";
import { AppRoute } from "./AppRoute";
import './style/index.scss'

const App=()=>{
  return (
    <>
    <RouterProvider router={AppRoute}/>
    </>
  )
}

export default App;