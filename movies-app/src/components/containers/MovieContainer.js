import React, { useEffect, useState } from "react";
import { Center, HStack, Text, VStack, Box, Image } from "@gluestack-ui/themed";
import { getMoviesById } from "../../services/api";
import Loading from "../layout/Loading";

const MovieContainer = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const fetchMovieById = async (id) => {
      try {
        const movie = await getMoviesById(id);
        setMovie(movie);
        navigation.setOptions({
          title: movie.title, 
        });
        setIsLoading(false);
      } catch (error) {
        alert(`Error: Something went wrong! ${error}`);
        setMovie(null);
        setIsLoading(false);
      }
    };

    fetchMovieById(id);
  }, [id, navigation]);

  if (isLoading) {
    return (
      <Center flex={1}>
        <Loading />
      </Center>
    );
  }

  return (

    <Box
      p={16} 
      borderRadius={8} 
      bg="white" 
      my={4} 
      shadow={2} 
    >
      <VStack space={4} alignItems="center">
        <Text fontSize={24} fontWeight="bold" color="gray.800">
          {movie.title}
        </Text>

        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
          }}
          alt={movie.title}
          resizeMode="cover"
          style={{ height: 400, width: "100%", borderRadius: 8 }} 
        />

        <Text fontSize={16} color="gray.600" textAlign="center" mt={4}>
          {movie.overview}
        </Text>

        <HStack space={4} mt={4} justifyContent="center">
          <Text fontSize={14}>
            Popularity: <Text fontWeight="bold">{movie.popularity}</Text>
          </Text>
          <Text>|</Text>
          <Text fontSize={14}>
            Release Date: <Text fontWeight="bold">{movie.release_date}</Text>
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MovieContainer;
