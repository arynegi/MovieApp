import React, { useEffect, useState } from "react";
import { Box, Center } from "@gluestack-ui/themed";
import Selection from "../forms/Selection";
import { VStack } from "@gluestack-ui/themed";
import { getMovies } from "../../services/api";
import Loading from "../layout/Loading";
import MoviesList from "../lists/MoviesList"; // Ensure MoviesList is imported correctly

const options = [
  { label: "Now Playing", value: "now_playing", isSelected: true },
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const MoviesContainer = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("now_playing");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async (category) => {
      setIsLoading(true); 
      try {
        const movieData = await getMovies(category);
        setMovies(movieData); 
      } catch (error) {
        alert(`Error: Something went wrong! ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies(selectedValue); 
  }, [selectedValue]);

  const handleSelectionChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <Box height="100%" bg="white">  
      <Box py={24} px={20} bg="gray.100" borderBottomRadius={10}> 
        <Selection
          options={options}
          selectedValue={selectedValue}
          onValueChange={handleSelectionChange}
        />
      </Box>

      
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

export default MoviesContainer;
