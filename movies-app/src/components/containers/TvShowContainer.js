import React, { useEffect, useState } from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { getTVShows } from "../../services/api";
import Selection from "../forms/Selection"; 
import Loading from "../layout/Loading";
import TvShowsList from "../lists/TvShowsList";  

// Options for TV show categories
const options = [
  { label: "Airing Today", value: "airing_today", isSelected: true },
  { label: "On The Air", value: "on_the_air" },
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
];

const TvShowContainer = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("airing_today");
  const [isLoading, setIsLoading] = useState(false);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async (category) => {
      setIsLoading(true);

      try {
        const fetchedShows = await getTVShows(category);
        setShows(fetchedShows);
      } catch (error) {
        alert(`Error: Something went wrong! ${error}`);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchShows(selectedValue); 
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
        <Loading />
      ) : (
        <TvShowsList navigation={navigation} shows={shows} /> 
      )}
    </Box>
  );
};

export default TvShowContainer;
