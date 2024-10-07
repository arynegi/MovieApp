import React from 'react';
import { FlatList } from "@gluestack-ui/themed";
import MoviesCard from "../listitems/MoviesCard";

const MoviesList = ({ movies, navigation }) => {
    return (
        <FlatList
            data={movies}
            renderItem={({ item }) => (
                <MoviesCard
                    navigation={navigation}
                    image={item.poster_path}
                    title={item.title}
                    popularity={item.popularity}
                    releaseDate={item.release_date}
                    id={item.id}
                />
            )}
            keyExtractor={(item) => item.id.toString()}  
        />
    );
};

export default MoviesList;
