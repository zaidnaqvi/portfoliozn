// src/components/ui/Loader.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { FaLink } from "react-icons/fa"; // Icon from react-icons

// Spin animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000; /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const SpinningIcon = styled(FaLink)`
  font-size: 70px;
  color: white;
  animation: ${spin} 1s linear infinite;
  text-shadow: 0 0 15px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 0.8),
    0 0 50px rgba(0, 255, 255, 0.6);
  transition: all 0.2s ease;
  &:hover {
    text-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 1),
      0 0 60px rgba(0, 255, 255, 0.7);
  }
`;

const LoaderText = styled.div`
  color: white;
  font-size: 1.2rem;
  margin-top: 20px;
  text-align: center;
  font-family: "Orbitron", sans-serif; /* Futuristic font */
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.8),
    0 0 40px rgba(0, 255, 255, 0.6);
  animation: neonText 1.5s ease-in-out infinite alternate;
`;

const neonText = keyframes`
  0% { text-shadow: 0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6); }
  50% { text-shadow: 0 0 15px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 255, 255, 0.7); }
  100% { text-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 255, 255, 0.9); }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="text-center">
        <SpinningIcon />
        <LoaderText>Loading Portfolio...</LoaderText>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
