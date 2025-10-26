import { lazy } from 'react';

const GridContent = lazy(() => import('./index.mdx'));
const GettingStartedContent = lazy(() => import('./getting-started.mdx'));
const ColumnRenderingContent = lazy(() => import( './columnconfiguration.mdx'));
const ColumnTypeContent = lazy(() => import( './columntype.mdx'));
const ColumnFormatContent = lazy(() => import( './columnformat.mdx'));
const HeaderAndCustomizationContent = lazy(() => import( './headerandcustomization.mdx'));
const CellTextWrap = lazy(() => import( './textwrap.mdx'));
const ClipMode = lazy(() => import( './clipmode.mdx'));
const CellHtml = lazy(() => import( './cell-with-html.mdx'));
const CellStyle= lazy(() => import( './cellstyle.mdx'));
const CellExpression = lazy(() => import( './cellexpression.mdx'));
const GridLinesContent = lazy(() => import( './grid-lines.mdx'));
const TemplateContent = lazy(() => import( './template.mdx'));
const ColumnStateContent = lazy(() => import( './columnstate.mdx'));
const RowContent = lazy(() => import('./rows.mdx'));
const RowTemplate = lazy(() => import('./row-template.mdx'));
const EditContent = lazy(() => import('./editing.mdx'));
const EditTypeContent = lazy(() => import('./edittype.mdx'));
const InlineEditContent = lazy(() => import('./inlineedite.mdx'));
const ValidationContent = lazy(() => import('./validation.mdx'));
const CustomEditContent = lazy(() => import('./custom-edit.mdx'));
const SortContent = lazy(() => import('./sorting.mdx'));
const FilterContent = lazy(() => import('./filtering.mdx'));
const FilterbarContent = lazy(() => import('./filterbar.mdx'));
const AdvanceFilterContent = lazy(() => import('./advanced-filter.mdx'));
const SearchContent = lazy(() => import('./searching.mdx'));
const PageContent = lazy(() => import('./paging.mdx'));
const AggregateContent = lazy(() => import('./aggregates.mdx'));
const SelectionContent = lazy(() => import('./selection.mdx'));
const GlobalizationContent = lazy(() => import('./globalization.mdx'));
const AccessibilityContent = lazy(() => import('./accessibility.mdx'));
const LiveSampleContent = lazy(() => import('./livesample.mdx'));
const ChefSampleContent = lazy(() => import('./chefsample.mdx'));
const LocalDataBindingContent = lazy(() => import('./localdatabinding.mdx'));
const RemoteDataBindingContent = lazy(() => import('./remotedatabinding.mdx'));
const CustomBindingContent = lazy(() => import( './custombinding.mdx'));
const TemplateBindingContent = lazy(() => import( './templatebinding.mdx'));

