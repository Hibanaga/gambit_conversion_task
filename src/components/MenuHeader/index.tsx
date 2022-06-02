import React, { FC } from "react";
import * as StyledThisComp from "./MenuHeader.styled";

interface IMenuHeaderProps {
  itemsMenu: string[];
}

const MenuHeader: FC<IMenuHeaderProps> = ({ itemsMenu }) => {
  return (
    <StyledThisComp.Wrapper>
      {itemsMenu.map((item, idx) => (
        <StyledThisComp.WrapperItem key={idx}>
          <StyledThisComp.Item>{item}</StyledThisComp.Item>
        </StyledThisComp.WrapperItem>
      ))}
    </StyledThisComp.Wrapper>
  );
};

export default MenuHeader;
