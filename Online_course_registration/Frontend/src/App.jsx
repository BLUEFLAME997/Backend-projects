import { RouterProvider } from "react-router-dom";
import { AppRoute } from "./AppRoute";
import './style/index.scss'
import { AuthProvider } from "./features/Auth/auth.context";

const App=()=>{
  return (
    <AuthProvider>
      <RouterProvider router={AppRoute}/>
    </AuthProvider>
  )
}

export default App;