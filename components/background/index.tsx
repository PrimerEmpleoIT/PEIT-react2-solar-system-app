import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import configParticles from "./particles.json";
const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={configParticles}
    />
  );
};
export default BackgroundParticles;
