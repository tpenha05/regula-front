import { RouteObject } from 'react-router-dom';
import { Auth } from './auth/auth';
import { AdminLogin } from './auth/nested/adminLogin/login';
import { UserLogin } from './auth/nested/userLogin/login';
import { SelectLogin } from './auth/nested/selectLogin/select';
import { UserRegister } from './auth/nested/userRegister/register';
import { RequestPasswordReset } from './auth/nested/resetPass/RequestPasswordReset';
import { PasswordReset } from './auth/nested/resetPass/PasswordReset';
import { Home } from './main/nested/home/home';
import { Contact } from './main/nested/contact/contact';
import { About } from './main/nested/about/about';

const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "select",
        element: <SelectLogin />,
      },
      {
        path: "admin",
        element: <AdminLogin />,
      },
      {
        path: "user",
        element: <UserLogin />,
      },
      {
        path: "register",
        element: <UserRegister />,
      },
      {
        path: "reset-password",
        element: <RequestPasswordReset />,
      },
      {
        path: "reset-password/:token",
        element: <PasswordReset />,
      }
        
    ],
  },
];

export default routes;
