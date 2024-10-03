import { useRef, useEffect, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { Alert } from "../types";
import * as THREE from "three";
import { red } from "@mui/material/colors";

const CLOUDS_IMG_URL = "/assets/clouds.png";
const CLOUDS_ALT = 0.004;
const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

interface MyGlobeProps {
  recentAlerts: Alert[];
}

const MyGlobe = ({recentAlerts}: MyGlobeProps) => {
  const globeRef = useRef<GlobeMethods>();
  const [globeSize, setGlobeSize] = useState({ width: 0, height: 0 });
    const Data = recentAlerts.map(alert => ({
      lat: alert.latitude,
      lng: alert.longitude,
      maxR: 10,
      severity: alert.severity,
      propagationSpeed: 1,
      repeatPeriod: 1000,
    }));

  const getTooltip = (d:any)=> `
    <div style="text-align: center">
      <div><b>${d.type}</b>, ${d.location}</div>
      <div>Severity: <em>${d.severity}</em></div>
      <div>Date: <em>${d.time}</em></div>
      <div>${d.latitude},${d.longitude}</div>
    </div>
  `;

  useEffect(() => {
    const handleResize = () => {
      setGlobeSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      // Set up auto-rotation
      globe.controls().autoRotate = false;
      globe.controls().autoRotateSpeed = 0.5;
      
      // // Add clouds
      // const cloudsGeometry = new THREE.SphereGeometry(
      //   globe.getGlobeRadius() * (1 + CLOUDS_ALT),
      //   75,
      //   75
      // );
      // new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      //   const cloudsMaterial = new THREE.MeshPhongMaterial({
      //     map: cloudsTexture,
      //     transparent: true,
      //   });
      //   const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
      //   globe.scene().add(clouds);

      //   function rotateClouds() {
      //     clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
      //     requestAnimationFrame(rotateClouds);
      //   }
      //   rotateClouds();
      // });
    }
  }, []);

  return (
    <div className="globe-container fluid-container">
      <Globe
        ref={globeRef}
        animateIn={true}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        width={globeSize.width}
        height={globeSize.height}
        ringsData={Data}
              ringColor={(d:any) => {
                switch (d.severity) {
                  case 'Low':
                    return (t: number) => `rgba(255, 255, 0, ${1-t})`
                  case 'Medium':
                    return (t: number) => `rgba(255, 165, 0, ${1-t})`
                  case 'High':
                    return (t: number) => `rgba(255, 69, 0, ${1-t})`
                  case 'Critical':
                    return (t: number) => `rgba(255, 0, 0, ${1-t})`
                  default:
                    return (t: number) => `rgba(128, 128, 128, ${1-t})`
                }
              }}
              ringMaxRadius="maxR"        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"

        labelsData={recentAlerts}
        labelLat="latitude"
        labelLng="longitude"
        labelDotRadius={0.25}
        labelDotOrientation={() => 'bottom'}
        labelColor={(d:any) => {
          switch (d.severity) {
            case 'Low':
              return `rgba(255, 255, 0, 0.7)`
            case 'Medium':
              return `rgba(255, 165, 0, 0.7)`
            case 'High':
              return `rgba(255, 69, 0, 0.7)`
            case 'Critical':
              return `rgba(255, 0, 0, 0.7)`
            default:
              return `rgba(128, 128, 128, 0.7)`
          }
        }}
        labelText="type"
        labelSize={0.15}
        labelResolution={1}
        labelLabel={getTooltip}

      />
    </div>
  );
};
export default MyGlobe;