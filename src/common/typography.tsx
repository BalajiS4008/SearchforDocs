import React, { HTMLAttributes, useState, useContext } from 'react';
import { PropertyPane, PropertyColumn, PropertyRow } from './property-pane';
import { ThemeContext } from './context';
import { DropDownList, ChangeEventArgs } from '@syncfusion/react-dropdowns';
import './typography.css';

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
    properties?: ('font-size' | 'font-family' | 'letter-spacing' | 'border-radius' | 'spacing')[];
    maxFontSize?: number;
    maxLetterSpacing?: number;
    maxBorderRadius?: number;
    maxSpacing?: number;
    minFontSize?: number;
    minLetterSpacing?: number;
    minBorderRadius?: number;
    minSpacing?: number;
}

type CSSCustomProperties = {
    [key: string]: string | number;
};

export type CombinedCSSProperties = React.CSSProperties & CSSCustomProperties;

const defaultValues: { [key: string]: { cssVar: string; defaultValue: string } } = {
    'font-size': { cssVar: '--sf-font-size', defaultValue: '1rem' },
    'font-family': { cssVar: '--sf-font-family', defaultValue: '"Roboto", sans-serif' },
    'letter-spacing': { cssVar: '--sf-letter-spacing', defaultValue: '0px' },
    'border-radius': { cssVar: '--sf-radius', defaultValue: '1rem' },
    'spacing': { cssVar: '--sf-spacing', defaultValue: '1rem' }
};

const fontFamilies: string[] = [
    'Arial, sans-serif',
    'Verdana, sans-serif',
    'Lucida Console, monospace',
    'Roboto, sans-serif',
];

interface SliderInputProps {
    value: number;
    min: number;
    max: number;
    step: number;
    unit: string;
    onChange: (value: number) => void;
    label: string;
}

const SliderInput: React.FC<SliderInputProps> = ({ value, min, max, step, unit, onChange, label }) => {
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(parseFloat(e.target.value));
    };
    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(parseFloat(e.target.value));
    };
    const fillPercentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="slider-parent-container">
            <div className="slider-container">
                <span className="slider-label">{label}</span>
                <input
                    className='sb-numeric-input'
                    type="number"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleNumberChange}
                />
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleSliderChange}
                className="sb-range-slider"
                style={{
                    background: `linear-gradient(to right, var(--button-primary-bg) ${fillPercentage}%, #D5DBE1 ${fillPercentage}%)`
                }}
            />
            <div className="min-max-container">
                <span className="slider-min-max">{min} {unit}</span>
                <span className="slider-min-max">{max} {unit}</span>
            </div>
        </div>
    );
};

export const Typography: React.FC<TypographyProps> = ({
    properties: propList = Object.keys(defaultValues) as Array<keyof typeof defaultValues>,
    maxFontSize = 1.5,
    maxLetterSpacing = 8,
    maxBorderRadius = 5,
    maxSpacing = 2,
    minFontSize = 0.5,
    minLetterSpacing = 0,
    minBorderRadius = 0,
    minSpacing = 0.1,
    children,
    ...rest
}) => {
    const [themeVars, setThemeVars] = useState(() => {
        const initialVars: { [key: string]: string } = {};
        propList.forEach(prop => {
            initialVars[prop] = defaultValues[prop].defaultValue;
        });
        return initialVars;
    });
    const { themeName } = useContext(ThemeContext);
    const handleChange = (prop: keyof typeof defaultValues, value: number | string) => {
        setThemeVars(prevVars => ({
            ...prevVars,
            [prop]: typeof value === 'number' ? (
                prop === "letter-spacing" ? `${value}px` : `${value}rem`
            ) : value,
        }));
    };
    const renderControl = (prop: keyof typeof defaultValues) => {
        if (prop === 'font-family') {
            return (<>
                <span className='property-label'>Font Family</span>
                <DropDownList
                    dataSource={fontFamilies}
                    value={themeVars[prop]}
                    onChange={(e: ChangeEventArgs) => handleChange(prop, e.value as string)}
                    placeholder="Select a font family"
                />
            </>
            );
        }
        const value = parseFloat(themeVars[prop]);
        let maxPropValue: number = 0;
        let minPropValue: number = 0;
        let unit: string = 'rem';
        switch (prop) {
            case 'font-size':
                maxPropValue = maxFontSize;
                minPropValue = minFontSize;
                unit = 'rem';
                break;
            case 'letter-spacing':
                maxPropValue = maxLetterSpacing;
                minPropValue = minLetterSpacing;
                unit = 'px';
                break;
            case 'border-radius':
                maxPropValue = maxBorderRadius;
                minPropValue = minBorderRadius;
                unit = 'rem';
                break;
            case 'spacing':
                maxPropValue = maxSpacing;
                minPropValue = minSpacing;
                unit = 'rem';
                break;
            default:
                break;
        }

        return (
            <SliderInput
                value={value}
                min={minPropValue}
                max={maxPropValue}
                step={0.1}
                unit={unit}
                onChange={(newValue) => handleChange(prop, newValue)}
                label={propertyMap[prop]}
            />
        );
    };

    const propertyMap: { [key: string]: string } = {
        'font-size': 'Font Size',
        'font-family': 'Font Family',
        'letter-spacing': 'Letter Spacing',
        'border-radius': 'Border Radius',
        'spacing': 'Spacing'
    };
    const columns: { [key: string]: Array<keyof typeof defaultValues> } = {
        col1: [],
        col2: [],
    };

    if (propList.includes('font-size')) columns.col1.push('font-size');
    if (propList.includes('letter-spacing')) columns.col1.push('letter-spacing');
    if (propList.includes('font-family')) columns.col1.push('font-family');
    if (propList.includes('spacing')) columns.col2.push('spacing');
    if (propList.includes('border-radius')) columns.col2.push('border-radius');

    const inlineStyles = Object.entries(themeVars).reduce((acc, [key, value]) => {
        const cssVarName = defaultValues[key as keyof typeof defaultValues].cssVar;
        (acc as CombinedCSSProperties)[cssVarName] = value as string;
        return acc;
    }, {} as CombinedCSSProperties);

    return (
        <>
            <PropertyPane className="typography" style={{maxHeight: '100%'}}>
                {Object.keys(columns).filter(col => columns[col].length > 0).map((colKey, index) => (
                    <PropertyColumn key={index}>
                        <div>
                            {columns[colKey].map(prop => (
                                <div style={{ margin: '20px' }} key={prop}>
                                    <PropertyRow>
                                        {renderControl(prop)}
                                    </PropertyRow>
                                </div>
                            ))}
                        </div>
                    </PropertyColumn>
                ))}
            </PropertyPane >
            <div style={inlineStyles} {...rest} className={`typography-section ${themeName.includes('dark') ? 'sf-dark-mode' : 'sf-light-mode'}`}>
                {children}
            </div>
        </>
    );
};