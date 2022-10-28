import { async } from '@firebase/util';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Checkout from './components/checkout/Checkout';
import CourseDetails from './components/Courses/CourseDatails/CourseDetails';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import NotFound from './components/notFound/NotFound';
import PrivateRoute from './components/privateRoute/PrivateRoute';
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
        { path: '/faq', element: <FAQ></FAQ> },
        { path: '*', element: <NotFound></NotFound> },
        {
          path: '/details/:id',
          element: <CourseDetails></CourseDetails>,
          loader: async ({ params }) => {
            return fetch(`https://a-10-api.vercel.app/details/${params.id}`)
          }
        },
        {
          path: '/checkout/:id',

          element: < PrivateRoute > <Checkout></Checkout></PrivateRoute >,
          loader: async ({ params }) => {
            return fetch(`https://a-10-api.vercel.app/checkhout/${params.id}`)
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
