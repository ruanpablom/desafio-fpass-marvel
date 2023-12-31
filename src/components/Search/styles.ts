import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  button{
    border: none;
    background-color: var(--red);

    svg{
      padding: 0.2rem;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 1.2rem;
  border: 0.2rem solid var(--red);
  border-right: none;
  font-size: 1rem;
  padding: 0.5rem;

  &:focus-visible{
    outline: none;
  }

`;