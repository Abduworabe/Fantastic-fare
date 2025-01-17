// Particles.js
import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const particlesRef = useRef();
  const [texture, setTexture] = useState(null);
  const count = 1000; // Number of particles



 // Load the texture using THREE.TextureLoader
 useEffect(() => {
  const loader = new THREE.TextureLoader();
  loader.load(
    'src/components/blank-heart-love-hd-png-28.png', // Replace with your texture path
    (loadedTexture) => {
      setTexture(loadedTexture);
    },
    undefined,
    (error) => {
      console.error('An error occurred while loading the texture:', error);
    }
  );
}, []);
  // Create an array of positions for the particles
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3); // Array for colors

  for (let i = 0; i < count; i++) {
    // Random positions
    positions[i * 3] = (Math.random() - 0.5) * 30; // X position
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30; // Y position
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30; // Z position

    // Random colors
    colors[i * 3] = Math.random(); // R
    colors[i * 3 + 1] = Math.random(); // G
    colors[i * 3 + 2] = Math.random(); // B
  }

  // Create a buffer geometry for the particles
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); // Set colors

  // Create a material for the particles
  const material = new THREE.PointsMaterial({
    size: 0.3,
    sizeAttenuation: true,
    vertexColors: true, // Enable vertex colors
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    map: texture,
  });

  // Animate the particles
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.001; // Rotate the particles
    }
  });

  return (
    <points ref={particlesRef} args={[geometry, material]} />
  );
};

export default Particles;