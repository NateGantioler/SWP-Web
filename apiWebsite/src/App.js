import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Teams from './components/Teams';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/test",
    element: <Teams/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