export const gridRoutes = [
    { id: 'grid1', pid: 'components', name: 'Data Grid', label:"new", category:"Grid", hasChildren: true}, 
    {id: 'grid', pid: 'grid1', name: 'Overview', category:"Grid", hasChildren: false, component: <GridContent />, toc: false },
    {id: 'gettingstarted', pid: 'grid1', name: 'Getting Started', category:"Grid", hasChildren: false, component: <GettingStartedContent />, toc: false },
    {id: 'usecasesamples', pid: 'grid1', name: 'Real-Time Grid', category:"Grid", hasChildren: true, toc: false},
    {id: 'livesample', pid: 'usecasesamples', name: 'Streaming Trade View', category:"Grid", hasChildren: false, component: <LiveSampleContent />, toc: false },
    {id: 'chefsample', pid: 'usecasesamples', name: 'Order Status Tracker', category:"Grid", hasChildren: false, component: <ChefSampleContent />, toc: false },
    {id: 'databinding', pid: 'grid1', name: 'Data Binding', category:"Grid", hasChildren: true, toc: false},
    {id: 'localdatabinding', pid: 'databinding', name: 'Local Data', category:"Grid", hasChildren: false, component: <LocalDataBindingContent />, toc: false },
    {id: 'remotedatabinding', pid: 'databinding', name: 'Remote Data', category:"Grid", hasChildren: false, component: <RemoteDataBindingContent />, toc: false },
    {id: 'custombinding', pid: 'databinding', name: 'Custom Data', category:"Grid", hasChildren: false, component: <CustomBindingContent />, toc: false },
    {id: 'templatebinding', pid: 'databinding', name: 'Empty Record Template', category:"Grid", hasChildren: false, component: <TemplateBindingContent />, toc: false },
    {id: 'columns', pid: 'grid1', name: 'Columns', category:"Grid", hasChildren: true, toc: false },
    {id: 'configuration', pid: 'columns', name: 'Configuration', category:"Grid", hasChildren: false, component: <ColumnRenderingContent />, toc: false },
    {id: 'type', pid: 'columns', name: 'Column Types', category:"Grid", hasChildren: false, component: <ColumnTypeContent />, toc: false },
    {id: 'format', pid: 'columns', name: 'Column Format', category:"Grid", hasChildren: false, component: <ColumnFormatContent />, toc: false },
    {id: 'headerandcustomization', pid: 'columns', name: 'Headers', category:"Grid", hasChildren: false, component: <HeaderAndCustomizationContent />, toc: false },
    {id: 'template', pid: 'columns', name: 'Templates', category:"Grid", hasChildren: false, component: <TemplateContent />, toc: false },
    {id: 'statemanagement', pid: 'columns', name: 'React State for Column', category:"Grid", hasChildren: false, component: <ColumnStateContent />, toc: false },
    {id: 'rows', pid: 'grid1', name: 'Rows', category:"Grid", hasChildren: true, },
    {id: 'rowsconfiguration', pid: 'rows', name: 'Rows', category:"Grid", hasChildren: false, component: <RowContent />, toc: false },
    {id: 'rowtemplate', pid: 'rows', name: 'Templates', category:"Grid", hasChildren: false, component: <RowTemplate />, toc: false },
    {id: 'cells', pid: 'grid1', name: 'Cell', category:"Grid", hasChildren: true,  toc: false },
    {id: 'textwrap', pid: 'cells', name: 'Text Wrap', category:"Grid", hasChildren: false, component: <CellTextWrap/>, toc: false },
    {id: 'clipmode ', pid: 'cells', name: 'Clip Mode', category:"Grid", hasChildren: false, component: <ClipMode/>, toc: false },
    {id: 'cellexpression ', pid: 'cells', name: 'Expressions', category:"Grid", hasChildren: false, component: <CellExpression/>, toc: false },
    {id: 'cellhtml ', pid: 'cells', name: 'Display HTML Content', category:"Grid", hasChildren: false, component: <CellHtml/>, toc: false },
    {id: 'cellstyling ', pid: 'cells', name: 'Styling Cells', category:"Grid", hasChildren: false, component: <CellStyle/>, toc: false },
    {id: 'gridlines', pid: 'cells', name: 'Grid Lines', category:"Grid", hasChildren: false, component: <GridLinesContent />, toc: false },
    {id: 'editing', pid: 'grid1', name: 'Editing', category:"Grid", hasChildren: true, toc: false },
    {id: 'editingconfiguration', pid: 'editing', name: 'Configuration', category:"Grid", hasChildren: false, component: <EditContent />, toc: false },
    {id: 'editingtypes', pid: 'editing', name: 'Editing Types', category:"Grid", hasChildren: false, component: <EditTypeContent />, toc: false },
    {id: 'inlineediting', pid: 'editing', name: 'Inline Editing', category:"Grid", hasChildren: false, component: <InlineEditContent />, toc: false },
    {id: 'validation', pid: 'editing', name: 'Validation', category:"Grid", hasChildren: false, component: <ValidationContent />, toc: false },
    {id: 'customedit', pid: 'editing', name: 'Custom Edit', category:"Grid", hasChildren: false, component: <CustomEditContent />, toc: false },
    {id: 'sort', pid: 'grid1', name: 'Sorting', category:"Grid", hasChildren: false, component: <SortContent />, toc: false },
    {id: 'filter', pid: 'grid1', name: 'Filtering', category:"Grid", hasChildren: true, toc: false },
    {id: 'filterconfiguration', pid: 'filter', name: 'Configuration', category:"Grid", hasChildren: false, component: <FilterContent />, toc: false },
    {id: 'filterbar', pid: 'filter', name: 'Filter Bar', category:"Grid", hasChildren: false, component: <FilterbarContent />, toc: false },
    {id: 'advancedfilter', pid: 'filter', name: 'Custom Filtering', category:"Grid", hasChildren: false, component: <AdvanceFilterContent />, toc: false },
    {id: 'search', pid: 'grid1', name: 'Searching', category:"Grid", hasChildren: false, component: <SearchContent />, toc: false },
    {id: 'page', pid: 'grid1', name: 'Paging', category:"Grid", hasChildren: false, component: <PageContent />, toc: false },
    {id: 'selection', pid: 'grid1', name: 'Selection', category:"Grid", hasChildren: false, component: <SelectionContent />, toc: false },
    {id: 'aggregate', pid: 'grid1', name: 'Aggregates', category:"Grid", hasChildren: false, component: <AggregateContent />, toc: false },
    {id: 'globalization', pid: 'grid1', name: 'Globalization', category:"Grid", hasChildren: false, component: <GlobalizationContent />, toc: false },
    {id: 'accessibility', pid: 'grid1', name: 'Accessibility', category:"Grid", hasChildren: false, component: <AccessibilityContent />, toc: false },
];