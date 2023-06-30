import { Character } from "@/models/character-response";
import { Container } from "./styles";
import { CharacterCard } from "../CharacterCard";

interface CharactersListProps {
  characters: Character[]
}
export function CharactersList({characters}:CharactersListProps):JSX.Element {
  return (
    <Container>
      {characters.map(character => (<CharacterCard character={character} />))}
    </Container>
  )
}