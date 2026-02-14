import React from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
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
import { Reserve } from "./screens/Reserve";
import { PrivacyPolicy } from "./screens/PrivacyPolicy";
import { CastDetail } from "./screens/CastDetail";
import { AboutEvents } from "./screens/AboutEvents";
import { AboutMvCm } from "./screens/AboutMvCm";
import { AboutEquipment } from "./screens/AboutEquipment";
import { AboutStudioRental } from "./screens/AboutStudioRental";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Top />,
      },
      {
        path: "/top",
        element: <Top />,
      },
      {
        path: "/admin",
        element: <Navigate to="/admin/login" replace />,
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
      {
        path: "/reserve",
        element: <Reserve />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cast/:id",
        element: <CastDetail />,
      },
      {
        path: "/about/events",
        element: <AboutEvents />,
      },
      {
        path: "/about/mv-cm",
        element: <AboutMvCm />,
      },
      {
        path: "/about/equipment",
        element: <AboutEquipment />,
      },
      {
        path: "/about/studio-rental",
        element: <AboutStudioRental />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
