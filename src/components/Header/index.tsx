import React, { FC } from "react";
import { Button } from "@mui/material";
import * as StyledThisComp from "./Header.styled";
import * as StyledWrapper from "../../styles/Home.styled";

interface IHeaderProps {
  isExistData: boolean;
  date?: string;
  onLogout: () => void;
}

const Header: FC<IHeaderProps> = ({ isExistData, date, onLogout }) => {
  return (
    <StyledThisComp.Container>
      <StyledWrapper.Wrapper>
        <StyledThisComp.Row>
          {isExistData ? (
            <>
              <StyledThisComp.Content>{date}</StyledThisComp.Content>
              <StyledThisComp.ButtonWrapper>
                <Button variant="text" onClick={onLogout}>
                  log out
                </Button>
              </StyledThisComp.ButtonWrapper>
            </>
          ) : (
            <>
              <StyledThisComp.Content>Test task</StyledThisComp.Content>
            </>
          )}
        </StyledThisComp.Row>
      </StyledWrapper.Wrapper>
    </StyledThisComp.Container>
  );
};

export default Header;
