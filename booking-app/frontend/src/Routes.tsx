import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index/Index";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/servicedetails" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
