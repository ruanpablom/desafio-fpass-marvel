import { Container, SearchInput } from "./styles";
import { Search as SearchIcon } from 'react-feather'

export function Search(): JSX.Element {
  return (
    <Container>
      <SearchInput id="input-search" type="text" placeholder="Nome do herói" />
      <button>
        <SearchIcon size={28}/>
      </button>
    </Container>
  )
}