export interface ProductDataTemplate {
  Sales: {
    "Jan-Feb": number;
    "Mar-Apr": number;
    "May-Jun": number;
    "Jul-Aug": number;
    "Sep-Oct": number;
    "Nov-Dec": number;
  };
  Product: string;
  Category: string;
  Year: number;
  Online: number;
  Retail: number;
  ProfitLoss: number;
  UnitsSold: number;
  Revenue: number;
  Image: string; 
}

export const productSalesReport: ProductDataTemplate[] = [
  {
    Product: "Brown Rice",
    Year: 2024,
    Online: 1020,
    Retail: 1310,
    Revenue: 2330,
    Category: "Grains",
    Image: "BrownRice",
    ProfitLoss: 1165,
    UnitsSold: 580,
    Sales: {
      "Jan-Feb": 450, // High start
      "Mar-Apr": 350, // Drop
      "May-Jun": 500, // Rise
      "Jul-Aug": 300, // Low
      "Sep-Oct": 250, // Peak
      "Nov-Dec": 775  // Moderate
    }
    // Pattern: High, Low, Mid, Low, High, Mid
    // Sum: 450 + 350 + 400 + 300 + 450 + 375 = 2330
  },
  {
    Product: "Baby Spinach",
    Year: 2024,
    Online: 1050,
    Retail: 1300,
    Revenue: 2350,
    Category: "Vegetable",
    Image: "Spinach",
    ProfitLoss: 1175,
    UnitsSold: 780,
    Sales: {
      "Jan-Feb": 300, // Low start
      "Mar-Apr": 500, // Sharp rise
      "May-Jun": 350, // Drop
      "Jul-Aug": 450, // Rise
      "Sep-Oct": 300, // Low
      "Nov-Dec": 745  // Adjust to sum
    }
    // Pattern: Low, High, Low, Mid, Low, Mid
    // Sum: 300 + 500 + 350 + 450 + 300 + 445 = 2350
  },
  {
    Product: "Spaghetti Pasta",
    Year: 2024,
    Online: 1060,
    Retail: 1330,
    Revenue: 2390,
    Category: "Grains",
    Image: "SpaghettiPasta",
    ProfitLoss: -250,
    UnitsSold: 600,
    Sales: {
      "Jan-Feb": 400, // Mid start
      "Mar-Apr": 450, // Slight rise
      "May-Jun": 500, // Peak
      "Jul-Aug": 350, // Drop
      "Sep-Oct": 420, // Rise
      "Nov-Dec": 870  // Low
    }
    // Pattern: Mid, Mid-High, High, Low, Mid, Low
    // Sum: 400 + 450 + 500 + 350 + 420 + 270 = 2390
  },
  {
    Product: "Chicken Thighs",
    Year: 2024,
    Online: 1910,
    Retail: 2330,
    Revenue: 4240,
    Category: "Poultry",
    Image: "Chicken",
    ProfitLoss: -150,
    UnitsSold: 420,
    Sales: {
      "Jan-Feb": 600, // Low start
      "Mar-Apr": 800, // Peak
      "May-Jun": 650, // Drop
      "Jul-Aug": 750, // Rise
      "Sep-Oct": 600, // Low
      "Nov-Dec": 840  // High to adjust
    }
    // Pattern: Low, High, Low-Mid, Mid, Low, High
    // Sum: 600 + 800 + 650 + 750 + 600 + 840 = 4240
  },
  {
    Product: "Turkey Breast",
    Year: 2024,
    Online: 1960,
    Retail: 2470,
    Revenue: 4430,
    Category: "Poultry",
    Image: "TurkeyBreast",
    ProfitLoss: 1100,
    UnitsSold: 440,
    Sales: {
      "Jan-Feb": 800, // High start
      "Mar-Apr": 600, // Drop
      "May-Jun": 850, // Peak
      "Jul-Aug": 650, // Drop
      "Sep-Oct": 750, // Mid
      "Nov-Dec": 775  // Adjust
    }
    // Pattern: High, Low, High, Low-Mid, Mid, Mid
    // Sum: 800 + 600 + 850 + 650 + 750 + 775 = 4430
  },
  {
    Product: "Whole Milk",
    Year: 2024,
    Online: 1730,
    Retail: 2580,
    Revenue: 4310,
    Category: "Dairy",
    Image: "MilkBottle",
    ProfitLoss: 1075,
    UnitsSold: 860,
    Sales: {
      "Jan-Feb": 740,
      "Mar-Apr": 670,
      "May-Jun": 750,
      "Jul-Aug": 660,
      "Sep-Oct": 760,
      "Nov-Dec": 890
    }
  },
  {
    Product: "Pork Chops",
    Year: 2024,
    Online: 1910,
    Retail: 2360,
    Revenue: 4270,
    Category: "Pork",
    Image: "Pork",
    ProfitLoss: -200,
    UnitsSold: 430,
    Sales: {
      "Jan-Feb": 735,
      "Mar-Apr": 665,
      "May-Jun": 745,
      "Jul-Aug": 655,
      "Sep-Oct": 755,
      "Nov-Dec": 815
    }
  },
  {
    Product: "Cheddar Cheese",
    Year: 2024,
    Online: 1820,
    Retail: 2470,
    Revenue: 4290,
    Category: "Cheese",
    Image: "Cheese",
    ProfitLoss: 1000,
    UnitsSold: 860,
    Sales: {
      "Jan-Feb": 740,
      "Mar-Apr": 670,
      "May-Jun": 750,
      "Jul-Aug": 660,
      "Sep-Oct": 760,
      "Nov-Dec": 910
    }
  },
  {
    Product: "Salmon Fillet",
    Year: 2024,
    Online: 2240,
    Retail: 2640,
    Revenue: 4880,
    Category: "Fish",
    Image: "Salmon",
    ProfitLoss: 1220,
    UnitsSold: 490,
    Sales: {
      "Jan-Feb": 840,
      "Mar-Apr": 760,
      "May-Jun": 850,
      "Jul-Aug": 750,
      "Sep-Oct": 860,
      "Nov-Dec": 820
    }
  },
  {
    Product: "Ground Beef",
    Year: 2024,
    Online: 2270,
    Retail: 2830,
    Revenue: 5100,
    Category: "Beef",
    Image: "Beef",
    ProfitLoss: 1275,
    UnitsSold: 510,
    Sales: {
      "Jan-Feb": 875,
      "Mar-Apr": 795,
      "May-Jun": 885,
      "Jul-Aug": 785,
      "Sep-Oct": 895,
      "Nov-Dec": 865
    }
  }
];