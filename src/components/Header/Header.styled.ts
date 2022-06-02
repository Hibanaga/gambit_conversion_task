import { Tabs } from "@mui/material";
import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${themes.colours.ink600};
  position: relative;
`;

export const Row = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.span`
  font-size: ${themes.fontSizes.tertiary}px;
  width: 200px;
`;
