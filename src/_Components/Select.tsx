import React, { FC } from "react";
import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MaterialSelect, { SelectChangeEvent } from "@mui/material/Select";
const Wrapper = styled.div`
  width: 200px;
  margin-top: 20px;
`;

export interface ISelectOption {
  value: string;
  label: string;
}

interface IProps {
  options: ISelectOption[];
  value: string;
  onChange: (value: SelectChangeEvent) => void;
  label: string;
}
export const Select: FC<IProps> = ({ label, options, onChange, value }) => {
  return (
    <Wrapper>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <MaterialSelect
          value={value}
          label="Stellar Resource"
          onChange={onChange}
        >
          {options.map((option, index) => {
            return (
              <MenuItem key={index + option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </MaterialSelect>
      </FormControl>
    </Wrapper>
  );
};
