import type { GetSkipsReqI } from "..";

export const getSkips = async (): Promise<GetSkipsReqI[]> => {
  try {
    const response = await fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch skips");
    }

    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
