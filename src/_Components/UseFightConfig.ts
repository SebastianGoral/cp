import { useEffect, useMemo, useState } from "react";
import { IPerson, IStarship, SwapiResource } from "../_Api/types";
import { ICardProps } from "./Card";
import { random } from "lodash";

const cardConfigStrategy = <T extends IPerson | IStarship>(
  model: T
): Record<SwapiResource, ICardProps> => ({
  [SwapiResource.STARSHIPS]: {
    name: model.name,
    isWinner: false,
    firstAttribute: {
      label: "length",
      value: (model as IStarship).length,
    },
    secondAttribute: {
      label: "cargo capacity",
      value: (model as IStarship).cargo_capacity,
    },
  },
  [SwapiResource.PEOPLE]: {
    name: model.name,
    isWinner: false,
    firstAttribute: {
      label: "mass",
      value: (model as IPerson).mass,
    },
    secondAttribute: {
      label: "height",
      value: (model as IPerson).height,
    },
  },
});

const getTwoRandomNumbers = (arrayLength: number): [number, number] => {
  const firstRandom = random(0, arrayLength - 1);
  let secondRandom = random(0, arrayLength - 1);
  while (secondRandom === firstRandom) {
    secondRandom = random(0, arrayLength - 1);
  }
  return [firstRandom, secondRandom];
};
export const useFightConfig = <Model extends IPerson | IStarship>(
  items: Model[],
  resource: SwapiResource,
  attribute?: string
) => {
  const [leftCounter, setLeftCounter] = useState(0);
  const [rightCounter, setRightCounter] = useState(0);
  const [indexes, setIndexes] = useState<[number, number]>();
  const handleDrawIndexes = () => {
    setIndexes(getTwoRandomNumbers(items.length));
  };

  useEffect(() => {
    if (items.length > 0) {
      handleDrawIndexes();
    }
  }, [items]);

  const [firstItem, secondItem] = useMemo(() => {
    if (items.length > 0 && indexes) {
      const firstItem = items[indexes[0]];
      const secondItem = items[indexes[1]];
      const attributeToCompare = attribute as keyof Model;

      const firstCardConfig = cardConfigStrategy(firstItem)[resource];
      const secondCardConfig = cardConfigStrategy(secondItem)[resource];

      if (firstItem[attributeToCompare] > secondItem[attributeToCompare]) {
        setLeftCounter(leftCounter + 1);
        firstCardConfig.isWinner = true;
      } else if (
        secondItem[attributeToCompare] > firstItem[attributeToCompare]
      ) {
        setRightCounter(rightCounter + 1);
        secondCardConfig.isWinner = true;
      }
      return [firstCardConfig, secondCardConfig];
    }
    return [];
  }, [items, attribute, indexes]);

  return {
    firstItem,
    secondItem,
    rightCounter,
    leftCounter,
    handleDrawIndexes,
  };
};
