import axios from 'axios';

// https://api.themoviedb.org/3/movie/now_playing?api_key=8440dc332246a93f36af1b13ce796698&language=pt-BR
// BASE URL https://api.themoviedb.org/3/ 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;