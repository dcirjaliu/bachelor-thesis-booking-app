import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index/Index";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/accountPages/Home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/serviceDetails/:id" element={<ServiceDetails />} />
          <Route path="/account/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
