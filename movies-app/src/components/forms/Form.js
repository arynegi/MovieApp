import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  FormControl,
  FormControlLabelText,
  HStack,
  Icon,
  Input,
  InputField,
  InputIcon,
  SearchIcon,
  VStack,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import Selection from "../forms/Selection"; 

const Form = ({ options, onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState(undefined);

  useEffect(() => {
    const defaultOption = options.find((option) => option.isSelected);
    if (defaultOption) {
      setSelectedValue(defaultOption.value);
    }
  }, [options]);

  const handleSubmit = () => {
    if (selectedValue) {
      onSubmit(searchTerm, selectedValue); // Call parent onSubmit
    }
  };

  return (
    <VStack space="sm" width="100%" p={5} my={10}>
      <FormControl isRequired>
        <FormControl.Label>
          <FormControlLabelText>
            Search Movies/TV Shows Name
          </FormControlLabelText>
        </FormControl.Label>

        <HStack width="100%" space="xs">
          <Input px={5} style={styles.inputStyle}>
            <InputIcon>
              <Icon as={SearchIcon} size="sm" />
            </InputIcon>
            <InputField
              placeholder="James Bond"
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            />
          </Input>
        </HStack>

        <FormControl.Label>
          <FormControlLabelText>Choose Search Type</FormControlLabelText>
        </FormControl.Label>
      </FormControl>

      <HStack width="100%" space="xs">
        <Box px={5} flex={1}>
          <Selection
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue} 
          />
        </Box>

        <Button onPress={handleSubmit}>
          <ButtonIcon as={SearchIcon} mr="$2" />
          <ButtonText>Search</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  inputStyle: { flex: 1, alignItems: "center" },
});

export default Form;
