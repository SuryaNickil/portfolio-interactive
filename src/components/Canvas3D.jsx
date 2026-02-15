import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Canvas3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    // Create floating cubes
    const cubes = [];
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    
    for (let i = 0; i < 20; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() * 0xffffff,
        emissive: 0x0a84ff,
        wireframe: true,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      cube.velocity = {
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.05,
      };
      scene.add(cube);
      cubes.push(cube);
    }

    // Lighting
    const light = new THREE.PointLight(0x0a84ff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      cubes.forEach((cube) => {
        cube.rotation.x += cube.velocity.x;
        cube.rotation.y += cube.velocity.y;
        cube.rotation.z += cube.velocity.z;

        cube.position.x += cube.velocity.x * 2;
        cube.position.y += cube.velocity.y * 2;
        cube.position.z += cube.velocity.z * 2;

        // Bounce off boundaries
        if (Math.abs(cube.position.x) > 8)
          cube.velocity.x *= -1;
        if (Math.abs(cube.position.y) > 8)
          cube.velocity.y *= -1;
        if (Math.abs(cube.position.z) > 8)
          cube.velocity.z *= -1;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen opacity-40 pointer-events-none"
    />
  );
}
