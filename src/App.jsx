import Login from "./components/auth/Login";
import Home from "./components/pages/Home"
import Registro from "./components/auth/Registro";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
let router = createBrowserRouter([
{
  path: '/',
  element: <Login/>
},
{
  path: '/home',
  element: <Home/>
},
{
  path: '/registro',
  element: <Registro/>
}
])

function App() {
  return (
   <RouterProvider router= {router} />
  );
}

export default App;
