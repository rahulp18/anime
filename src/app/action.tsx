'use server';

import { Card } from "@/components";

const MAX_LIMIT = 8;
export const fetchAnime = async (page: number) => {
  try {
    const response = await fetch(
      `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`,
    );
    const data = await response.json();

    return     data.map((item: any, index: number) => (
        <Card key={item.id} data={item} index={index} />
      ));
  } catch (error) {
    console.log(error);
    return null;
  }
};
