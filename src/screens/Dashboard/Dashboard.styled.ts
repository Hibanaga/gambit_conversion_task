import styled from "styled-components";
import { Tab, Tabs } from "@mui/material";
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

export const TabItem = styled(Tab)``;

export const WrapperTable = styled.div`
  padding: 8px 16px;
  margin-top: 16px;
`;

export const Content = styled.span`
  padding-top: 12px;
  display: block;
  font-size: ${themes.fontSizes.basic}px;
  color: ${themes.colours.blue100};
  overflow-wrap: break-word;
  line-height: 20px;
  font-weight: 500;
`;
