import React, { useCallback, useState } from 'react';
import { Grid, Column, Columns, CellClassProps, ColumnTemplateProps,  SortSettings, PageSettings, TextAlign, CellType } from '@syncfusion/react-grid';
import { restaurantMenu, MenuItem } from './restaurantDetails';
import './restaurantDetails.css';

export default function App() {


    // Initialize sort settings with enabled state.
    const [sortSettings] = useState<SortSettings>({enabled: true});
    
    // Initialize page settings with pagination enabled, page size, and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

    // Returns the CSS class for ItemName cells based on availability and category.
    const getItemNameCellClass = useCallback((props?: CellClassProps): string => {
        if (props?.cellType === CellType.Content) {
            const data = props?.data as MenuItem;
            if (!data?.IsAvailable) {
                return 'sf-m3-unavailable-item';
            } else if (data.Category === 'Main Course') {
                return 'sf-m3-featured-item';
            } else {
                return 'sf-m3-standard-item';
            }
        } else if (props?.cellType === CellType.Header) {
            return 'sf-m3-primary-header';
        } else {
            return '';
        }
    }, []);

    // Returns the CSS class for Price cells based on price value.
    const getPriceCellClass = useCallback((props?: CellClassProps): string => {
        if (props?.cellType === CellType.Content) {
            const data = props?.data as MenuItem;
            const price = parseFloat(data?.Price?.toString() || '0');
            if (price >= 15) {
                return 'sf-m3-premium-price';
            } else if (price >= 10) {
                return 'sf-m3-standard-price';
            } else {
                return 'sf-m3-budget-price';
            }
        } else if (props?.cellType === CellType.Header) {
            return 'sf-m3-secondary-header';
        } else {
            return '';
        }
    }, []);

    // Returns the CSS class for SpiceLevel cells based on spice level value.
    const getSpiceLevelCellClass = useCallback((props?: CellClassProps): string => {
        if (props?.cellType === CellType.Content) {
            const data = props?.data as MenuItem;
            const spiceLevel = data?.SpiceLevel;
            return `sf-m3-spice-${spiceLevel?.toLowerCase()}`;
        } else if (props?.cellType === CellType.Header) {
            return 'sf-m3-error-header';
        } else {
            return '';
        }
    }, []);

    // Returns the CSS class for IsAvailable cells based on availability value.
    const getAvailabilityCellClass = useCallback((props?: CellClassProps): string => {
        if (props?.cellType === CellType.Content) {
            const data = props?.data as MenuItem;
            if (data?.IsAvailable) {
                return 'sf-m3-available';
            } else {
                return 'sf-m3-unavailable';
            }
        } else if (props?.cellType === CellType.Header) {
            return 'sf-m3-tertiary-header';
        } else {
            return '';
        }
    }, []);

    // React template for availability status with inline SVG icons.
    const availabilityTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as MenuItem;
        const isAvailable = data?.IsAvailable === true;
        
        return (
            <div className={`sf-availability-template ${isAvailable ? 'sf-available' : 'sf-unavailable'}`}>
                {isAvailable ? (
                    <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sf-icon" role="img" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>Available</span>
                    </>
                ) : (
                    <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sf-icon" role="img" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        <span>Unavailable</span>
                    </>
                )}
            </div>
        );
    }, []);

    // React template for spice level with inline SVG icons.
    const spiceLevelTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as MenuItem;
        const spiceLevel = data?.SpiceLevel || 'None';
        
        const getSpiceDisplay = (level: string) => {
            switch (level) {
                case 'Hot': {
                    return { text: 'Hot', intensity: 3 };
                }
                case 'Medium': {
                    return { text: 'Medium', intensity: 2 };
                }
                case 'Mild': {
                    return { text: 'Mild', intensity: 1 };
                }
                case 'None': {
                    return { text: 'None', intensity: 0 };
                }
                default: {
                    return { text: 'None', intensity: 0 };
                }
            }
        };

        const spiceInfo = getSpiceDisplay(spiceLevel);
        
        return (
            <div className={`sf-spice-template sf-spice-${spiceLevel.toLowerCase()}`}>
                <div className="sf-spice-icons">
                    {Array.from({ length: spiceInfo.intensity }, (_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sf-icon" role="img" aria-hidden="true">
                            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                        </svg>
                    ))}
                </div>
                <span>{spiceInfo.text}</span>
            </div>
        );
    }, []);

    // React template for formatted price with inline SVG icon.
    const priceTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as MenuItem;
        const price = data?.Price || 0;
        const priceClass = price >= 15 ? 'premium' : price >= 10 ? 'standard' : 'budget';
        
        return (
            <div className={`sf-price-template sf-price-${priceClass}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sf-icon" role="img" aria-hidden="true">
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
                </svg>
                <span>${price.toFixed(2)}</span>
            </div>
        );
    }, []);

    // React template for item name with inline SVG icon.
    const itemNameTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as MenuItem;
        const itemName = data?.ItemName || 'Unknown Item';
        const category = data?.Category || 'Unknown';
        const isMainCourse = category === 'Main Course';
        const isAvailable = data?.IsAvailable === true;
        
        return (
            <div className={`sf-item-name-template ${!isAvailable ? 'sf-unavailable' : ''} ${isMainCourse ? 'sf-featured' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sf-icon" role="img" aria-hidden="true">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                </svg>
                <span className={!isAvailable ? 'sf-strikethrough' : ''}>{itemName}</span>
                {isMainCourse && isAvailable && <span className="sf-featured-badge">Featured</span>}
            </div>
        );
    }, []);

    return (
        <div className="restaurant-menu">
            <Grid 
                dataSource={restaurantMenu} 
                sortSettings={sortSettings} 
                enableHover={true} 
                pageSettings={pageSettings}
            >
                <Columns>
                    <Column field="ItemID" headerText="Product ID" width="120"/>
                    <Column field="ItemName" headerText="Item Name" width="200" template={itemNameTemplate} cellClass={getItemNameCellClass} />
                    <Column field="Price" headerText="Price" width="130" textAlign={TextAlign.Right} template={priceTemplate} cellClass={getPriceCellClass} />
                    <Column field="SpiceLevel" headerText="Spice Level" width="140" template={spiceLevelTemplate} cellClass={getSpiceLevelCellClass} />
                    <Column field="IsAvailable" headerText="Availability" width="140" template={availabilityTemplate} cellClass={getAvailabilityCellClass} />
                </Columns>
            </Grid>
        </div>
    );
}
