import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: linear-gradient(to right, #6366f1, #38bdf8);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(56, 189, 248, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 30px rgba(99, 102, 241, 0.5);
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
