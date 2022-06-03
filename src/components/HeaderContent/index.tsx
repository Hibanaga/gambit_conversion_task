import { Button } from "@mui/material";
import React, { FC } from "react";
import { themes } from "../../styles/theme";
import * as StyledThisComp from "../Header/Header.styled";

interface IHeaderContentProps {
  content?: string;
  buttonText: string;
  capitalize?: boolean;
  action: () => void;
}

const HeaderContent: FC<IHeaderContentProps> = ({
  content,
  buttonText,
  capitalize,
  action,
}) => {
  return (
    <>
      <StyledThisComp.Content capitalize={capitalize}>
        {content}
      </StyledThisComp.Content>
      <StyledThisComp.ButtonWrapper>
        <Button
          variant="text"
          style={{
            color: themes.colours.blue100,
            fontSize: `${themes.fontSizes.secondary}px`,
          }}
          onClick={action}
        >
          {buttonText}
        </Button>
      </StyledThisComp.ButtonWrapper>
    </>
  );
};

export default HeaderContent;
