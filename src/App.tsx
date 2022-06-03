import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import "./styles/globals.css";
import { assetTestCase } from "./consts/variables";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";
import Welcome from "./screens/Welcome";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { IParsedData } from "./types/parser.types";
import { getParsedFileData } from "./utils/parseFile";
import * as StyledThisComp from "./styles/Home.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [asset, setAsset] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<IParsedData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");

  const showFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const reader = new FileReader();
      const targetValue = (e.target as HTMLInputElement)?.files;
      const textFile = (targetValue as FileList)[0];
      const fileType = textFile.name.split(".").reverse()[0];

      if (fileType === "txt") {
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const target = e.target as FileReader;
          const text = target && target.result;
          !!text && setAsset(text as string);
        };
        setError("");
        setCurrentStep(0);
        reader.readAsText(textFile);
      } else {
        setError("Error: Provide wrong file type");
      }
    } catch (e) {
      console.error(e);
    }
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

  const uploadTestCaseHandler = () => {
    setCurrentStep(0);
    setAsset(assetTestCase);
  };

  return (
    <StyledThisComp.Container>
      <Header
        isExistData={!!parsedData}
        date={parsedData?.date}
        onSetAsset={uploadTestCaseHandler}
        onLogout={handleLogout}
      />
      <StyledThisComp.Wrapper>
        {parsedData && !error ? (
          <Dashboard
            assetData={asset}
            parsedData={parsedData}
            currentStep={currentStep}
            onChangeStep={handleChangeStep}
          />
        ) : (
          <Welcome onShowFile={showFile} errorMessage={error} />
        )}
      </StyledThisComp.Wrapper>
    </StyledThisComp.Container>
  );
}

export default App;
