import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
`;

export const Content = styled.section`
  display: flex;
  width: calc(100% - 4rem);
  padding: 0rem 2rem;
`;