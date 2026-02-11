import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index/Index";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
