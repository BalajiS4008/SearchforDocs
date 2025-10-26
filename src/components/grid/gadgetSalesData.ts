
export interface ChartDataItem {
  month: string;
  sales: number;
}

export interface GadgetSalesData {
  EmployeeID: number;
  chartData: ChartDataItem[];
}

export const salesData: GadgetSalesData[] = [
    {
        EmployeeID: 1,
        chartData: [
             { month: 'Feb', sales: 250 }, { month: 'Mar', sales: 180 }, { month: 'Apr', sales: 320 }, { month: 'May', sales: 280 }, { month: 'Jun', sales: 150 }, { month: 'Jul', sales: 200 }, { month: 'Aug', sales: 790 }
        ],
    },
    {
        EmployeeID: 2,
        chartData: [
             { month: 'Feb', sales: 350 }, { month: 'Mar', sales: 280 }, { month: 'Apr', sales: 300 }, { month: 'May', sales: 230 }, { month: 'Jun', sales: 140 }, { month: 'Jul', sales: 200 }, { month: 'Aug', sales: 890 }
        ],
    },
    {
        EmployeeID: 3,
        chartData: [
           { month: 'Feb', sales: 420 }, { month: 'Mar', sales: 380 }, { month: 'Apr', sales: 290 }, { month: 'May', sales: 340 }, { month: 'Jun', sales: 210 }, { month: 'Jul', sales: 380 }, { month: 'Aug', sales: 690 }
        ],
    },
    {
        EmployeeID: 4,
        chartData: [
            { month: 'Feb', sales: 180 }, { month: 'Mar', sales: 220 }, { month: 'Apr', sales: 380 }, { month: 'May', sales: 190 }, { month: 'Jun', sales: 280 }, { month: 'Jul', sales: 340 }, { month: 'Aug', sales: 720 }
        ],
    },
    {
        EmployeeID: 5,
        chartData: [
             { month: 'Feb', sales: 380 }, { month: 'Mar', sales: 290 }, { month: 'Apr', sales: 450 }, { month: 'May', sales: 320 }, { month: 'Jun', sales: 180 }, { month: 'Jul', sales: 280 }, { month: 'Aug', sales: 790 }
        ],
    },
    {
        EmployeeID: 6,
        chartData: [
             { month: 'Feb', sales: 290 }, { month: 'Mar', sales: 340 }, { month: 'Apr', sales: 210 }, { month: 'May', sales: 380 }, { month: 'Jun', sales: 240 }, { month: 'Jul', sales: 320 }, { month: 'Aug', sales: 780 }
        ],
    },
    {
        EmployeeID: 7,
        chartData: [
            { month: 'Feb', sales: 320 }, { month: 'Mar', sales: 240 }, { month: 'Apr', sales: 380 }, { month: 'May', sales: 290 }, { month: 'Jun', sales: 190 }, { month: 'Jul', sales: 240 }, { month: 'Aug', sales: 740 }
        ],
    },
    {
        EmployeeID: 8,
        chartData: [
            { month: 'Feb', sales: 410 }, { month: 'Mar', sales: 320 }, { month: 'Apr', sales: 280 }, { month: 'May', sales: 360 }, { month: 'Jun', sales: 220 }, { month: 'Jul', sales: 290 }, { month: 'Aug', sales: 720 }
        ],
    },
    {
        EmployeeID: 9,
        chartData: [
            { month: 'Feb', sales: 280 }, { month: 'Mar', sales: 200 }, { month: 'Apr', sales: 340 }, { month: 'May', sales: 310 }, { month: 'Jun', sales: 170 }, { month: 'Jul', sales: 220 }, { month: 'Aug', sales: 760 }
        ],
    },
];
