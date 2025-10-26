import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartZoomSettings, ChartAxisLabel, ChartMarker, ChartDataLabel, ChartMouseEvent } from "@syncfusion/react-charts";
import { paginationData, temperatureData, buttonRanges } from './zoom-paging-data';
import { useState } from 'react';
import { useChartTheme } from "./theme";
export default function App() {
    const { chartTheme } = useChartTheme();
    const isDark = (typeof chartTheme === 'string' && /dark/i.test(chartTheme));
    const [activeButton, setActiveButton] = useState('friday');
    const [, setIsFahrenheit] = useState(false);
    const [zoomPosition, setZoomPosition] = useState(0);
    const [zoomFactor, setZoomFactor] = useState(0.175);
    const [dataLabelName, setDataLabelName] = useState('datalabel');
    const [dataLabelFormat, setDataLabelFormat] = useState('{value}°C');
    const [buttonTemperatures, setButtonTemperatures] = useState(['2°C - 12°C', '6°C - 16°C', '15°C - 18°C', '12°C - 16°C', '14°C - 18°C']);
    const [, setCurrentWeatherData] = useState({ image: 'sunny_image', count: 12, day: 'Friday', rainfalls: 0, moistureLevels: 30, breezeSpeeds: 5, weather: 'Sunny' });
    const updateChart = (buttonId: string, img: string, tempCount: number, chartDay: string, zoomPos: number, zoomFact: number, rainfall: number, moistureLevel: number, breezeSpeed: number, weatherCondition: string) => {
        setCurrentWeatherData({ image: img, count: tempCount, day: chartDay, rainfalls: rainfall, moistureLevels: moistureLevel, breezeSpeeds: breezeSpeed, weather: weatherCondition });
        setActiveButton(buttonId);
        setZoomPosition(zoomPos);
        setZoomFactor(zoomFact);
        const buttons = document.querySelectorAll('.chart-custom-button');
        buttons.forEach((button) => button.classList.remove('active'));
        const selectedButton = document.getElementById(buttonId) as HTMLElement;
        selectedButton.classList.add('active');
    };
    const onClick = (args: ChartMouseEvent): void => {
        const activeButtonIndex = ['friday', 'saturday', 'sunday', 'monday', 'tuesday'].indexOf(activeButton);
        if (activeButtonIndex !== -1 && temperatureData[activeButtonIndex]) {
            const { celsius, fahrenheit } = temperatureData[activeButtonIndex];
            const temperatureElement: HTMLElement | null = document.getElementById('temperature');
            const celsiusElement: HTMLElement | null = document.getElementById('celsius');
            const fahrenheitElement: HTMLElement | null = document.getElementById('fahrenheit');
            if (args.target === 'celsius' && temperatureElement) {
                temperatureElement.innerHTML = `<b style="font-size: 50px">${celsius}</b>`;
                setIsFahrenheit(false);
                setDataLabelName('datalabel');
                setDataLabelFormat('{value}°C');
                if (celsiusElement) celsiusElement.style.opacity = '1';
                if (fahrenheitElement) fahrenheitElement.style.opacity = '0.5';
                const celsiusTemps = buttonRanges.celsius.map(range => `${range.min}°C - ${range.max}°C`);
                setButtonTemperatures(celsiusTemps);
            } else if (args.target === 'fahrenheit' && temperatureElement) {
                temperatureElement.innerHTML = `<b style="font-size: 50px">${fahrenheit}</b>`;
                setIsFahrenheit(true);
                setDataLabelName('datalabel1');
                setDataLabelFormat('{value}°F');
                if (celsiusElement) celsiusElement.style.opacity = '0.5';
                if (fahrenheitElement) fahrenheitElement.style.opacity = '1';
                const fahrenheitTemps = buttonRanges.fahrenheit.map(range => `${range.min}°F - ${range.max}°F`);
                setButtonTemperatures(fahrenheitTemps);
            }
        }
    };
    const handleButtonClick = (buttonId: string, img: string, tempCount: number, chartDay: string, zoomPos: number, zoomFact: number, rainfall: number, moistureLevel: number, breezeSpeed: number, weatherCondition: string) => {
        updateChart(buttonId, img, tempCount, chartDay, zoomPos, zoomFact, rainfall, moistureLevel, breezeSpeed, weatherCondition);
    };
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <style> {`
                .chart-container {
                    width: 100%; 
                    margin-bottom: 10px;
                }
                #chart-button-container {
                    padding: 5px;
                    background-color: ${isDark ? '#3c3c3c' : 'rgb(237, 236, 236)'};
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 10px;
                }
                .chart-custom-button {
                    flex-grow: 1;
                    flex-basis: 0;
                    height: 35%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: none;
                    border-radius: 5px;
                    justify-content: center;
                    background-color: ${isDark ? '#3c3c3c' : 'rgb(237, 236, 236)'};
                    cursor: pointer;
                    transition: background-color 0.3s, box-shadow 0.3s;
                    position: relative;
                }
                .chart-custom-button:not(:last-child):not(.active)::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    width: 2px;
                    height: 80%;
                    background-color: ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
                }
                .chart-custom-button.no-line::after {
                    display: none;
                }
                .chart-custom-button img {
                    width: 30px;
                    height: 30px;
                }
                .day, .temp {
                    font-size: 13px;
                    color: ${isDark ? 'white' : 'black'};
                }
                .chart-custom-button.active {
                    background-color: ${isDark ? '#737373' : 'white'} !important;
                    box-shadow: 0 0 0 2px ${isDark ? '#737373' : 'rgb(237, 236, 236)'};
                    z-index: 2;
                }
                .chart-custom-button:hover:not(.active) {
                    background-color: ${isDark ? '#555555' : '#dbdada'} !important;
                }
                #days, #weather {
                    font-size: 15px;
                    opacity: 0.7;
                    position: relative;
                    right: 0;
                    width: 85px;
                }
            `}</style>
            <div className="chart-container">
                <Chart theme={chartTheme} onClick={onClick} height="300px">
                    <ChartZoomSettings selectionZoom={true} pan={true} toolbar={{ items: [] }} mode="X" />
                    <ChartPrimaryXAxis valueType="Category" indexed={true} interval={1} zoomFactor={zoomFactor} zoomPosition={zoomPosition}>
                        <ChartAxisLabel placement="OnTicks" rotationAngle={0} edgeLabelPlacement="Shift" />
                    </ChartPrimaryXAxis>
                    <ChartPrimaryYAxis visible={false} maximum={20}/>
                    <ChartSeriesCollection>
                        <ChartSeries dataSource={paginationData} xField="xValue" yField="y" type="SplineArea" opacity={0.3} fill="#2B95C9" width={2} border={{ width: 3 }}>
                            <ChartMarker visible={true}>
                                <ChartDataLabel visible={true} labelField={dataLabelName} format={dataLabelFormat} position="Top" font={{ fontWeight: 'Bold' }} />
                            </ChartMarker>
                        </ChartSeries>
                    </ChartSeriesCollection>
                </Chart>
            </div>
            <div className="chart-button-container" id="chart-button-container">
                <button id="friday" className='chart-custom-button active'
                    onClick={() => { handleButtonClick('friday', 'sunny_image', 12, 'Friday', 0, 0.175, 0, 30, 5, 'Sunny') }}>
                    <div className="day">Friday</div>
                    <img src={`/images/chart/sunny_image.png`} alt="Friday" />
                    <div className="temp">{buttonTemperatures[0]}</div>
                </button>
                <button id="saturday" className='chart-custom-button'
                    onClick={() => { handleButtonClick('saturday', 'sunny_image', 16, 'Saturday', 0.206, 0.175, 0, 35, 6, 'Sunny') }}>
                    <div className="day">Saturday</div>
                    <img src={`/images/chart/sunny_image.png`} alt="Saturday" />
                    <div className="temp">{buttonTemperatures[1]}</div>
                </button>
                <button id="sunday" className='chart-custom-button'
                    onClick={() => { handleButtonClick('sunday', 'cloudy', 18, 'Sunday', 0.413, 0.175, 1, 40, 4, 'Cloudy') }}>
                    <div className="day">Sunday</div>
                    <img src={`/images/chart/cloudy.png`} alt="Sunday" />
                    <div className="temp">{buttonTemperatures[2]}</div>
                </button>
                <button id="monday" className='chart-custom-button'
                    onClick={() => { handleButtonClick('monday', 'cloudy', 16, 'Monday', 0.620, 0.175, 2, 45, 5, 'Cloudy') }}>
                    <div className="day">Monday</div>
                    <img src={`/images/chart/cloudy.png`} alt="Monday" />
                    <div className="temp">{buttonTemperatures[3]}</div>
                </button>
                <button id="tuesday" className='chart-custom-button'
                    onClick={() => { handleButtonClick('tuesday', 'rainy', 18, 'Tuesday', 0.827, 0.175, 5, 50, 6, 'Rainy') }}>
                    <div className="day">Tuesday</div>
                    <img src={`/images/chart/rainy.png`} alt="Tuesday" />
                    <div className="temp">{buttonTemperatures[4]}</div>
                </button>
            </div>
        </div>
    );
}