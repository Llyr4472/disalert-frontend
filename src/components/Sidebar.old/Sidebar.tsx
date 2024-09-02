import { useState, ChangeEvent } from "react";
import "./Sidebar.css";

interface Alert {
  type: string;
  location: string;
  time: string;
}

interface LeftSidebarProps {
  onSearch: (searchTerm: string) => void;
  onFilter: (type: string) => void;
  recentAlerts: Alert[];
  onAlertClick: (alert: Alert) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  onSearch,
  onFilter,
  recentAlerts,
  onAlertClick,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (type: string) => {
    onFilter(type);
  };

  return (
    <div className="left-sidebar">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search location or disaster type..."
        />
      </div>

      <div className="filters">
        <h4>Filter Alerts</h4>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange("Earthquake")}
          />
          Earthquake
        </label>
        <label>
          <input type="checkbox" onChange={() => handleFilterChange("Flood")} />
          Flood
        </label>
        <label>
          <input type="checkbox" onChange={() => handleFilterChange("Fire")} />
          Fire
        </label>
      </div>

      <div className="recent-alerts">
        <h4>Recent Alerts</h4>
        <ul>
          {recentAlerts.map((alert, index) => (
            <li key={index} onClick={() => onAlertClick(alert)}>
              <strong>{alert.type}</strong>: {alert.location} at {alert.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
