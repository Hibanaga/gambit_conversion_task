import React, { ChangeEvent, useRef } from "react";
import * as StyledThisComp from "./Welcome.styled";
import bubbleEffectImage from "../../assets/bubbleEffects.png";
import bubbleEffectBackImage from "../../assets/bubblebackeffects.png";

interface IWelcomeProps {
  errorMessage: string;
  onShowFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Welcome = ({ errorMessage, onShowFile }: IWelcomeProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const uploadButtonHandler = () =>
    inputRef.current && inputRef.current.click();

  return (
    <StyledThisComp.Container>
      <StyledThisComp.ContentWrapper>
        <StyledThisComp.Title>Welcome to conversator</StyledThisComp.Title>

        <StyledThisComp.Button onClick={uploadButtonHandler}>
          Browse...{" "}
          <StyledThisComp.ButtonAdditional>
            (txt)
          </StyledThisComp.ButtonAdditional>
          <input
            type="file"
            ref={inputRef}
            onChange={onShowFile}
            style={{ display: "none" }}
          />
        </StyledThisComp.Button>

        {!!errorMessage && (
          <StyledThisComp.ErrorMessage>
            {errorMessage}
          </StyledThisComp.ErrorMessage>
        )}
      </StyledThisComp.ContentWrapper>

      <StyledThisComp.BackEffectImage
        src={bubbleEffectImage}
        alt="back image effect"
      />

      <StyledThisComp.BackEffectImage
        src={bubbleEffectBackImage}
        alt="back image effect"
      />
    </StyledThisComp.Container>
  );
};

export default Welcome;
