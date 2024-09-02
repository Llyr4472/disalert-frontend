import React, { useState } from 'react'

interface Alert {
  type: string;
  location: string;
  time: string;
}

interface AlertsProps {
  recentAlerts: Alert[];
}

function Alerts({ recentAlerts }: AlertsProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="container-fluid" style={{
      backgroundColor: '#000',
      color: '#0f0',
      fontFamily: 'monospace',
      padding: '20px',
      position: 'fixed',
      right: '20px',
      bottom: '20px',
      width: '300px',
      maxHeight: isMinimized ? '60px' : '400px',
      overflowY: 'auto',
      borderRadius: '15px',
      boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
      transition: 'max-height 0.3s ease-in-out'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h2 style={{ borderBottom: '1px solid #0f0', paddingBottom: '10px', fontSize: '18px', margin: 0 }}>Recent Alerts</h2>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          style={{
            background: 'none',
            border: 'none',
            color: '#0f0',
            cursor: 'pointer',
            fontSize: '20px',
            padding: '5px'
          }}
        >
          {isMinimized ? '+' : '-'}
        </button>
      </div>
      {!isMinimized && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {recentAlerts.map((alert, index) => (
            <li key={index} style={{ marginBottom: '10px', fontSize: '14px' }}>
              <span style={{ color: '#ff0' }}>[{alert.time}]</span> <span style={{ color: '#f0f' }}>{alert.type}</span>: {alert.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alerts