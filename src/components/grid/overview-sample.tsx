import { useCallback, useMemo } from 'react';
import { Grid, Columns, Column, ColumnTemplateProps, TextAlign } from "@syncfusion/react-grid";
import { leadManagementData, LeadsDataItem } from "./leadsDetails";
import './leadsDetails.css';

export default function App() {
    /**
     * SVG icon for checkmark used in status badges.
     */
    const CheckIcon = () => (
        <svg className="status-badge-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    );

    /**
     * SVG icon for arrow up used in interest level badges.
     */
    const ArrowUpIcon = () => (
        <svg className="interest-badge-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
    );

    /**
     * SVG icon for arrow down used in interest level badges.
     */
    const ArrowDownIcon = () => (
        <svg className="interest-badge-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    );

    /**
     * Get avatar CSS class based on color theme.
     */
    const getAvatarClass = (colorTheme: string): string => {
        switch (colorTheme) {
            case 'Red': return 'customer-avatar avatar-red';
            case 'Blue': return 'customer-avatar avatar-blue';
            case 'Green': return 'customer-avatar avatar-green';
            case 'Orange': return 'customer-avatar avatar-orange';
            case 'Purple': return 'customer-avatar avatar-purple';
            default: return 'customer-avatar avatar-blue';
        }
    };

    /**
     * Get status badge CSS class based on status.
     */
    const getStatusClass = (status: string): string => {
        switch (status?.toLowerCase()) {
            case 'qualified': return 'status-badge qualified';
            case 'new': return 'status-badge new';
            case 'contacted': return 'status-badge contacted';
            case 'lead': return 'status-badge lead';
            default: return 'status-badge';
        }
    };

    /**
     * Get interest badge CSS class based on interest level.
     */
    const getInterestClass = (interest: string): string => {
        switch (interest?.toLowerCase()) {
            case 'high': return 'interest-badge high';
            case 'medium': return 'interest-badge medium';
            case 'low': return 'interest-badge low';
            default: return 'interest-badge';
        }
    };

    /**
     * Template to render Lead ID as a clickable link.
     */
    const leadIdTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as LeadsDataItem;
        return <a className="lead-id-link" href="#">{data?.leadId}</a>;
    }, []);

    /**
     * Template to render customer details with avatar and information.
     */
    const customerDetailsTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as LeadsDataItem;
        return (
            <div className="customer-details">
                <div className={getAvatarClass(data?.details?.colorTheme || '')}>
                    {data?.details?.initial}
                </div>
                <div className="customer-info">
                    <p className="customer-name">{data?.details?.name}</p>
                    <p className="customer-email">{data?.details?.email}</p>
                </div>
            </div>
        );
    }, []);

    /**
     * Template to render lead status with badge.
     */
    const statusTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as LeadsDataItem;
        return (
            <span className={getStatusClass(data?.status || '')}>
                <CheckIcon />
                {data?.status}
            </span>
        );
    }, []);

    /**
     * Template to render interest level with appropriate badge and icon.
     */
    const interestTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as LeadsDataItem;
        const interest = data?.interest;
        return (
            <span className={getInterestClass(interest || '')}>
                {interest === "High" && <ArrowUpIcon />}
                {interest === "Medium" && <ArrowUpIcon />}
                {interest === "Low" && <ArrowDownIcon />}
                {interest}
            </span>
        );
    }, []);

    /**
     * Template to render assignee with avatar and name.
     */
    const assigneeTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as LeadsDataItem;
        const assignee = data?.assignee;
        return (
            <div className="assignee-details">
                <img className="assignee-avatar" 
                     src={`/images/grid/avatar/${assignee?.avatar}`} 
                     alt={assignee?.name} />
                <div className="assignee-name">{assignee?.name}</div>
            </div>
        );
    }, []);

    /**
     * Template to render formatted date for next contact.
     */
    const dateTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as LeadsDataItem;
        const formattedDate = data?.date ? new Date(data.date).toLocaleDateString('en-US', { 
            month: '2-digit', 
            day: '2-digit', 
            year: 'numeric' 
        }) : '';
        return <span className="next-contact-date">{formattedDate}</span>;
    }, []);

    /**
     * Template to render lead source.
     */
    const sourceTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as LeadsDataItem;
        return <span className="lead-source">{data?.source}</span>;
    }, []);

    /**
     * Template to render formatted revenue amount.
     */
    const revenueTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const data = props?.data as LeadsDataItem;
        const formattedRevenue = data?.revenue ? `$${data.revenue.toLocaleString()}` : '';
        return <span className="revenue-amount">{formattedRevenue}</span>;
    }, []);

    return useMemo(() => (
        <div className="leads">
            <Grid dataSource={leadManagementData} width="100%">
                <Columns>
                    <Column field="leadId" headerText="Lead ID" textAlign={TextAlign.Center} width="80" template={leadIdTemplate} />
                    <Column field="customerDetails" headerText="Name" textAlign={TextAlign.Left} width="260" template={customerDetailsTemplate} />
                    <Column field="status" headerText="Lead Status" width="130" template={statusTemplate} />
                    <Column field="interest" headerText="Interest Level" width="140" template={interestTemplate} />
                    <Column field="date" headerText="Next Contact" width="110" textAlign={TextAlign.Right} template={dateTemplate} />
                    <Column field="assignee" headerText="Assigned To" width="160" template={assigneeTemplate} />
                    <Column field="source" headerText="Lead Source" width="130" template={sourceTemplate} />
                    <Column field="revenue" headerText="Expected Revenue" width="170" textAlign={TextAlign.Right} template={revenueTemplate} />
                </Columns>
            </Grid>
        </div>
    ), [leadIdTemplate, customerDetailsTemplate, statusTemplate, interestTemplate, assigneeTemplate, dateTemplate, sourceTemplate, revenueTemplate]);
}
