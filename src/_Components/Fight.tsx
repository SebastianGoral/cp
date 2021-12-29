import React, { FC } from "react";
import styled from "@emotion/styled";
import { Card, ICardProps } from "./Card";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IProps {
  firstItem?: ICardProps;
  secondItem?: ICardProps;
  leftCounter: number;
  rightCounter: number;
}

export const Fight: FC<IProps> = ({
  firstItem,
  secondItem,
  leftCounter,
  rightCounter,
}) => {
  return (
    <Wrapper>
      {firstItem && secondItem && (
        <CardsWrapper data-testid="cards-wrapper">
          <CardWrapper>
            <div>Score: {leftCounter}</div>
            <Card {...firstItem} />
          </CardWrapper>
          <CardWrapper>
            <div>Score: {rightCounter}</div>
            <Card {...secondItem} />
          </CardWrapper>
        </CardsWrapper>
      )}
    </Wrapper>
  );
};
