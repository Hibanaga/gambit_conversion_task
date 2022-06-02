import styled from "styled-components";
import { themes } from "./theme";

export const Container = styled.article`
  width: 100%;
  min-height: 100vh;
  background-color: ${themes.colours.ink700};
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 98%;
  height: 100%;

  @media (min-width: 475px) {
    max-width: 420px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 1024px) {
    max-width: 920px;
  }

  @media (min-width: 1140px) {
    max-width: 960px;
  }

  @media (min-width: 1440px) {
    max-width: 1140px;
  }
`;
