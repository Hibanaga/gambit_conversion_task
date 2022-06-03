import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Wrapper = styled.div`
  border-bottom: 1px solid ${themes.colours.borderInk};
  border-left: 1px solid ${themes.colours.borderInk};
  border-right: 1px solid ${themes.colours.borderInk};
  display: flex;

  &:nth-child(odd) {
    background: ${themes.colours.ink600};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperItem = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
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
