import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
`;

export const Row = styled.div``;

export const ContentWrapper = styled.div`
  border: 1px solid ${themes.colours.ink100};
  background-color: ${themes.colours.ink700};
  padding: 24px 24px 36px 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: ${themes.fontSizes.fourfold}px;
  color: ${themes.colours.blue100};
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: ${themes.fontSizes.tertiary}px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 16px 48px;
  border-radius: 4px;
  border: 1px solid ${themes.colours.blue100};
  background: ${themes.colours.blue100};
  color: ${themes.colours.white};
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: 250ms ease-in;

  &:hover {
    background: ${themes.colours.blue200};
    border-color: ${themes.colours.blue200};
  }
`;

export const ButtonAdditional = styled.span`
  text-transform: none;
  font-size: ${themes.fontSizes.secondaryMiddle}px;
`;

export const ErrorMessage = styled.span`
  font-size: ${themes.fontSizes.basic}px;
  color: ${themes.colours.blue100};
  padding-top: 24px;
`;

export const BackEffectImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0.5%;

  @media (max-width: 1600px) {
    width: 100%;
  }
`;
