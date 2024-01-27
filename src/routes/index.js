import { CardContainer } from "components/CardContainer/CardContainer";
import { CardSkeleton } from "components/CardSkeleton/CardSkeleton";
import { Hero } from "components/Hero/Hero";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return(
  <Routes>
    <Route index element={<Hero />} />
    <Route path="/characters/page/:page" element={<CardContainer />} />
  </Routes>
  );
};

export { AppRoutes };
