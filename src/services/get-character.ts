import { useState } from "react";
import { baseService } from "./baseService";
import { Md5 } from "ts-md5";
import { AxiosError } from "axios";
import { UseGetCharacterResponse } from "./types";
import { CharacterDataContainer, CharacterDataWrapper } from "@/models/character-response";

export function useGetCharacter(): UseGetCharacterResponse {
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string | undefined>(undefined);

  const getCharacter = async (id: number): Promise<CharacterDataContainer | null> => {
    setLoading(true);

    try{
      const ts = Number(new Date());
      const hash = Md5.hashStr(ts + import.meta.env.VITE_API_PRIVATE_KEY + import.meta.env.VITE_API_PUBLIC_KEY);
      const { data: result } = await baseService.get<CharacterDataWrapper>(`/characters/${id}?ts=${ts}&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${hash}`);

      return result.data || null
    }catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setErro(error.response?.data.message);
      throw error.response?.data.message;
    } finally {
      setLoading(false);
    }
  }

  return [getCharacter, {loading, erro}];

}