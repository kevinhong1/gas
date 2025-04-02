import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import TransitionComponent from "../components/Transition";
import AboutPage from "../pages/AboutPage/AboutPage";
import DevWorkPage from "../pages/DevWorkPage/DevWorkPage";
import DesignWorkPage from "../pages/DesignWorkPage/DesignWorkPage";
import { Route, Routes } from "react-router";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <TransitionComponent>
            <HomePage />
          </TransitionComponent>
        }
      />
      <Route
        path="past-work"
        element={
          <TransitionComponent>
            <AboutPage />
          </TransitionComponent>
        }
      />
      <Route
        path="web-dev"
        element={
          <TransitionComponent>
            <DevWorkPage />
          </TransitionComponent>
        }
      />
      <Route
        path="about-me"
        element={
          <TransitionComponent>
            <DesignWorkPage />
          </TransitionComponent>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
