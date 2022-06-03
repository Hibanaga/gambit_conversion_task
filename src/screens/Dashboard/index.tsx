import React, { FC, SyntheticEvent } from "react";
import { useRedirectDashboard } from "../../hooks/useRedirectDashboard";
import { themes } from "../../styles/theme";
import { IParsedData } from "../../types/parser.types";
import { allyProps } from "../../utils/helperFunc";
import * as StyledThisComp from "./Dashboard.styled";

interface IDashboardProps {
  assetData?: string | null;
  parsedData?: IParsedData | null;
  currentStep: number;
  onChangeStep: (event: SyntheticEvent, newValue: number) => void;
}

const Dashboard: FC<IDashboardProps> = ({
  assetData,
  parsedData,
  currentStep,
  onChangeStep,
}) => {
  const isFullPackData =
    Object.values((parsedData as IParsedData)?.data).length === 100;

  const menu = useRedirectDashboard(
    currentStep,
    parsedData,
    assetData,
    isFullPackData
  );

  const protectedNavigationTabs = isFullPackData
    ? [
        { label: "Conversion", currentStep: 2 },
        { label: "Chart", currentStep: 3 },
      ]
    : [];

  const tabItems = [
    { label: "Text", currentStep: 0 },
    { label: "Input", currentStep: 1 },
    ...protectedNavigationTabs,
  ];

  return (
    <StyledThisComp.Container>
      <StyledThisComp.Wrapper>
        <StyledThisComp.TabsWrapper
          value={currentStep}
          onChange={onChangeStep}
          aria-label="basic tabs example"
        >
          {tabItems.map(({ currentStep, label }) => (
            <StyledThisComp.TabItem
              key={label}
              label={label}
              style={{
                color: themes.colours.blue100,
              }}
              {...allyProps(currentStep)}
            />
          ))}
        </StyledThisComp.TabsWrapper>
        {menu}
      </StyledThisComp.Wrapper>
    </StyledThisComp.Container>
  );
};

export default Dashboard;
