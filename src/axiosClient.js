import axios from 'axios';

const mealDB = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// const mealDBImage = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL_IMAGE,
// });

export default mealDB;

// two different methods that serves one endpoint or the other
