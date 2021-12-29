import React from "react";
import { render, screen } from "@testing-library/react";
import { Fight } from "./Fight";

const MOCKED_CARDS = [
  {
    name: "test 1",
    isWinner: false,
    firstAttribute: {
      label: "mass",
      value: 123,
    },
    secondAttribute: {
      label: "height",
      value: 1,
    },
  },
  {
    name: "test 2",
    isWinner: false,
    firstAttribute: {
      label: "mass",
      value: 11,
    },
    secondAttribute: {
      label: "height",
      value: 12,
    },
  },
];

const allAttributesComponent = (
  <Fight
    leftCounter={0}
    rightCounter={1}
    firstItem={MOCKED_CARDS[0]}
    secondItem={MOCKED_CARDS[1]}
  />
);

const partialAttributesComponent = <Fight leftCounter={0} rightCounter={1} />;

describe("While using fight component", () => {
  describe("fully set", () => {
    beforeEach(() => {
      render(allAttributesComponent);
    });

    it("should render cards wrapper if first and second element are provided", () => {
      const cardsContainer = screen.getByTestId("cards-wrapper");
      expect(cardsContainer).toBeInTheDocument();
    });

    it("should render right counter with provided value for them", () => {
      const rightCounter = screen.getByText(`Score: ${1}`);
      expect(rightCounter).toBeInTheDocument();
    });

    it("should render left counter with provided value for them", () => {
      const leftCounter = screen.getByText(`Score: ${0}`);
      expect(leftCounter).toBeInTheDocument();
    });
  });

  describe("partially set", () => {
    it("should not render cards wrapper if first and second element are not provided", () => {
      render(partialAttributesComponent);
      const cardsContainer = screen.queryByTestId("cards-wrapper");
      expect(cardsContainer).not.toBeInTheDocument();
    });
  });
});
