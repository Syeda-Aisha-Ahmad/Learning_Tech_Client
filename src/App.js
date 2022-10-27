import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import NotFound from './components/notFound/NotFound';
import Register from './components/register/Register';
import Main from './components/route/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/courses', element: <Courses></Courses> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        { path: '*', element: <NotFound></NotFound> },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
