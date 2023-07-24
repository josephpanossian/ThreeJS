import { AmbientLight, DirectionalLight, HemisphereLight, Light } from "three";

function createLights() {
  // multiply light intensity by PI to match legacyLight values with PBR
  const ambientLight = new HemisphereLight(
    "white",
    "darkslategray",
    3 * Math.PI
  );

  const mainLight = new DirectionalLight("white", 2 * Math.PI);
  mainLight.position.set(10, 10, 10);
  return { ambientLight, mainLight };
}

export { createLights };
