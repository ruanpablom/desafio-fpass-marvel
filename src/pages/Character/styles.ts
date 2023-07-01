import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  color: #fefefe;
  border: none;
  padding:  0.3rem 0.5rem 0.3rem 0.3rem;
  border-radius: 2rem;
  background-color: var(--red);
  align-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap:0.2rem;
  font-weight: bold;
  font-size: 0.7rem;
`;