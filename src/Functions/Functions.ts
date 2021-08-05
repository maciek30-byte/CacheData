import axios from "axios";

//fetchowanie danych z serwera

export const fetchData = async (url: string) => {
  // url zamienic na query
  const { data } = await axios.get(url);
  console.log(data);
  return data;
};
