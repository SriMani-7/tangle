import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<>Welcome</>}/>

    </Route>
  )
)

const App = () => (
  <RouterProvider router={router}/>
)

export default App
