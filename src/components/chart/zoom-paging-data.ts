export const paginationData = [
  { x: 1, xValue: '1 am', y: 6, datalabel: '6', datalabel1: '43' },
  { x: 2, xValue: '4 am', y: 4, datalabel: '4', datalabel1: '39' },
  { x: 3, xValue: '7 am', y: 2, datalabel: '2', datalabel1: '36' },
  { x: 4, xValue: '10 am', y: 8, datalabel: '8', datalabel1: '46' },
  { x: 5, xValue: '1 pm', y: 12, datalabel: '12', datalabel1: '54' },
  { x: 6, xValue: '4 pm', y: 11, datalabel: '11', datalabel1: '52' },
  { x: 7, xValue: '1 am', y: 6, datalabel: '6', datalabel1: '43' },
  { x: 8, xValue: '4 am', y: 7, datalabel: '7', datalabel1: '45' },
  { x: 9, xValue: '7 am', y: 9, datalabel: '9', datalabel1: '48' },
  { x: 10, xValue: '10 am', y: 14, datalabel: '14', datalabel1: '57' },
  { x: 11, xValue: '1 pm', y: 16, datalabel: '16', datalabel1: '61' },
  { x: 12, xValue: '4 pm', y: 15, datalabel: '15', datalabel1: '59' },
  { x: 13, xValue: '1 am', y: 15, datalabel: '15', datalabel1: '59' },
  { x: 14, xValue: '4 am', y: 16, datalabel: '16', datalabel1: '61' },
  { x: 15, xValue: '7 am', y: 17, datalabel: '17', datalabel1: '63' },
  { x: 16, xValue: '10 am', y: 18, datalabel: '18', datalabel1: '64' },
  { x: 17, xValue: '1 pm', y: 18, datalabel: '18', datalabel1: '64' },
  { x: 18, xValue: '4 pm', y: 15, datalabel: '15', datalabel1: '59' },
  { x: 19, xValue: '1 am', y: 14, datalabel: '14', datalabel1: '57' },
  { x: 20, xValue: '4 am', y: 13, datalabel: '13', datalabel1: '55' },
  { x: 21, xValue: '7 am', y: 12, datalabel: '12', datalabel1: '54' },
  { x: 22, xValue: '10 am', y: 14, datalabel: '14', datalabel1: '57' },
  { x: 23, xValue: '1 pm', y: 16, datalabel: '16', datalabel1: '61' },
  { x: 24, xValue: '4 pm', y: 15, datalabel: '15', datalabel1: '59' },
  { x: 25, xValue: '1 am', y: 15, datalabel: '15', datalabel1: '59' },
  { x: 26, xValue: '4 am', y: 14, datalabel: '14', datalabel1: '57' },
  { x: 27, xValue: '7 am', y: 16, datalabel: '16', datalabel1: '61' },
  { x: 28, xValue: '10 am', y: 18, datalabel: '18', datalabel1: '64' },
  { x: 29, xValue: '1 pm', y: 16, datalabel: '16', datalabel1: '61' },
  { x: 30, xValue: '4 pm', y: 17, datalabel: '17', datalabel1: '63' }
];

interface TemperatureData {
  celsius: number;
  fahrenheit: number;
}

export const temperatureData: TemperatureData[] = [
  { celsius: 12, fahrenheit: 54 },
  { celsius: 16, fahrenheit: 61 },
  { celsius: 18, fahrenheit: 64 },
  { celsius: 16, fahrenheit: 61 },
  { celsius: 18, fahrenheit: 64 }
];

export const buttonRanges: { celsius: { min: number; max: number; }[], fahrenheit: { min: number; max: number; }[] } = {
  celsius: [
    { min: 2, max: 12 },
    { min: 6, max: 16 },
    { min: 15, max: 18 },
    { min: 12, max: 16 },
    { min: 14, max: 18 }
  ],
  fahrenheit: [
    { min: 36, max: 54 },
    { min: 43, max: 61 },
    { min: 59, max: 64 },
    { min: 54, max: 61 },
    { min: 57, max: 64 }
  ]
};