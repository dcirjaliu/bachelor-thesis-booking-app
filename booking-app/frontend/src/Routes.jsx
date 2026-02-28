import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index/Index";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout/AuthenticatedLayout";
import Home from "./pages/accountPages/Home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/serviceDetails/:id" element={<ServiceDetails />} />

          <Route element={<AuthenticatedLayout />}>
            <Route path="/account/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
