import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'c499796c3emsh0ac716acfc57023p1c6f87jsn7cc8d6f81328',
    },
  });
    
  return data;
}