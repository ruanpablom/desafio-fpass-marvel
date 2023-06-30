import { CharacterDataContainer } from "@/models/character-response";

export type UseGetCharactersResponse = [
  (nameStartsWith: string, offset?: number, limit?: number) => Promise<CharacterDataContainer | null>,
  { loading: boolean; erro: string | undefined },
];