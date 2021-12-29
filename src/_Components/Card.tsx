import React, { FC } from "react";

import MaterialCard from "@mui/material/Card";
import styled from "@emotion/styled";
import { CardContent, Typography } from "@mui/material";

export interface ICardProps {
  name: string;
  firstAttribute: IAttribute;
  secondAttribute: IAttribute;
  isWinner: boolean;
}
const StyledCard = styled(MaterialCard)`
  background: #d4d4d4;
  box-shadow: 0 4px 30px rgba(61, 50, 136, 0.15);
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const WinnerLabel = styled.div<Pick<ICardProps, "isWinner">>`
  color: ${({ isWinner }) => (isWinner ? "green" : "black")};
`;

export interface IAttribute {
  label: string;
  value: number;
}

// unknown for JSX issue (it is considering it as a component)
export const Card: FC<ICardProps> = ({
  name,
  firstAttribute,
  secondAttribute,
  isWinner,
}) => {
  return (
    <StyledCard variant="outlined" sx={{ minWidth: 275, minHeight: 275 }}>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>
          {firstAttribute.label} : {firstAttribute.value}
        </Typography>
        <Typography>
          {secondAttribute.label} : {secondAttribute.value}
        </Typography>
        {isWinner && <WinnerLabel isWinner={isWinner}> Winner</WinnerLabel>}
      </CardContent>
    </StyledCard>
  );
};
