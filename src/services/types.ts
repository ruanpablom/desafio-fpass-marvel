import { CharacterDataContainer } from "@/models/character-response";
import { ComicDataContainer } from "@/models/comic-response";

export type UseGetCharactersResponse = [
  (nameStartsWith: string, offset?: number, limit?: number) => Promise<CharacterDataContainer | null>,
  { loading: boolean; erro: string | undefined },
];

export type UseGetCharacterResponse = [
  (id: number) => Promise<CharacterDataContainer | null>,
  { loading: boolean; erro: string | undefined },
];

export type UseGetCharacterComicsResponse = [
  (characterId: number, offset?: number, limit?: number) => Promise<ComicDataContainer | null>,
  { loading: boolean; erro: string | undefined },
];