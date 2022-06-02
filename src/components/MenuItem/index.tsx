import React, { FC } from "react";
import * as StyledThisComp from "./MenuItem.styled";

interface IMenuItemProps {
  asset: (string | number)[];
}

const MenuItem: FC<IMenuItemProps> = ({ asset }) => {
  return (
    <StyledThisComp.Wrapper>
      {asset.map((item, idx) => (
        <StyledThisComp.WrapperItem key={idx}>
          <StyledThisComp.Item>{item}</StyledThisComp.Item>
        </StyledThisComp.WrapperItem>
      ))}
    </StyledThisComp.Wrapper>
  );
};

export default MenuItem;
