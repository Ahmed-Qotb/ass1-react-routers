import './App.css';
import Home from './compononets/Home/Home';
import About from './compononets/About/About';
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './compononets/Layout/Layout';
import Portfolio from './compononets/Portfolio/Portfolio';
import Contact from './compononets/Contact/Contact';

let routers = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { path: '', element: <Navigate to={"home"} /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
])

function App() {
  return <RouterProvider router={routers}>

  </RouterProvider>

}

export default App;
