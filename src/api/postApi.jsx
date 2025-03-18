import axios from "axios";

const api = axios.create({
   baseURL: 'https://restcountries.com/v3.1'
});

export const getCountryData = async () => {
   const response = await api.get('/all');
   return response.data;
};


// indivisual Country
export const getSingleCountry = async (name) => {
   const response = await api.get(`/name/${name}?fullText=true`);
   return response;
}