import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FrameScreen } from "./screens/FrameScreen";
import { Screen } from "./screens/Screen";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { ScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper } from "./screens/ScreenWrapper";
import { Top } from "./screens/Top";
import { AdminLogin } from "./screens/Admin/AdminLogin";
import { AdminDashboard } from "./screens/Admin/AdminDashboard";
import { DrinkMenu } from "./screens/DrinkMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
  },
  {
    path: "/top",
    element: <Top />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/frame-695",
    element: <FrameScreen />,
  },
  {
    path: "/u12481u12483u12501u12442u12395u12388u12356u12390",
    element: <Screen />,
  },
  {
    path: "/u12467u12531u12479u12463u12488",
    element: <ScreenScreen />,
  },
  {
    path: "/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531",
    element: <ScreenWrapper />,
  },
  {
    path: "/u27714u20154",
    element: <Screen5 />,
  },
  {
    path: "/u12465u12441u12473u12488u27969u12428",
    element: <Screen6 />,
  },
  {
    path: "/u12461u12515u12473u12488",
    element: <Screen7 />,
  },
  {
    path: "/drink",
    element: <DrinkMenu />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
