import React, { FC } from "react";
import * as StyledThisComp from "../../screens/Dashboard/Dashboard.styled";
import { DataOptionType } from "../../types/parser.types";
import MenuHeader from "../MenuHeader";
import MenuItem from "../MenuItem";

interface IGeneralMenuProps {
  parsedData: DataOptionType;
}

const GeneralMenu: FC<IGeneralMenuProps> = ({ parsedData }) => {
  const arrayAssets = Object.entries(parsedData);

  return (
    <StyledThisComp.WrapperTable>
      <MenuHeader itemsMenu={["Register", "Values"]} />
      {arrayAssets.map(([key, value], idx) => (
        <MenuItem key={idx} asset={[key, value.toString()]} />
      ))}
    </StyledThisComp.WrapperTable>
  );
};

export default GeneralMenu;
