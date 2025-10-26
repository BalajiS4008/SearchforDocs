// src/components/chart/theme.tsx
import {  Theme } from "@syncfusion/react-charts";
import { useContext, useState } from "react";
import { ThemeContext } from '../../common/context';

// Create a custom hook to use in components
export function useChartTheme() {
  const { themeName } = useContext(ThemeContext);
  const chartTheme: Theme = themeName === 'material3-dark' ? 'Material3Dark' : 'Material3';
  const [pointMaterial3Colors] = useState(["#6355C7", "#00AEE0", "#FFB400", "#F7523F", "#963C70", "#FD7400", "#4BE0BC", "#2196F5", "#DE3D8A", "#162F88"]);
  const [pointMaterial3DarkColors] = useState(["#4EAAFF", "#FA4EAB", "#FFF500", "#17EA58", "#38FFE7", "#FF9E45", "#B3F32F", "#B93CE4", "#FC5664", "#9B55FF"]);
  
  return {
    chartTheme,
    pointMaterial3Colors,
    pointMaterial3DarkColors
  };
}