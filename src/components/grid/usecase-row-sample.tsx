import { Grid, Columns, Column, TextAlign, CellClassProps, CellType } from '@syncfusion/react-grid';
import { ChipList } from '@syncfusion/react-buttons';
import { useCallback, useMemo } from 'react';
import './pizzaMenuDetails.css';
import { pizzaMenu } from './pizzaMenuDetails';

export default function App() {
    // Renders a ChipList component for displaying pizza tags.
    const chipTags = useCallback((tags: string[]) => {
        return (<ChipList chips={tags} className={'sf-outline'} />);
    }, []);
 
    // Renders the row template for the Grid, displaying pizza details including image, title, description, tags, and price.
    const gridTemplate = useCallback((props: typeof pizzaMenu[0]) => {
        const src = '/images/grid/pizza/' + props.ImageURL;
        return (
            <tr>
                <td className="details">
                    <div className="sf-pizza-info-container">
                        <div className="sf-pizza-image-layout">
                            <img className="sf-pizza-image" src={src} alt={props.Title} />
                        </div>
                        <div className="sf-pizza-info-layout">
                            <div className="sf-info-text-separator"><span className="sf-pizza-title">{props.Title}</span><span className="sf-pizza-size">({props.Size} size)</span></div>
                            <div className="sf-info-text-separator"><span>{props.Description}</span></div>
                            <div className="sf-info-text-separator">{chipTags(Array.isArray(props['Tags']) ? props['Tags'] : (typeof props['Tags'] === 'string' ? (props['Tags']  as string).split(',') : []))}</div>
                            <div className="sf-pizza-price-min-layout sf-info-text-separator">
                                <span className="sf-pizza-price-text">Buy at&nbsp;</span>
                                <span className="sf-pizza-price">{props.Price}</span>
                                {props.OriginalPrice ?
                                    (<span className="sf-pizza-original-price">{props.OriginalPrice}</span>)
                                    : ''}
                            </div>
                        </div>
                        <div className="sf-flex-grow"></div>
                        <div className="sf-pizza-price-layout">
                            <div className="sf-info-text-separator"><span className="sf-pizza-price-text">Buy at</span></div>
                            <div className="sf-info-text-separator"><span className="sf-pizza-price">{props.Price}</span></div>
                            {props.OriginalPrice ?
                                <div className="sf-info-text-separator"><span className="sf-pizza-original-price">{props.OriginalPrice}</span></div>
                                : ''}
                        </div>
                    </div>
                </td>
            </tr>
        );
    }, [chipTags]);

    return (
        <div className='control-pane'>
            <div className='control-section'>
                {useMemo( 
                    // Memoized Grid component to prevent unnecessary re-renders.
                    () => (
                        <Grid
                            dataSource={pizzaMenu}
                            rowTemplate={gridTemplate}
                            width='auto'
                            height='335'
                            className='pizza'
                            allowKeyboard={false}
                            selectionSettings={{enabled: false}}
                            enableHover={false}
                        >
                            <Columns>
                                <Column
                                    headerText='PIZZA MENU'
                                    textAlign={TextAlign.Center}
                                    field='Title'
                                    cellClass={(props?: CellClassProps)=> {return props?.cellType === CellType.Content ? 'sf-pizza-cell' : ''} }
                                />
                            </Columns>
                        </Grid>
                    ),
                    [gridTemplate]
                )}
            </div>
        </div>
    );
}
