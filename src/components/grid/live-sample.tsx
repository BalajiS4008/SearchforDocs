import { Grid, Columns, Column, GridRef, ColumnTemplateProps, TextAlign } from '@syncfusion/react-grid';
import { Button, IButton } from '@syncfusion/react-buttons';
import { INumericTextBox, NumericTextBox } from '@syncfusion/react-inputs';
import './tradeDetails.css';
import { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { tradeTickerData, Trade, TradeRow } from './tradeDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
    const gridRef = useRef<GridRef>(null);
    const updateButtonRef = useRef<IButton | null>(null);
    const clearButtonRef = useRef<IButton | null>(null);
    const feedDelayInputRef = useRef<INumericTextBox | null>(null);
    const [timerID, setTimerID] = useState<ReturnType<typeof setInterval> | undefined>(undefined);
    const [isUpdating, setIsUpdating] = useState(false);
    const initial = useRef<boolean>(true);

    const onDataLoad = () => {
        if (gridRef.current && initial.current) {
            document.getElementById('update1')?.click();
            initial.current = false;
            const handleKeyPress = (e: KeyboardEvent) => {
                if (e.key === 'Enter' && feedDelayInputRef.current?.element?.parentElement?.classList.contains('sf-input-focus')) {
                    feedDelayInputRef.current.value = parseInt(feedDelayInputRef.current.element.value);
                    updateButtonRef.current?.element?.click();
                }
            };
            feedDelayInputRef.current?.element?.addEventListener('keypress', handleKeyPress);
            return () => {
                feedDelayInputRef.current?.element?.removeEventListener('keypress', handleKeyPress);
            };
        }
    };

    /** 
     * Renders the Change column template, displaying the change value with conditional styling.
     * @param props - The cell template arguments provided by the grid.
     * @returns A React element displaying the formatted change value.
     */
    const ChangeTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const change = (props?.data as Trade)?.change ?? 0;
        const className = change < 0 ? 'below-0' : 'above-0';
        return (
            <div className={className}>
                <span className="rowcell-left">{change.toFixed(2)}</span>
            </div>
        );
    }, []);

    /** 
     * Renders the Change Percent column template, displaying the percentage change with conditional styling.
     * @param props - The cell template arguments provided by the grid.
     * @returns A React element displaying the formatted change percentage.
     */
    const ChangePercentTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const changePercent = (props?.data as Trade)?.change_percent ?? 0;
        const className = changePercent < 0 ? 'below-0' : 'above-0';
        return (
            <div className={className}>
                <span className="rowcell-left">{changePercent.toFixed(2)}%</span>
            </div>
        );
    }, []);

    /** 
     * Renders the Rating column template, displaying a rating with an SVG icon based on the change percentage.
     * @param props - The cell template arguments provided by the grid.
     * @returns A React element with an SVG icon and rating text.
     */
    const RatingTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const change = (props?.data as Trade)?.change_percent ?? 0;
        let text: string;
        let textClass: string;
        let SvgComponent: React.FC;

        switch (true) {
            case change === 0:
                text = 'Neutral';
                textClass = 'neutral';
                SvgComponent = () => (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="none" />
                        <path d="M5 12H19" stroke="#888888" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                );
                break;
            case change < -1:
                text = 'Strongly Sell';
                textClass = 'below-0';
                SvgComponent = () => (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="none" />
                        <path d="M5.5 12.5L11.5 18.5L17.5 12.5" stroke="#FF3740" strokeWidth="2" strokeLinecap="square" />
                        <path d="M5.5 5.5L11.5 11.5L17.5 5.5" stroke="#FF3740" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                );
                break;
            case change < 0:
                text = 'Sell';
                textClass = 'below-0';
                SvgComponent = () => (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 7.08578L12 14.0858L19 7.08578L20.4142 8.5L12 16.9142L3.58578 8.5L5 7.08578Z"
                            fill="#FF3740"
                        />
                    </svg>
                );
                break;
            case change > 1:
                text = 'Strongly Buy';
                textClass = 'above-0';
                SvgComponent = () => (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="none" />
                        <path d="M17.5 11.5L11.5 5.5L5.5 11.5" stroke="#00A653" strokeWidth="2" strokeLinecap="square" />
                        <path d="M17.5 18.5L11.5 12.5L5.5 18.5" stroke="#00A653" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                );
                break;
            default:
                text = 'Buy';
                textClass = 'above-0';
                SvgComponent = () => (
                    <svg width="10" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8L8 2L14 8" stroke="#00A653" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                );
                break;
        }

        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span className={`sf-icons ${textClass} side-space`}>
                    <SvgComponent />
                </span>
                <span className={textClass}>{text}</span>
            </div>
        );
    }, []);

    const updateCellValues = () => {
        const fullData = (gridRef.current?.currentViewData ?? []) as TradeRow[];
        const rowsToUpdate = Math.floor(Math.random() * (70 - 50 + 1)) + 50; // Random between 50 and 70
        if (fullData.length === 0) return;

        // Randomly select unique indices from full dataset
        const indices = Array.from({ length: fullData.length }, (_, i) => i);
        const randomIndices = [];
        for (let i = 0; i < rowsToUpdate; i++) {
            const randomIndex = Math.floor(Math.random() * indices.length);
            randomIndices.push(indices.splice(randomIndex, 1)[0]);
        }

        randomIndices.forEach((index) => {
            const row = fullData[index];
            if (!row) return;

            const oldValue = row.price;
            const maxChangePercent = 2.0;
            const changeFactor = (Math.random() * 2 - 1) * maxChangePercent / 100;
            const newChange = parseFloat((oldValue * changeFactor).toFixed(2));
            const changePercent = parseFloat(((newChange / oldValue) * 100).toFixed(2));
            const ratingValue = newChange < 0 ? 'Sell' : 'Buy';

            gridRef.current?.setCellValue?.(row.id, 'change', newChange, true);
            gridRef.current?.setCellValue?.(row.id, 'change_percent', changePercent, true);
            gridRef.current?.setCellValue?.(row.id, 'Rating', ratingValue, true);
        });
    };

    const updateClick = () => {
        if (timerID) {
            clearInterval(timerID);
            setTimerID(undefined);
        }  
        const inputValue = feedDelayInputRef.current?.element?.value || '';
        const feedDelay = inputValue ? Number(inputValue.replace(/,/g, '')) : 0;
        setIsUpdating(true);
        const newTimerID = setInterval(updateCellValues, feedDelay);
        setTimerID(newTimerID);
    };

    const clearClick = () => {
        if (timerID) {
            setIsUpdating(false);
            clearInterval(timerID);
            setTimerID(undefined);
        }
    };

    useEffect(() => {
        return () => {
            if (timerID) clearInterval(timerID);
        };
    }, [timerID]);

    /** 
     * Renders the Ticker column template, displaying a stock image and ticker name.
     * @param props - The cell template arguments provided by the grid.
     * @returns A React element with an image and ticker text.
     */
    const stockTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const tradeData = props?.data as Trade;
        const ticker = tradeData.ticker ?? '';
        const initial = ticker.substring(0, 2);
        const colors = ['Red', 'Green', 'Blue', 'Orange', 'Purple'];
        const colorTheme = colors[tradeData.id % colors.length];
        const colorStyles: { [key: string]: { backgroundColor: string; color: string } } = {
            Red: { backgroundColor: '#fee2e2', color: '#b91c1c' },
            Green: { backgroundColor: '#dcfce7', color: '#166534' },
            Blue: { backgroundColor: '#dbeafe', color: '#1d4ed8' },
            Orange: { backgroundColor: '#ffedd5', color: '#9a3412' },
            Purple: { backgroundColor: '#f3e8ff', color: '#581c87' },
        };
        const avatarStyle: React.CSSProperties = colorStyles[colorTheme];
        return (
            <div className="ticker-cell">
                <div className="rounded-logo" style={avatarStyle}>
                    {initial}
                </div>
                <span className="ticker-name">{ticker}</span>
            </div>
        );
    }, []);

    return (
        <>
            <PropertyPane position="top" >
                <PropertyColumn>
                    <PropertyRow>
                        <div>
                            <label style={{ display: 'inline-block', fontSize: '14px', padding: '0 7px 0 5px', fontWeight: 700 }}>
                                Feed Delay(ms):
                            </label>
                            <NumericTextBox
                                format="N0"
                                defaultValue={300}
                                min={10}
                                max={5000}
                                width="150px"
                                style={{ marginLeft: '7px' }}
                                ref={feedDelayInputRef}
                                aria-label="Feed delay"
                                disabled={isUpdating}
                            />
                            <Button
                                id="update1"
                                ref={updateButtonRef}
                                onClick={updateClick}
                                style={{ marginLeft: '10px' }}
                                disabled={isUpdating}
                            >
                                Start Data Update
                            </Button>
                            <Button
                                id="clear"
                                ref={clearButtonRef}
                                onClick={clearClick}
                                style={{ marginLeft: '10px' }}
                                disabled={!isUpdating}
                            >
                                Stop Data Update
                            </Button>
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            <div className="control-pane">
                <div className="control-section">
                    
                    {useMemo(
                        /** 
                         * Memoized Grid component to prevent unnecessary re-renders.
                         * @returns The Syncfusion Grid component with configured columns and templates.
                         */
                        () => (
                            <Grid
                                className="trade"
                                ref={gridRef}
                                dataSource={tradeTickerData}
                                enableHover={false}
                                rowHeight={40}
                                height={400}
                                onDataLoad={onDataLoad}
                                selectionSettings={{ enabled: false }}
                                allowKeyboard={false}
                            >
                                <Columns>
                                    <Column field="ticker" headerText="Ticker" width="100" template={stockTemplate} textAlign={TextAlign.Left} />
                                    <Column field="change_percent" headerText="Change %" width="100" textAlign={TextAlign.Right} template={ChangePercentTemplate} />
                                    <Column field="change" headerText="Change" width="100" format="C2" textAlign={TextAlign.Right} template={ChangeTemplate} />
                                    <Column field="price" headerText="Price" width="100" format="C2" textAlign={TextAlign.Right} />
                                    <Column field="high" headerText="High" format="C2" textAlign={TextAlign.Right} width="130" />
                                    <Column field="low" headerText="Low" format="C2" textAlign={TextAlign.Right} width="130" />
                                    <Column field="Rating" headerText="Tech Rating" textAlign={TextAlign.Left} width="150" template={RatingTemplate} />
                                </Columns>
                            </Grid>
                        ),
                        []
                    )}
                </div>
            </div>
        </>
    );
}