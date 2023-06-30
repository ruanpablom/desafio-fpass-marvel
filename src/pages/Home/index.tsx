import { Search } from "@/components";
import { Container } from "./styles";
import { useGetCharacters } from "@/services/get-characters";
import { useEffect, useState } from "react";
import { CharacterDataContainer } from "@/models/character-response";

export function Home():JSX.Element {
  const [getCharacters] = useGetCharacters();
  const [charactersResult,setCharactersResult] = useState<CharacterDataContainer | null>({})

  const handleSearch = (nameStartsWith: string, offset?: number, limit?:number) => {
    getCharacters(nameStartsWith,offset,limit).then(result => {
      setCharactersResult(result);
      console.log(result);
    });
  }

  return (
    <Container>
      <Search onSearch={handleSearch} />
    </Container>
  )
}