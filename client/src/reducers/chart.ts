import { IChart } from './../types/chart';
import { createSlice } from '@reduxjs/toolkit';
import { ChartData } from 'chart.js';

function makeColor() {
  return '#' + Math.round(Math.random() * 0xffffff).toString(16);
}

const initialState: IChart = {
  chartLoadDone: false,
  data: {
    labels: [],
    datasets: [
      {
        label: [],
        data: [],
        backgroundColor: '',
      },
    ],
  },
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    addchartData(state, action) {
      state.chartLoadDone = true;

      let labels = [];
      let age = [];
      let chartData: ChartData[] = [];

      for (let i = 0; i < action.payload.length; i++) {
        chartData.push(action.payload[i].ratio);
        labels.push(action.payload[i].period);
        age.push(action.payload[i].group);
      }

      state.data = {
        labels: Array.from(new Set(labels)),
        datasets: [
          {
            label: age,
            data: chartData,
            backgroundColor: makeColor(),
          },
        ],
      };
    },
  },
});

export default chartSlice;
