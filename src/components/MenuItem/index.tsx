import React, { FC } from "react";
import * as StylesMenuHeader from "../MenuHeader/MenuHeader.styled";
import * as StyledThisComp from "./MenuItem.styled";

interface IMenuItemProps {
  asset: (string | number)[];
}

const MenuItem: FC<IMenuItemProps> = ({ asset }) => {
  return (
    <StyledThisComp.Wrapper>
      {asset.map((item, idx) => (
        <StyledThisComp.WrapperItem key={idx}>
          <StylesMenuHeader.Item>{item}</StylesMenuHeader.Item>
        </StyledThisComp.WrapperItem>
      ))}
    </StyledThisComp.Wrapper>
  );
};

export default MenuItem;
