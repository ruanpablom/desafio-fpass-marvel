import { styled } from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 1rem;
  border-radius: 0.2rem;
  align-items: center;
  width: 10rem;
  position: relative;
  background: linear-gradient(to bottom, var(--bg-secondary) 0%, var(--bg-secondary) 50%, var(--bg-red) 50%, var(--bg-red) 100%);
  background-size: 100% 200%;
  background-position: 0% 0%;
  transition: background-position 350ms ease;

  &:hover {
    background-position: 0% -100%;
    cursor: pointer;
    transition: 350ms;
  }

`;

export const Body = styled.div`
  width: 100%;
  min-height: 10rem;

  &::after{
    border-bottom-color: var(--bg-primary);
    border-left-color: var(--bg-primary);
    border-right-color: var(--bg-primary);
    border-style: solid;
    border-top-color: rgba(0,0,0,0);
    border-width: 12px 12px 0 0;
    bottom: 0;
    content: "";
    position: absolute;
    right: 0;
    top: auto;
    z-index: 40;
  }
`;

export const Thumb = styled.img`
  width: inherit;
  border-bottom: 0.5rem solid var(--bg-red);
`

export const Name = styled.h2`
  color: #FEFEFE;
  text-transform: uppercase;
  margin: 0;
  font-size: 1rem;
  padding: 1rem;
`