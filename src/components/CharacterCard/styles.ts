import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #3b3b3b;
  border-radius: 0.2rem;
  align-items: center;
  max-width: 11rem;
  min-height: 25rem;

  &:hover {
    background-position: 0% -100%;
    cursor: pointer;
    transform: scale(1.1);
    transition: 350ms;
    box-shadow: 0 6px 6px 4px var(--shadow);
  }
`;

export const Thumb = styled.img`
`

export const Name = styled.h2`
  color: #FEFEFE;
  margin: 0;
  font-size: 1.4rem;
  padding:1rem;
`