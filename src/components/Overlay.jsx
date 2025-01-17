import { Scroll } from '@react-three/drei'
import React from 'react'

function Overlay() {
	return (
		
		<Scroll html >

			
			<div className='blocks block-1'>
				<h1>ABDULKERIM - Software Engineer & Three.js Expert</h1>
				
			</div>
			
			<div  className='photo'>
				<img src="https://avatars.githubusercontent.com/u/170974142?v=4" alt="" />
				
			</div>
			<div className='paragra'>
			<p>
        <strong>Hi</strong>, I'm <span  className='name'>Abdulkerim juhar</span>, a passionate Software Engineer with a mastery of Three.js. I specialize in creating immersive 3D experiences and interactive web applications that captivate users. With a strong foundation in software development and a keen eye for design, I bring ideas to life through innovative solutions. Let's explore the intersection of technology and creativity together!
      </p>
			</div>
		
				<div className='blocks block-2' style={{ position: "absolute", top: '100vh' }}>
					
					<div className="box">
						<h1>Join our community</h1> 
						<p>And feel free to share your works</p> 
						<a href="https://t.me/W3SSU"><button> <img src="/tele.png" alt="" />Telegram</button></a>
					</div>
					<div className="box">
						<h1>Look like amazing</h1> 
						<p>Follow for other videos with link</p> 
						<button> <img src="/insta.png" alt="" />Instagram</button>
						
					</div>
				</div>
				<div className='blocks block-3' style={{ position: "absolute", top: '200vh' }}>
					<h1> <img src="src/components/unnamed.webp" alt="" />
					Arba Minch University</h1>
				</div>
				<div className='blocks block-4' style={{ position: "absolute", top: '300vh' }}>
					<div className="box">
						<h1>Contact: <span>+</span>251982580952</h1>
						<a href="https://t.me/W3SSU"><h1>Telegram:@W3SSU</h1></a>
						<h1>Instagram: @Abdulkerim-wor</h1>
						<h1>Youtube: @W3SSUtrev</h1>
					</div>
				</div>
		</Scroll>
	)
}

export default Overlay
