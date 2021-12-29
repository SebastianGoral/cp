import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { convertToNumbers, getResource } from "../_Api/api";
import { SelectChangeEvent } from "@mui/material/Select";
import { Fight } from "./Fight";
import { ISelectOption, Select } from "./Select";
import { useFightConfig } from "./UseFightConfig";
import { Button } from "@mui/material";
import { IPerson, IStarship, SwapiResource } from "../_Api/types";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow: hidden;
`;

const StyledButton = styled(Button)`
  margin: 20px 10px 20px 0;
`;

const resourceOptions: ISelectOption[] = [
  {
    value: SwapiResource.STARSHIPS,
    label: "starships",
  },
  {
    value: SwapiResource.PEOPLE,
    label: "people",
  },
];

const attributesOptions = {
  [SwapiResource.STARSHIPS]: [
    {
      value: "length",
      label: "length",
    },
    {
      value: "cargo_capacity",
      label: "cargo capacity",
    },
  ],
  [SwapiResource.PEOPLE]: [
    {
      value: "mass",
      label: "mass",
    },
    {
      value: "height",
      label: "height",
    },
  ],
};

export const Panel = () => {
  const [resource, setResource] = useState<SwapiResource>(SwapiResource.PEOPLE);

  const [attribute, setAttribute] = useState<string>("");
  const [items, setItems] = useState<(IPerson | IStarship)[]>([]);

  useEffect(() => {
    getResource(resource).then(({ results }) =>
      setItems(results.map((item) => convertToNumbers(item, resource)))
    );
  }, [resource]);

  const {
    leftCounter,
    rightCounter,
    secondItem,
    firstItem,
    handleDrawIndexes,
  } = useFightConfig(items, resource, attribute);

  const handleResourceChange = ({ target: { value } }: SelectChangeEvent) => {
    setResource(value as SwapiResource);
    if (value !== resource) {
      setAttribute("");
    }
  };
  const handleAttributeChange = ({ target: { value } }: SelectChangeEvent) => {
    setAttribute(value);
  };

  return (
    <Wrapper>
      <Select
        options={resourceOptions}
        value={resource}
        label={"Stellar resource"}
        onChange={handleResourceChange}
      />
      <Select
        options={attributesOptions[resource]}
        value={attribute}
        label={"Attribute to compare"}
        onChange={handleAttributeChange}
      />
      <StyledButton onClick={handleDrawIndexes} variant={"contained"}>
        Fight again
      </StyledButton>
      {attribute && (
        <Fight
          leftCounter={leftCounter}
          rightCounter={rightCounter}
          firstItem={firstItem}
          secondItem={secondItem}
        />
      )}
    </Wrapper>
  );
};
