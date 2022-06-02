import React, { FC } from "react";
import { getIntersactionBetweenArrays } from "../../utils/helperFunc";
import * as StyledTextMenu from "../TextMenu/TextMenu.styled";
import { DataOptionType } from "../../types/parser.types";

interface IInformationProps {
  parsedData?: DataOptionType;
}

const Information: FC<IInformationProps> = ({ parsedData }) => {
  return (
    <StyledTextMenu.InformationWrapper>
      <StyledTextMenu.StatusDescription>
        status:{" "}
      </StyledTextMenu.StatusDescription>
      <StyledTextMenu.StatusContent>
        {getIntersactionBetweenArrays(parsedData)}
      </StyledTextMenu.StatusContent>
    </StyledTextMenu.InformationWrapper>
  );
};

export default Information;
