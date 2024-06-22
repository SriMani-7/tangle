import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { HomePage } from "./features/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage/>} />
      <Route path="editor" element={<>editor</>} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
