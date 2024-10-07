import React, { useState } from "react";
import { Box, Center, Text } from "@gluestack-ui/themed";
import Form from "../forms/Form";
import { getMoviesBySearch } from "../../services/api";
import Loading from "../layout/Loading";
import MoviesList from "../lists/MoviesList";

const options = [
  { label: "Movie", value: "movie" },
  { label: "Multi", value: "multi", isSelected: true }, // Default selected
  { label: "TV", value: "tv" },
];

const SearchResultContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleFormSubmit = (searchTerm, selectedValue) => {
    console.log("Search Term:", searchTerm);
    console.log("Selected Type:", selectedValue);

    setIsLoading(true); 

    getMoviesBySearch(selectedValue, searchTerm)
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(`Error: Something went wrong! ${error}`);
        setIsLoading(false); 
      });
  };

  return (
  
    <Box px={16} height="100%" bg="white">
      <Form
        options={options}
        onSubmit={handleFormSubmit} 
      />
      
      {isLoading ? (
        <Center flex={1}> 
          <Loading />
        </Center>
      ) : (
        <MoviesList navigation={navigation} movies={movies} />
      )}
    </Box>
  );
};

export default SearchResultContainer;
