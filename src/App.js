import { async } from '@firebase/util';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import CourseDetails from './components/Courses/CourseDatails/CourseDetails';
import Courses from './components/Courses/Courses';
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
        { path: '/', element: <Home></Home> },
        { path: '/courses', element: <Courses></Courses> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        { path: '*', element: <NotFound></NotFound> },
        {
          path: '/details/:id',
          element: <CourseDetails></CourseDetails>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/details/${params.id}`)
          }
        }
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
