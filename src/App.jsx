import React, { useEffect, useRef } from 'react'
import './App.css'
import { Container, Message, Icon } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import * as THREE from 'three'

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create gradient plane
    const geometry = new THREE.PlaneGeometry(100, 100);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        colorA: { value: new THREE.Color(0x0d47a1) }, // Darker blue
        colorB: { value: new THREE.Color(0xffffff) }, // White
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorA;
        uniform vec3 colorB;
        varying vec2 vUv;
        void main() {
          vec3 color = mix(colorA, colorB, vUv.y);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.z = -5;
    scene.add(plane);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.z += 0.002; // Increased rotation speed
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="app-container">
      <div ref={containerRef} className="background-container" />
      <Navbar />
      <div className="content-container">
        <Container>
          <Message warning className="construction-message">
            <Message.Header>Website Under Construction</Message.Header>
            <p>New content and features coming soon!</p>
          </Message>
        </Container>
      </div>
    </div>
  )
}

export default App