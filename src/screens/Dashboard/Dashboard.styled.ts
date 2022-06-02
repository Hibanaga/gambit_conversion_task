import { Tabs } from "@mui/material";
import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Container = styled.div`
  padding-bottom: 60px;
`;

export const Wrapper = styled.div`
  margin-top: 48px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid ${themes.colours.ink300};
`;

export const TabsWrapper = styled(Tabs)``;

export const WrapperTable = styled.div`
  padding: 8px 16px;
  margin-top: 16px;
`;
