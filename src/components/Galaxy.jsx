// src/Galaxy.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Galaxy = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Stars
        radius={100} // Radius of the star field
        depth={50} // Depth of the star field
        count={5000} // Number of stars
        factor={4} // Size factor
        saturation={0} // Saturation of the stars
        fade // Fade effect
      />
    </Canvas>
  );
};

export default Galaxy;