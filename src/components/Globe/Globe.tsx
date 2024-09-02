import { useRef, useEffect } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import * as THREE from "three";

const CLOUDS_IMG_URL = "/assets/clouds.png";
const CLOUDS_ALT = 0.004;
const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

const MyGlobe = () => {
  const globeRef = useRef<GlobeMethods>();

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {

      // Set up auto-rotation
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;

      // Add clouds
      const cloudsGeometry = new THREE.SphereGeometry(
        globe.getGlobeRadius() * (1 + CLOUDS_ALT),
        75,
        75
      );
      new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
        const cloudsMaterial = new THREE.MeshPhongMaterial({
          map: cloudsTexture,
          transparent: true,
        });
        const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
        globe.scene().add(clouds);

        function rotateClouds() {
          clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
          requestAnimationFrame(rotateClouds);
        }
        rotateClouds();
      });
    }
  }, []);

  return (
    <div className="globe-container fluid-container">
      <Globe
        ref={globeRef}
        animateIn={false}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      />
    </div>
  );
};

export default MyGlobe;
