import { Canvas } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import './Scene3D.css'

// Torus (Donut) component
function Torus({ position, color, scale = 1, rotationSpeed = 0.5 }: {
  position: [number, number, number]
  color: string
  scale?: number
  rotationSpeed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.2
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 32, 64]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.1}
        />
      </mesh>
    </Float>
  )
}

// Sphere component
function Sphere({ position, color, scale = 1 }: {
  position: [number, number, number]
  color: string
  scale?: number
}) {
  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={1.5}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.2} 
          metalness={0.1}
        />
      </mesh>
    </Float>
  )
}

// Rounded Box component
function RoundedBox({ position, color, scale = 1, rotationSpeed = 0.3 }: {
  position: [number, number, number]
  color: string
  scale?: number
  rotationSpeed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 0.15
    }
  })
  
  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.1}
        />
      </mesh>
    </Float>
  )
}

// Capsule component
function Capsule({ position, color, scale = 1, rotation = [0, 0, 0] as [number, number, number] }: {
  position: [number, number, number]
  color: string
  scale?: number
  rotation?: [number, number, number]
}) {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh position={position} scale={scale} rotation={rotation}>
        <capsuleGeometry args={[0.5, 1, 16, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.25} 
          metalness={0.1}
        />
      </mesh>
    </Float>
  )
}

// Main 3D Scene with all shapes
function Shapes() {
  return (
    <group>
      {/* Hero section shapes - right side cluster */}
      <Torus position={[4, 2, -2]} color="#A7D7C5" scale={0.8} rotationSpeed={0.4} />
      <Torus position={[5.5, 0.5, -1]} color="#C4B5E0" scale={1.1} rotationSpeed={0.3} />
      <Sphere position={[6, 2.5, -3]} color="#F5C7B8" scale={0.6} />
      <Sphere position={[3.5, 0, -2]} color="#F5C7B8" scale={0.4} />
      <RoundedBox position={[5, -1, -2]} color="#9ED5E8" scale={0.5} />
      <Capsule position={[4.5, 1.5, -1.5]} color="#C4B5E0" scale={0.4} rotation={[0.5, 0.3, 0.2]} />
      
      {/* Floating shapes on left side */}
      <Sphere position={[-5, 1, -3]} color="#A7D7C5" scale={0.5} />
      <Torus position={[-4, -1, -2]} color="#F5C7B8" scale={0.6} rotationSpeed={0.5} />
      
      {/* Additional scattered shapes */}
      <Sphere position={[0, -3, -4]} color="#C4B5E0" scale={0.4} />
      <RoundedBox position={[-3, 3, -5]} color="#9ED5E8" scale={0.4} rotationSpeed={0.2} />
      <Torus position={[3, -4, -3]} color="#A7D7C5" scale={0.5} rotationSpeed={0.6} />
      
      {/* Background shapes */}
      <Sphere position={[-6, -2, -6]} color="#F5C7B8" scale={0.8} />
      <Torus position={[7, -3, -5]} color="#C4B5E0" scale={0.7} rotationSpeed={0.25} />
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="scene3d-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
          />
          <directionalLight 
            position={[-5, 5, 5]} 
            intensity={0.5} 
            color="#C4B5E0"
          />
          <pointLight position={[0, -5, 5]} intensity={0.3} color="#F5C7B8" />
          
          <Shapes />
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}

