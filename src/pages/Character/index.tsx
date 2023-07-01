import { CharacterDataContainer } from "@/models/character-response";
import { useGetCharacter } from "@/services/get-character";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BackButton, Container } from "./styles";
import { CharacterDescriptionCard, ComicsList } from "@/components";
import {ArrowLeft} from 'react-feather'
import { useGetCharacterComics } from "@/services/get-character-comics";
import { ComicDataContainer } from "@/models/comic-response";
 
export function Character(): JSX.Element {
  const { id } = useParams();
  const [getCharacter] = useGetCharacter();
  const [getCharacterComics] = useGetCharacterComics();
  const [characterResult, setCharacterResult] = useState<CharacterDataContainer | null>({});
  const [characterComicsResult, setCharacterComicsResult] = useState<ComicDataContainer | null>({})

  useEffect(() => {
    getCharacter(Number(id)).then(result => setCharacterResult(result));
    getCharacterComics(Number(id)).then(result => setCharacterComicsResult(result));
  }, []);

  const character = characterResult?.results?.[0];
  const characterComics = characterComicsResult?.results;

  return (
    <Container>
      <BackButton to="/">
        <ArrowLeft size={20}/>
        BACK
      </BackButton>
      {character ? (<CharacterDescriptionCard character={character}/>) : ''}
      <ComicsList comics={characterComics} />
    </Container>
  );
}