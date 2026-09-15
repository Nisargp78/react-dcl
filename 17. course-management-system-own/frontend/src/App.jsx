import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import CourseList from "./pages/CourseList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddCourse from "./pages/AddCourse";
import PageNotFound from "./pages/PageNotFound";
import CourseDetails from "./pages/CourseDetails";
import PrivateRoute from "./Routes/PrivateRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import UserContext from "./context/UserContext";
import CourseContext from "./context/CourseContext";
import { Toaster } from "react-hot-toast";

let myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <CourseList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/addcourse",
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "/course/:id",
        element: (
          <ProtectedRoute>
            <CourseDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <UserContext>
      <CourseContext>
        <RouterProvider router={myRouter} />
      </CourseContext>
      <Toaster />
    </UserContext>
  );
};

export default App;
