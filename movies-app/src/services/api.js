import axios from 'axios';
import { ACCESS_TOKEN_AUTH, BASE_URL, TYPE_MOVIE, TYPE_SEARCH, TYPE_TV } from "../config/apiConfig";

// Fetch movies by category
export const getMovies = async (category) => {
  const url = `${BASE_URL}/${TYPE_MOVIE}/${category}?language=en-US&page=1`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`
    }
  };

  try {
    const response = await axios.get(url, options);
    // console.log(response)
    return response.data.results; 
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Failed to fetch movies. Please try again later.');
  }
};

// Fetch movies by search term
export const getMoviesBySearch = async (category, searchTerm) => {
  const url = `${BASE_URL}/${TYPE_SEARCH}/${category}`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
    },
    params: {
      query: searchTerm,
      include_adult: false,
      language: 'en-US',
      page: 1
    }
  };

  try {
    const response = await axios.get(url, options);
    // console.log(response)
    return response.data.results; 
  } catch (error) {
    console.error(`Error fetching movies for category: ${category} and searchTerm: ${searchTerm}`, error);
    throw new Error('Failed to fetch search results. Please try again later.');
  }
};

// Fetch TV shows by category
export const getTVShows = async (category) => {
  const url = `${BASE_URL}/${TYPE_TV}/${category}`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
    },
    params: {
      language: 'en-US',
      page: 1
    }
  };

  try {
    const response = await axios.get(url, options);
    // console.log(response.data)
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching TV shows for category: ${category}`, error);
    throw new Error('Failed to fetch TV shows. Please try again later.');
  }
};

// Fetch movie by ID
export const getMoviesById = async (id) => {
  const url = `${BASE_URL}/${TYPE_MOVIE}/${id}`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
    },
    params: {
      language: 'en-US',
    }
  };

  try {
    const response = await axios.get(url, options);
    // console.log(response)
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie by ID: ${id}`, error);
    throw new Error('Failed to fetch movie details. Please try again later.');
  }
};
