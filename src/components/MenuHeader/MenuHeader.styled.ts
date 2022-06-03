import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${themes.colours.borderInk};
  border-radius: 4px 4px 0 0;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${themes.colours.ink400};
  color: ${themes.colours.ink100};
  border-right: 1px solid ${themes.colours.borderInk};

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    border: none;

    &:first-child {
      border-bottom: 1px solid ${themes.colours.borderInk};
    }
  }
`;

export const Item = styled.span`
  font-size: ${themes.fontSizes.tertiaryQuarter}px;
  color: ${themes.colours.blue100};
  padding: 8px 16px;
`;
