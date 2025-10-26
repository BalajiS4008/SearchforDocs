import { Grid, Columns, Column, ColumnTemplateProps, ColumnHeaderTemplateProps, TextAlign } from '@syncfusion/react-grid';
import { DescriptionIcon, LocationIcon, TimelineMonthIcon, UserIcon } from '@syncfusion/react-icons';
import { ChipList } from '@syncfusion/react-buttons';
import { useCallback, useMemo } from 'react';
import './employeeProfileDetails.css';
import { employeeAssetRegistry, EmployeeAssetDetail } from './employeeProfileDetails';

export default function App() {
    // Renders the Image column template, displaying the employee's image.
    const imageColumnTemplate = useCallback((props?: ColumnTemplateProps): string | React.ReactElement => {
        const src = '/images/grid/' + (props?.data as EmployeeAssetDetail).EmployeeID.replace('EMP-100', '') + '.png';
        return (
        <div className='image'>
            <img src={src} alt={(props?.data as EmployeeAssetDetail).EmployeeID} />
        </div>);
    }, []);

    // Renders the Asset Kit column template, displaying the asset kit items in a ChipList.
    const assetColumnTemplate = useCallback((props?: ColumnTemplateProps): string | React.ReactElement => {
        return (
            <div>
                <ChipList id='chip' chips={(props?.data as EmployeeAssetDetail).AssetKit.split(',')}></ChipList>
            </div>
        );
    }, []);

    // Renders the header template for the Image column with a User icon.
    const imageHeaderTemplate = useCallback((props?: ColumnHeaderTemplateProps) => {
        return (<div>
            <UserIcon className='sf-user' width={15} height={15} />{props?.column.headerText}
        </div>);
    }, []);
 
    // Renders the header template for the Email ID column with a mail icon.
    const mailIDHeaderTemplate = useCallback((props?: ColumnHeaderTemplateProps) => {
        return (<div>
            <span className="sf-mail sf-icons"></span>{props?.column.headerText}
        </div>);
    }, []);

    // Renders the header template for the Asset Kit column with a Description icon.
    const assetHeaderTemplate = useCallback((props?: ColumnHeaderTemplateProps) => {
        return (<div>
            <DescriptionIcon className='sf-description' width={16} height={16} />{props?.column.headerText}
        </div>);
    }, []);

    // Renders the header template for the Assigned Date column with a TimelineMonth icon.
    const dateHeaderTemplate = useCallback((props?: ColumnHeaderTemplateProps) => {
        return (<div className='sf-header-template-right'>
            <TimelineMonthIcon className='sf-date' width={15} height={15} />{props?.column.headerText}
        </div>);
    }, []);

    // Renders the header template for the Location column with a Location icon.
    const locationHeaderTemplate = useCallback((props?: ColumnHeaderTemplateProps) => {
        return (<div className='sf-header-template-center'>
            {props?.column.headerText}
            <LocationIcon className='sf-location' width={16} height={16} />
        </div>);
    }, []);

    // Renders the header template for the Contact No column with a phone icon.
    const phoneHeaderTemplate = useCallback((props?: ColumnHeaderTemplateProps) => {
        return (<div className='sf-header-template-right'>
            <span className="sf-phone sf-icons"></span>{props?.column.headerText}
        </div>);
    }, []);

    // Memoized Grid component to prevent unnecessary re-renders.
    return (
        <div>
            {useMemo(
                () => (
                    <Grid dataSource={employeeAssetRegistry} height='500' className='employee-detail' >
                        <Columns>
                            <Column headerText='Image' field='Image' width='140' template={imageColumnTemplate} textAlign='Center' headerTemplate={imageHeaderTemplate} />
                            <Column field='EmployeeID' headerText='Employee ID' width='120' />
                            <Column field='MailID' headerText='Email ID' width='180' headerTemplate={mailIDHeaderTemplate} />
                            <Column field='AssetKit' headerText='Asset Kit' width='220' template={assetColumnTemplate} headerTemplate={assetHeaderTemplate} />
                            <Column field='Location' headerText='Location' width='120' headerTemplate={locationHeaderTemplate} />
                            <Column field='AssetKitDistribution' headerText='Assigned Date' width='140' format='yMd' headerTemplate={dateHeaderTemplate} textAlign={TextAlign.Right} />
                            <Column field='PhoneNumber' headerText='Contact No' width='150' textAlign={TextAlign.Right} headerTemplate={phoneHeaderTemplate} />
                        </Columns>
                    </Grid>
                ),
                [
                    imageColumnTemplate,
                    assetColumnTemplate,
                    imageHeaderTemplate,
                    mailIDHeaderTemplate,
                    assetHeaderTemplate,
                    dateHeaderTemplate,
                    locationHeaderTemplate,
                    phoneHeaderTemplate
                ]
            )}
        </div>
    );
};