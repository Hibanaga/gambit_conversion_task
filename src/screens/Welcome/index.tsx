import React, { ChangeEvent, useRef } from "react";
import * as StyledThisComp from "./Welcome.styled";

interface IWelcomeProps {
  onShowFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Welcome = ({ onShowFile }: IWelcomeProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const uploadButtonHandler = () =>
    inputRef.current && inputRef.current.click();

  return (
    <StyledThisComp.Container>
      <StyledThisComp.ContentWrapper>
        <StyledThisComp.Title>Welcome to conversator</StyledThisComp.Title>

        <StyledThisComp.Button onClick={uploadButtonHandler}>
          Browse
          <input
            type="file"
            ref={inputRef}
            onChange={onShowFile}
            style={{ display: "none" }}
          />
        </StyledThisComp.Button>
      </StyledThisComp.ContentWrapper>
    </StyledThisComp.Container>
  );
};

export default Welcome;
