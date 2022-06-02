import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import "./styles/globals.css";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";
import Welcome from "./screens/Welcome";
import { IParsedData } from "./types/parser.types";
import { getParsedFileData } from "./utils/parseFile";
import * as StyledThisComp from "./styles/Home.styled";

function App() {
  const [asset, setAsset] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<IParsedData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const showFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const target = e.target as FileReader;
      const text = target && target.result;
      setAsset(text as string);
    };
    const targetValue = (e.target as HTMLInputElement)?.files;
    const firstElement = (targetValue as FileList)[0];
    reader.readAsText(firstElement);
  };

  useEffect(() => {
    asset && setParsedData(getParsedFileData(asset));
  }, [asset]);

  const handleChangeStep = (event: SyntheticEvent, newValue: number) =>
    setCurrentStep(newValue);

  const handleLogout = () => {
    setAsset(null);
    setParsedData(null);
  };

  return (
    <StyledThisComp.Container>
      <Header
        isExistData={!!parsedData}
        date={parsedData?.date}
        onLogout={handleLogout}
      />
      <StyledThisComp.Wrapper>
        {parsedData ? (
          <Dashboard
            assetData={asset}
            parsedData={parsedData}
            currentStep={currentStep}
            onChangeStep={handleChangeStep}
          />
        ) : (
          <Welcome onShowFile={showFile} />
        )}
      </StyledThisComp.Wrapper>
    </StyledThisComp.Container>
  );
}

export default App;
