import React, { FC } from "react";
import { arrOptions } from "../../consts/variables";
import * as StyledThisComp from "../../screens/Dashboard/Dashboard.styled";
import { IParsedData } from "../../types/parser.types";
import { getCalculateValue } from "../../utils/switchParser";
import MenuHeader from "../MenuHeader";
import MenuItem from "../MenuItem";

interface IConvertedMenuProps {
  parsedData: IParsedData;
}

const ConvertedMenu: FC<IConvertedMenuProps> = ({ parsedData }) => {
  const calculationParams = arrOptions.map((item) => item.split(" ")[0]);

  return (
    <StyledThisComp.WrapperTable>
      <MenuHeader itemsMenu={["Register", "Values"]} />
      {arrOptions.map((option, idx) => (
        <MenuItem
          key={idx}
          asset={[
            option,
            getCalculateValue(
              calculationParams[idx],
              parsedData.data
            ).toString(),
          ]}
        />
      ))}
    </StyledThisComp.WrapperTable>
  );
};

export default ConvertedMenu;
