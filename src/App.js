import { Routes, Route } from "react-router-dom";
import AdvertisePage from "./pages/AdvertisePage";
import AdvertisesPage from "./pages/AdvertisesPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<AdvertisesPage />} />
      <Route exact path="/Advertise/:advertiseId" element={<AdvertisePage />} />
    </Routes>
  );
}

export default App;
