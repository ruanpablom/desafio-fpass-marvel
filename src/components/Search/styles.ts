import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  /* input {
    width: 100%;
    height: 2rem;
    border: 2px solid var(--bg-red);
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  input:focus-visible{
    outline: none;
  } */

  button{
    border: none;
    background-color: var(--bg-red);

    svg{
      padding: 0.2rem;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 2px solid var(--bg-red);
  font-size: 1.5rem;
  padding: 0.5rem;

  &:focus-visible{
    outline: none;
  }

`;