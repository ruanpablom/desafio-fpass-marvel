import { useState } from "react";
import { baseService } from "./baseService";
import { Md5 } from "ts-md5";
import { AxiosError } from "axios";
import { UseGetCharacterComicsResponse } from "./types";
import { ComicDataContainer, ComicDataWrapper } from "@/models/comic-response";

export function useGetCharacterComics(): UseGetCharacterComicsResponse {
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string | undefined>(undefined);

  const getCharacterComics = async (characterId: number, offset?: number, limit?: number): Promise<ComicDataContainer | null> => {
    setLoading(true);

    try{
      const ts = Number(new Date());
      const hash = Md5.hashStr(ts + import.meta.env.VITE_API_PRIVATE_KEY + import.meta.env.VITE_API_PUBLIC_KEY);
      const { data: result } = await baseService.get<ComicDataWrapper>(`/characters/${characterId}/comics?ts=${ts}&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${hash}${offset ? `&offset=${offset}`:''}${limit ? `&limit=${limit}`:''}`);

      return result.data || null
    }catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setErro(error.response?.data.message);
      throw error.response?.data.message;
    } finally {
      setLoading(false);
    }
  }

  return [getCharacterComics, {loading, erro}];

}