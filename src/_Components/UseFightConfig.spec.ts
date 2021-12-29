import { renderHook } from "@testing-library/react-hooks";
import { useFightConfig } from "./UseFightConfig";
import { SwapiResource } from "../_Api/types";

const MOCKED_PEOPLE = [
  {
    name: "Test name 1",
    mass: 123,
    height: 200,
  },
  {
    name: "Test name 2",
    mass: 223,
    height: 300,
  },
  {
    name: "Test name 3",
    mass: 163,
    height: 20,
  },
];

const ATTRIBUTE = "mass";

const RESOURCE = SwapiResource.PEOPLE;

describe("While using useFightConfig", () => {
  it("should return handleDrawIndexes fucntion", () => {
    const {
      result: {
        current: { handleDrawIndexes },
      },
    } = renderHook(() => useFightConfig(MOCKED_PEOPLE, RESOURCE, ATTRIBUTE));

    expect(typeof handleDrawIndexes).toBe("function");
  });

  it("should update one of the counters if cards are provided", () => {
    const {
      result: {
        current: { leftCounter, rightCounter },
      },
    } = renderHook(() => useFightConfig(MOCKED_PEOPLE, RESOURCE, ATTRIBUTE));

    expect(leftCounter > 0 || rightCounter > 0).toBeTruthy();
  });

  it("should return two different card configs", () => {
    const {
      result: {
        current: { firstItem, secondItem },
      },
    } = renderHook(() => useFightConfig(MOCKED_PEOPLE, RESOURCE, ATTRIBUTE));

    expect(firstItem).not.toBe(secondItem);
  });
});
