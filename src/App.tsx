import "./global.css";
import MyGlobe from "./components/Globe/Globe";
import Navbar from "./components/Navbar";
import Alerts from "./components/Alerts";
import Modal from "./components/Modal";


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
  ];

  return (
    <div>
      <MyGlobe />
      <Navbar
        onSearch={handleSearch}
        onFilter={handleFilter}
        onAlertClick={handleAlertClick}
      />
      <Alerts recentAlerts={recentAlerts} />
      <Modal />
    </div>
  );
};
export default App;
