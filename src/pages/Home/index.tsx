import { Search } from "@/components";
import { Container } from "./styles";
import { useGetCharacters } from "@/services/get-characters";
import { useEffect, useState } from "react";
import { CharacterDataContainer } from "@/models/character-response";
import { CharactersList } from "@/components/CharactersList";

export function Home():JSX.Element {
  const [getCharacters] = useGetCharacters();
  const [charactersResult,setCharactersResult] = useState<CharacterDataContainer | null>({});
  const [searchString, setSearchString] = useState<string>(' ')

  const handleSearch = (nameStartsWith: string, offset?: number, limit?:number) => {
    getCharacters(nameStartsWith,offset,limit).then(result => {
      setCharactersResult(result);
      setSearchString(nameStartsWith);
    });
  }

  useEffect(() => {
    handleSearch('')
  }, []);

  const characters = charactersResult?.results;

  return (
    <Container>
      <Search onSearch={handleSearch} />
      <CharactersList characters={characters || []} />
    </Container>
  )
}