import { Routes, Route } from "react-router-dom";

import CriarPersonagem from "../../frontend/pages/CreateCharacter";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CriarPersonagem />} />
    </Routes>
  );
}
