import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  background: var(--bg-secondary);
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  align-items: center;
`

export const Name = styled.h2`
  color: #FEFEFE;
  text-transform: uppercase;
  margin: 0;
  font-size: 1rem;
`

export const Thumb = styled.img`
  width: 5rem;
`