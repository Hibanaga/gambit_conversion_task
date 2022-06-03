import React, { FC } from "react";
import HeaderContent from "../HeaderContent";
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
            <HeaderContent
              content={date?.substring(0, 17)}
              buttonText="log out"
              action={onLogout}
            />
          ) : (
            <HeaderContent
              content="Gambitgroup"
              buttonText="test case"
              action={onSetAsset}
              capitalize={true}
            />
          )}
        </StyledThisComp.Row>
      </StyledWrapper.Wrapper>
    </StyledThisComp.Container>
  );
};

export default Header;
