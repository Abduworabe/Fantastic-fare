import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import React from 'react'

function AnimatedBoxes() {
	return (
		<>
			<Float>
          <mesh scale={[1, 1, 1]} position={[9, -1.5, -1.5]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={1}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
			
        <Float>
          <mesh scale={[1, 1, 1]} position={[5, 1, 7]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[0.5, 0.5, 0.5]} position={[-7, -2, 5]}>
            <torusGeometry />
            <MeshDistortMaterial
              opacity={1}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
		</>
	)
}

export default AnimatedBoxes