import React from 'react';
import { Center } from "@gluestack-ui/themed";
import { 
  Select, 
  SelectTrigger, 
  SelectInput, 
  SelectIcon, 
  SelectContent, 
  SelectItem, 
  SelectPortal, 
  SelectBackdrop 
} from "@gluestack-ui/themed";
import { ChevronDownIcon } from "@gluestack-ui/themed";

const Selection = ({ options, selectedValue, onValueChange }) => {
  return (
    <Select selectedValue={selectedValue} onValueChange={onValueChange}>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Select an option" style={{ flex: 1, alignItems: "center" }} />
        <SelectIcon mr={8}>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          {options.map((option) => (
            <SelectItem 
              label={option.label}
              key={option.value} 
              value={option.value} 
              isDisabled={option.isDisabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default Selection;
