import { Character } from "@/models/character-response";
import { Body, Container, Name, Thumb } from "./styles";

interface CharacterCardProps {
  character: Character
}
export function CharacterCard({character}:CharacterCardProps): JSX.Element {
  const {name, thumbnail, id} = character;

  return (
    <Container href={`/character/${id}`}>
      <Thumb src={`${thumbnail?.path}/portrait_fantastic.${thumbnail?.extension}`} alt={`${name} thumb`} />
      <Body>
        <Name>{name}</Name>
      </Body>
    </Container>
  )
}