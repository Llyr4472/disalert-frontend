import MyGlobe from "./components/Globe";
import Navbar from "./components/Navbar";
import Alerts from "./components/Alerts";
import Modal from "./components/Modal";
import Login from "./components/Login";

import { Alert } from "./types";
import {
  Route,
  Routes,
  Navigate,
  } from "react-router-dom";
import Signup from "./components/Signup";

const App = () => {

  const handleSearch = (searchTerm: string) => {
    console.log("Search:", searchTerm);
  };

  const handleFilter = (type: string) => {
    console.log("Filter:", type);
  };

  const handleAlertClick = (alert: any) => {
    console.log("Alert clicked:", alert);
  };
    const recentAlerts: Alert[] = [
      { type: "Earthquake", location: "Nepal", time: "2024-09-02", latitude: 28.3949, longitude: 84.1240, severity: "High" },
      { type: "Flood", location: "Bangladesh", time: "2024-09-01", latitude: 23.6850, longitude: 90.3563, severity: "Medium" },
      { type: "Wildfire", location: "California, USA", time: "2024-08-30", latitude: 36.7783, longitude: -119.4179, severity: "Critical" },
      { type: "Hurricane", location: "Florida, USA", time: "2024-08-28", latitude: 27.9944, longitude: -81.7603, severity: "High" },
      { type: "Tsunami", location: "Japan", time: "2024-08-25", latitude: 36.2048, longitude: 138.2529, severity: "High" },
      { type: "Volcanic Eruption", location: "Indonesia", time: "2024-08-22", latitude: -0.7893, longitude: 113.9213, severity: "High" },
      { type: "Landslide", location: "Peru", time: "2024-08-20", latitude: -9.1900, longitude: -75.0152, severity: "Medium" },
      { type: "Drought", location: "Ethiopia", time: "2024-08-15", latitude: 9.1450, longitude: 40.4897, severity: "Low" },
      { type: "Tornado", location: "Oklahoma, USA", time: "2024-08-10", latitude: 35.4676, longitude: -97.5164, severity: "High" },
      { type: "Blizzard", location: "Canada", time: "2024-08-05", latitude: 56.1304, longitude: -106.3468, severity: "Medium" },
    ];

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={
          <>
            <div id="app-root">
              <MyGlobe recentAlerts={recentAlerts} />
              <Navbar
                onSearch={handleSearch}
                onFilter={handleFilter}
                onAlertClick={handleAlertClick}
              />
              <Alerts recentAlerts={recentAlerts} />
            </div>
            <div id="modal-root">
              <Modal />
            </div>
          </>
        }
      />
    </Routes>
  );
};

export default App;
