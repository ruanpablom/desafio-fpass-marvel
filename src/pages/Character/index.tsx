import { CharacterDataContainer } from "@/models/character-response";
import { useGetCharacter } from "@/services/get-character";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Container } from "./styles";

export function Character(): JSX.Element {
  const { id } = useParams();
  const [getCharacter] = useGetCharacter();
  const [characterResult, setCharacterResult] = useState<CharacterDataContainer | null>({})

  useEffect(() => {
    getCharacter(Number(id)).then(result => setCharacterResult(result));
  }, []);

  const character = characterResult?.results?.[0];

  return (
    <Container>
      {character ? 
        (
          <img 
            src={`${character.thumbnail?.path}/portrait_fantastic.${character.thumbnail?.extension}`} 
            alt={`${character.name} Thumb`} 
          />
        ) : ''
      }
      
    </Container>
  );
}