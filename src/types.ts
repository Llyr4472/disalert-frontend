export interface Alert {
    type: string;
    location: string;
    time: string;
    latitude: number;
    longitude: number;
    severity: "Low" | "Medium" | "High" | "Critical";
  }
  