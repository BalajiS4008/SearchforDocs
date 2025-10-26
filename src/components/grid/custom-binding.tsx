import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, DataRequestEvent, FilterBarType, ClipMode, TextAlign, SortDescriptor } from '@syncfusion/react-grid';
import React, { useState } from 'react';
import { Fetch } from '@syncfusion/react-base';

interface GridData {
  result: Array<object>;
  count: number;
}

export default function App() {
	// State to hold grid data and total record count.
	const [data, setData] = React.useState<GridData>({ result: [], count: 0 });

	// Enable filtering on the grid.
	const [filterSettings] = useState<FilterSettings>({ enabled: true });

	// Enable sorting on the grid.
	const [sortSettings] = useState<SortSettings>({ enabled: true });

	// Enable paging with page count and page size.
	const [pageSettings] = useState<PageSettings>({ enabled: true, pageCount: 4, pageSize: 10 });

	// Fetch initial data when component mounts.
	React.useEffect(() => {
		renderComplete();
	}, []);

	const BASE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';

	// Trigger initial data fetch with default paging.
	function renderComplete() {
		const state: DataRequestEvent = {
			skip: 0,
			take: 10
		};
		onDataRequest(state);
	}

	// Handle data request triggered by grid actions.
	const onDataRequest = (state: DataRequestEvent | undefined) => {
		if (state) {
			const dataState: DataRequestEvent = {
				skip: state.skip ?? 0,
				take: state.take ?? 10,
				sort: state.sort
					?.filter((sort): sort is { field: string; direction: string } => !!sort.field)
					.map((sort) => ({ field: sort.field!, direction: sort.direction })),
				where: state.where,
			};
			execute(dataState).then((gridData: GridData) => {
				setData(gridData);
			});
		}
	};

	// Execute data fetch using constructed query.
	function execute(state: DataRequestEvent): Promise<GridData> {
		return getData(state);
	}

	// Build query string for paging.
	function buildPageQuery(state: DataRequestEvent): string {
		return `$skip=${state.skip}&$top=${state.take}`;
	}

	// Build query string for sorting.
	function buildSortQuery(state: DataRequestEvent): string {
		if (state.sort?.length) {
			return (
				`&$orderby=` + state.sort
					.map((obj: SortDescriptor) => (obj.direction?.toLowerCase() === 'descending' ? `${obj.field} desc` : obj.field))
					.reverse()
					.join(',')
			);
		}
		return '';
	}

	// Build query string for filtering.
	function buildFilterQuery(state: DataRequestEvent): string {
		if (state.where?.length) {
			return (
				`&$filter=` + state.where[0].predicates.map((col) => {
					const value: string = (typeof col.value === 'string' ? `'${col.value}'` : col.value) as string;
					if (col.operator === 'startswith') {
						return `startswith(tolower(${col.field}), ${value.toLowerCase()})`;
					} else if (col.operator === 'equal') {
						return `${col.field} eq ${value}`;
					} else if (col.operator === 'contains') {
						return `contains(tolower(${col.field}), ${value.toLowerCase()})`;
					}
					return '';
				}).join(' and ')
			);
		}
		return '';
	}

	// Fetch data from OData service using constructed query.
	function getData(state: DataRequestEvent): Promise<GridData> {
		const pageQuery = buildPageQuery(state);
		const sortQuery = buildSortQuery(state);
		const filterQuery = buildFilterQuery(state);

		const url = `${BASE_URL}?${pageQuery}${sortQuery}${filterQuery}&$count=true`;
		const fetchApi = Fetch(url, 'GET', 'application/json');

		if (fetchApi && typeof fetchApi.send === 'function') {
			return fetchApi.send().then(async (response: Response) => {
				const value = response as unknown as { value: Array<object>; '@odata.count': string };
				return {
					result: value.value,
					count: parseInt(value['@odata.count'], 10),
				};
			}).catch((error: Error) => {
				console.log(error);
				throw error;
			});
		} else {
			return Promise.resolve({ result: [], count: 0 });
		}
	}

	return (
		<div>
			<Grid dataSource={data} sortSettings={sortSettings} filterSettings={filterSettings} pageSettings={pageSettings} onDataRequest={onDataRequest} >
				<Columns>
					<Column field="OrderID" headerText="Order ID" width={100} filter={{ filterBarType: FilterBarType.NumericTextBox }} textAlign={TextAlign.Right} />
					<Column field="CustomerID" headerText="Customer ID" width={100} />
					<Column field="ShipName" headerText="Ship Name" width={150} clipMode={ClipMode.EllipsisWithTooltip} />
					<Column field="ShipCity" headerText="Ship City" width={120} />
					<Column field="ShipCountry" headerText="Ship Country" width={110} />
					<Column field="Freight" headerText="Freight Charges" width={130} filter={{ filterBarType: FilterBarType.NumericTextBox }} textAlign={TextAlign.Right} format="C2" />
				</Columns>
			</Grid>
		</div>
	);
}