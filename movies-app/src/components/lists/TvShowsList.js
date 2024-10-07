import React from 'react';
import { FlatList } from "@gluestack-ui/themed";
import TvShowsCard from "../listitems/TvShowsCard";

const TvShowsList = ({ shows, navigation }) => {
    return (
        <FlatList
            data={shows}
            renderItem={({ item }) => (
                <TvShowsCard
                    navigation={navigation}
                    image={item.poster_path}
                    name={item.name} 
                    popularity={item.popularity}
                    firstAirDate={item.first_air_date}  
                    id={item.id}
                />
            )}
            keyExtractor={(item) => item.id.toString()}  
        />
    );
};

export default TvShowsList;
