import React from 'react';
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import Course from './Components/Course/Course';
import CourseMain from './Components/Course/CourseMain';
import Details from './Components/Course/Details';
import MainContent from './Components/Home/MainContent';
import Login from './Components/Login';
import Blog from './Components/Blog/Blog';
import FAQ from './Components/FAQ/FAQ';
import Main from './layout/Main';
import Err404 from './404';
import Register from './Components/Register';
import Primium from './Components/premium/Primium';
import PrivateRoute from './privateRoute/PrivateRoute'
import  { Toaster } from 'react-hot-toast';

function App(props) {
const url = "https://mr-rocks-server.vercel.app/"
  const router =  createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
                {
                  path: "/",
                  element: <MainContent></MainContent>
                },
                {
                  path: "/blog",
                  element: <Blog></Blog>
                },
                {
                  path: "/faq",
                  element: <FAQ></FAQ>
                },
                {
                  path: "/login",
                  element: <Login></Login>
                },
                {
                  path: "/register",
                  element: <Register> </Register>
                },
                {
                  path: "/checkout/:courseId",
                  element: <PrivateRoute>  <Primium> </Primium> </PrivateRoute>,
                  loader : async ({ params }) =>fetch(`${url}/course/${params.courseId}`)
                },
                {
                  path: "/course",
                  element: <CourseMain> </CourseMain>,
                  children: [
                              {
                                path:"",
                                element: <Course></Course>,
                                loader : async () =>fetch(`${url}/courses`)
                              },
                              {
                                path: ":courseId",
                                element: <Details> </Details>,
                                loader : async ({ params }) =>fetch(`${url}/course/${params.courseId}`)
                              }
                  ]
                },
                {
                  path : "/*",
                  element: <Err404></Err404>
                }
      ]
    },
  ]);
  return (
    <div>


<Toaster position="top-center"reverseOrder={false}/>
        <RouterProvider router={router} /> 
    </div> 
  );
}

export default App;