import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayoutComponent from "./components/NavLayoutComponent";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import MealsPage from "./page/MealsPage";
import MealDetailsPage from "./page/MealDetailsPage";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayoutComponent />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/meals" element={<MealsPage />} />

            <Route path="/meals/:id" element={<MealDetailsPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
