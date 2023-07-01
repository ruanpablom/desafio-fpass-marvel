import { useRef } from "react";
import { Container, SearchInput } from "./styles";
import { Search as SearchIcon } from 'react-feather'

export interface SearchProps {
  onSearch: (nameStartsWith: string, offset?: number, limit?:number ) => void
}

export function Search({onSearch}: SearchProps): JSX.Element {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <SearchInput id="input-search" type="text" placeholder="Nome do herói" ref={searchInputRef} />
      <button onClick={() => onSearch(searchInputRef.current ? searchInputRef.current.value : ' ' , 0, 20)}>
        <SearchIcon size={24}/>
      </button>
    </Container>
  )
}