import React from "react";
import { Box, Button, HStack } from "@gluestack-ui/themed";
import { View, Text, Image, StyleSheet } from "react-native";

const TvShowsCard = ({ image, name, popularity, firstAirDate, id, navigation }) => {
  return (
    <View style={styles.card}>
      <HStack width={"100%"}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${image}` }}
          style={styles.image}
        />

        <Box flex={1} paddingLeft={4}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.popularity}>Popularity: {popularity}</Text>
          <Text style={styles.releaseDate}>Release Date: {firstAirDate}</Text>
          <Button
            onPress={() => {
              navigation.navigate("Show", { id });
            }}
          >
            <Text>More Details</Text>
          </Button>
        </Box>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    elevation: 2, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  image: {
    width: "20%",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  popularity: {
    fontSize: 14,
    color: "#555",
  },
  releaseDate: {
    fontSize: 14,
    color: "#555",
  },
});

export default TvShowsCard;
