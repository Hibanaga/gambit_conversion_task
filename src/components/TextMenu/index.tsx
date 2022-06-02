import React, { FC } from "react";
import { DataOptionType } from "../../types/parser.types";
import Information from "../Information";

import * as StyledThisComp from "./TextMenu.styled";

interface ITextMenuProps {
  textData: string;
  parsedData: DataOptionType;
  isFullPack?: boolean;
}

const TextMenu: FC<ITextMenuProps> = ({ textData, parsedData, isFullPack }) => {
  return (
    <StyledThisComp.Wrapper>
      <StyledThisComp.Content>{textData}</StyledThisComp.Content>
      {isFullPack ? <Information /> : <Information parsedData={parsedData} />}
    </StyledThisComp.Wrapper>
  );
};

export default TextMenu;
