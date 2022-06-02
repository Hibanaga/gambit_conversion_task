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
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${themes.fontSizes.fourfold}px;
  color: ${themes.colours.blue100};
  margin-bottom: 24px;
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
  }
`;
