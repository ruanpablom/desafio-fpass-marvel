import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--bg-secondary);
  width: 18rem;
  align-items: center;
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const Avatar = styled.img<{$src?: string}>`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-image: url(${props => props.$src});
  background-repeat: no-repeat;
  border: 0.2rem solid #fefefe;
`;

export const Name = styled.h2`
  color: #fefefe;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  font-size: 1.2rem;
`;

export const Description = styled.span`
  color: #FEFEFE;
  margin: 0;
  text-align: center;
`
