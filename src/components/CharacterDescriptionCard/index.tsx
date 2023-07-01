import { Character } from "@/models/character-response";
import { Avatar, Container, Description, Name } from "./styles";

interface CharacterDescriptionCard{
  character: Character
}

export function CharacterDescriptionCard({character}: CharacterDescriptionCard):JSX.Element{
  return (
    <Container>
      <Avatar 
        $src={`${character.thumbnail?.path}/portrait_fantastic.${character.thumbnail?.extension}`} 
      />
      <Name>{character.name}</Name>
      <Description>
        {character.description ? character.description : "This character has no description"}
      </Description>
    </Container>
  );
}