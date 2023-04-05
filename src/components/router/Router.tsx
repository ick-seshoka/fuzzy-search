import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "../../enums";

import Search from "../../pages/search";

const Router = () => {
  return (
    <Routes>
      <Route path={routes.search} element={<Search />} />
    </Routes>
  );
};

export default Router;
