import React, { FC } from "react";
import * as StyledThisComp from "../../screens/Dashboard/Dashboard.styled";
import * as StyledTextMenu from "../TextMenu/TextMenu.styled";
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
      {arrayAssets.length ? (
        <>
          <MenuHeader itemsMenu={["Register", "Values"]} />
          {arrayAssets.map(([key, value], idx) => (
            <MenuItem key={idx} asset={[key, value.toString()]} />
          ))}
        </>
      ) : (
        <>
          <StyledTextMenu.StatusDescription>
            status:{" "}
          </StyledTextMenu.StatusDescription>
          <StyledThisComp.Content>
            Alas, you have not entered any data
          </StyledThisComp.Content>
        </>
      )}
    </StyledThisComp.WrapperTable>
  );
};

export default GeneralMenu;
