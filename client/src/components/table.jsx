import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const TableComponent = () => {
  const main = useRef(null);
  const model = useRef(null);
  let mixer = useRef(null);
  const [isHovered, setIsHovered] = useState(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color().setHSL(0.6, 0, 1);
    scene.fog = new THREE.Fog(scene.background, 1, 5000);

    const camera = new THREE.PerspectiveCamera(30, 1, 1, 5000); // Aspect ratio will be set later
    camera.position.set(0, 0, 500);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(350, 350); // Set the canvas width and height to 350px
    main.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('/table.glb', (gltf) => {
      model.current = gltf.scene.children[0];
      model.current.castShadow = true;
      model.current.receiveShadow = true;
      scene.add(model.current);

      mixer.current = new THREE.AnimationMixer(model.current);
      const action = mixer.current.clipAction(gltf.animations[0]);
      action.play();

      if (model.current) {
        model.current.addEventListener('pointerover', () => setIsHovered(true));
        model.current.addEventListener('pointerout', () => setIsHovered(false));
      }
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      if (mixer.current) mixer.current.update(0.005);
      controls.update();

      if (!isHovered && model.current) {
        const time = performance.now() * 0.001;
        const amplitude = 0.01;
        const frequency = 0.5;

        model.current.position.x = amplitude * Math.sin(time * frequency);
        model.current.position.y = amplitude * Math.cos(time * frequency);
        model.current.position.z = amplitude * Math.sin(time * frequency * 0.7);
      }
    };

    animate();

    const onWindowResize = () => {
      camera.aspect = 350 / 350; // Set the aspect ratio to 1 (square)
      camera.updateProjectionMatrix();
      renderer.setSize(350, 350); // Update the renderer size to 350px
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      main.current.removeChild(renderer.domElement);
      if (model.current) {
        model.current.removeEventListener('pointerover', () => setIsHovered(true));
        model.current.removeEventListener('pointerout', () => setIsHovered(false));
      }
    };
  }, []);

  return (
    <>
      <div className="canvas demo table" ref={main}></div>
    </>
  );
};

export default TableComponent;