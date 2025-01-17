import { Text3D, useMatcapTexture } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

const Creator = () => {
  const [matcapTexture] = useMatcapTexture('E1E1D4_777C7B_9FA19A_898F8D', 256);
  const material = new THREE.MeshMatcapMaterial();

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.color.set("#b0e910"); // Change this to your desired color (e.g., red)
    material.needsUpdate = true;
  }, [matcapTexture]);

  const memoizedCreator = React.useMemo(() => {
    return (
      <group castShadow position={[-6.7, 0, 0]} scale={1.2}>
        {"Abdulkerim"?.split("")?.map((item, index) => (
          <Text3D
            key={index}
            font="./fonts/Rowdies.json"
            size={1}
            height={0.5}
            material={material}
            curveSegments={20}
            bevelEnabled
            castShadow
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[index / 0.8, -4, 3]}
            rotation-y={0}
            rotation-x={-0.6}
            maxWidth={1}
          >
            {item}
          </Text3D>
        ))}
        
      </group>
      
    );
  }, [material]);

  return memoizedCreator;
};

export default React.memo(Creator);