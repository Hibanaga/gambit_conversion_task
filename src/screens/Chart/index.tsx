import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { themes } from "../../styles/theme";
import { IParsedData } from "../../types/parser.types";
import { arrOptions, options } from "../../utils/options";
import { getCalculateValue } from "../../utils/switchParser";
import * as StyledThisComp from "./Chart.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IChartProps {
  parsedData: IParsedData;
}

const Chart: FC<IChartProps> = ({ parsedData }) => {
  const calculationParams = arrOptions.map((item) => item.split(" ")[0]);
  const labels = arrOptions.map((item) => item.split(" ").slice(1).join(" "));

  const chartValues = arrOptions.map((option, idx) =>
    Number(getCalculateValue(calculationParams[idx], parsedData.data))
  );

  const data = {
    labels,
    datasets: [
      {
        label: "conversion",
        data: chartValues,
        backgroundColor: themes.colours.blue100,
      },
    ],
  };

  return (
    <StyledThisComp.Container>
      <Bar options={options} data={data} />
    </StyledThisComp.Container>
  );
};

export default Chart;
