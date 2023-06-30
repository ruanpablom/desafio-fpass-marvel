import { Character } from "@/models/character-response";
import { Container, Name, Thumb } from "./styles";

interface CharacterCardProps {
  character: Character
}
export function CharacterCard({character}:CharacterCardProps): JSX.Element {
  const {name, thumbnail} = character;
  return (
    <Container>
      <Thumb src={`${thumbnail?.path}/portrait_fantastic.${thumbnail?.extension}`} alt={`${name} thumb`} />
      <Name>{name}</Name>
    </Container>
  )
}