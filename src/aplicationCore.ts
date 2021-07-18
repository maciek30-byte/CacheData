import { read, writeToFile } from "./helper";
import axios from "axios";

export const bassedArray: string[] = [];

// pobieranie danych ///

export const downloadData = async (query: string): Promise<unknown> => {
  // sprawdzic czy api rzuca jakies bledy ??
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    const { data } = await axios.get(url);

    return data;
  } catch (e) {
    console.log("error occured", e);
  }
};
// dane pobrane ze strony //
export const axiosResult = downloadData("harry potter");

// sprawdzanie czy wyraz istnieje w tablicy //
export const checkIndexingArray = (
  indexingArray: string[] = bassedArray,
  phraseToCheck: string
) => {
  // phrase to check check that regexp//
  let result = indexingArray.findIndex((element) => element === phraseToCheck);
  if (result !== -1) {
    console.log("Element znaleziony");
    return true;
  } else {
    console.log("element nie znaleziony");
    return false;
  }
};

//zapisywanie lub odczytywanie z JSON

export const readOrWriteFile = (
  query: string,
  bassedArray: string[]
): unknown => {
  if (checkIndexingArray(bassedArray, query)) {
    console.log("wpadlo do znalezionych odczytuje z pliku json");
    return read(query);
  } else {
    const dataToIniect: unknown = downloadData(query);
    writeToFile(query, dataToIniect);
    bassedArray.push(query);
    return dataToIniect;
  }
};
