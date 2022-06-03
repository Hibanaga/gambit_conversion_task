import React, { FC } from "react";
import { Button } from "@mui/material";
import { themes } from "../../styles/theme";
import * as StyledThisComp from "./Header.styled";
import * as StyledWrapper from "../../styles/Home.styled";

interface IHeaderProps {
  isExistData: boolean;
  date?: string;
  onLogout: () => void;
  onSetAsset: () => void;
}

const Header: FC<IHeaderProps> = ({
  isExistData,
  date,
  onLogout,
  onSetAsset,
}) => {
  return (
    <StyledThisComp.Container>
      <StyledWrapper.Wrapper>
        <StyledThisComp.Row>
          {isExistData ? (
            <>
              <StyledThisComp.Content>
                {date?.substring(0, 17)}
              </StyledThisComp.Content>
              <StyledThisComp.ButtonWrapper>
                <Button
                  variant="text"
                  style={{
                    color: themes.colours.blue100,
                    fontSize: `${themes.fontSizes.secondary}px`,
                  }}
                  onClick={onLogout}
                >
                  log out
                </Button>
              </StyledThisComp.ButtonWrapper>
            </>
          ) : (
            <>
              <StyledThisComp.Content capitalize={true}>
                Gambitgroup
              </StyledThisComp.Content>

              <Button
                variant="text"
                style={{
                  color: themes.colours.blue100,
                  fontSize: `${themes.fontSizes.secondary}px`,
                }}
                onClick={onSetAsset}
              >
                test case
              </Button>
            </>
          )}
        </StyledThisComp.Row>
      </StyledWrapper.Wrapper>
    </StyledThisComp.Container>
  );
};

export default Header;
