import axios from 'axios';

const mealDBImage = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_IMAGE,
});

export default mealDBImage;
