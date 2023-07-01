import { CharacterDataContainer } from "@/models/character-response";

export type UseGetCharactersResponse = [
  (nameStartsWith: string, offset?: number, limit?: number) => Promise<CharacterDataContainer | null>,
  { loading: boolean; erro: string | undefined },
];

export type UseGetCharacterResponse = [
  (id: number) => Promise<CharacterDataContainer | null>,
  { loading: boolean; erro: string | undefined },
];