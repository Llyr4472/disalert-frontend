import MyGlobe from "./components/Globe";
import Navbar from "./components/Navbar";
import Alerts from "./components/Alerts";
import Modal from "./components/Modal";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
import Signup from "./components/Signup";

interface Alert {
  type: string;
  location: string;
  time: string;
}

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
    { type: "Earthquake", location: "Nepal", time: "2024-09-02" },
    { type: "Flood", location: "Bangladesh", time: "2024-09-01" },
    { type: "Wildfire", location: "California, USA", time: "2024-08-30" },
    { type: "Hurricane", location: "Florida, USA", time: "2024-08-28" },
    { type: "Tsunami", location: "Japan", time: "2024-08-25" },
    { type: "Volcanic Eruption", location: "Indonesia", time: "2024-08-22" },
    { type: "Landslide", location: "Peru", time: "2024-08-20" },
    { type: "Drought", location: "Ethiopia", time: "2024-08-15" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={
            <>
              <div id="app-root">
                <MyGlobe />
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
    </Router>
  );
};

export default App;
