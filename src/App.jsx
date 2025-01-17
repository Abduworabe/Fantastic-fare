import {Text, PresentationControls, Float, Environment, ContactShadows, Html, OrbitControls, Scroll, ScrollControls, useScroll , useGLTF} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

import Model from './components/Model'
import Creator from './components/Text'
import Tree from './components/Tree'
import AnimatedBoxes from './components/AnimatedBoxes'
import Overlay from './components/Overlay'
import Avatar from './components/Avatar'
import Particles from './components/particles'
import Header from './components/Header'

function App() {
	const ref = useRef()
	const refTorus = useRef()
	useFrame(()=>{
	
	})
const compuuter=useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
	return (<>
	
	 <Particles />
	 

    
	
<Environment preset='city'></Environment>
	<color args={['#695b5b']} attach="background"></color>
<PresentationControls  global  polar={[-0.4, 0.2]} 
 azimuth={[-0.3, 0.75]}
 config={{mass:2, tension:400}}
 snap={{mass:8, tension:400}}>
	
	
<Float rotationIntensity={0.4}  scale={[5, 4, 3]}>
	<rectAreaLight width={2.5} height={1.65} intensity={65} color={'#87cee'} rotation={[0.1, Math.PI, 0]}  position={[0, 0.55, -1.15]}/>
	<primitive object={compuuter.scene}
	
	position-y={-1.2}
	width={100}
></primitive>

<Html transform position={[0, 0.35, -1.4]} rotation-x={-0.256}  wrapperClass='htmlScreen' distanceFactor={1.17} className='iframes'> 
<iframe src='index.html'></iframe></Html>


</Float>
	
</PresentationControls>

<ContactShadows position-y={-1.4}  opacity={0.4} scale={5} blur={2.4}/>

		<ScrollControls  pages={4} damping={0.4} >
			
			<Model />
			<Avatar  position-x={-6} />
				<AnimatedBoxes />
			<ContactShadows blur={0} scale={20} far={10} resolution={256} />
			<Creator />
			<Tree />
			<Scroll>
				<OrbitControls enableZoom={false}/>
				<directionalLight
					intensity={1.5}
					position={[1, 2, 3]}
					castShadow
					color={"white"}
					shadow-mapSize={[2024,2024]}
					/>
				<ambientLight intensity={1}  />
				<pointLight position={[10, 10, 10]} />
			</Scroll>
		  <Overlay />
		</ScrollControls>
					</>
	)

	
}
export default App
