export interface CustomerProfile {
  CustomerID: string;
  ContactName: string;
  CompanyName: string;
  Address: string;
  Country: string;
}

export const customerRegistry: CustomerProfile[] = [
  {
    CustomerID: 'AROUT',
    ContactName: 'Thomas Hardy',
    CompanyName: 'Around the Horn',
    Address: '120 Hanover Sq.',
    Country: 'UK',
  },

  {
    CustomerID: 'BERGS',
    ContactName: 'Christina Berglund',
    CompanyName: 'Berglunds snabbköp',
    Address: 'Berguvsvägen  8',
    Country: 'Sweden',
  },

  {
    CustomerID: 'BLONP',
    ContactName: 'Frédérique Citeaux',
    CompanyName: 'Blondesddsl père et fils',
    Address: '24, place Kléber',
    Country: 'France',
  },

  {
    CustomerID: 'CHOPS',
    ContactName: 'Yang Wang',
    CompanyName: 'Chop-suey Chinese',
    Address: 'Hauptstr. 29',
    Country: 'Switzerland',
  },

  {
    CustomerID: 'ERNSH',
    ContactName: 'Roland Mendel',
    CompanyName: 'Ernst Handel',
    Address: 'Kirchgasse 6',
    Country: 'Austria',
  },
];

const stringData: string = JSON.stringify([
  {
    OrderID: 10254,
    CustomerID: 'CHOPS',
    OrderDate: '2023-07-11T00:00:00.000Z',
    ShippedDate: '2023-07-23T00:00:00.000Z',
    Freight: 22.98,
    ShipName: 'Chop-suey Chinese',
    ShipAddress: 'Hauptstr. 31',
    ShipCity: 'Bern',
    ShipRegion: null,
    ShipCountry: 'Switzerland',
  },

  {
    OrderID: 10258,
    CustomerID: 'ERNSH',
    OrderDate: '2023-07-17T00:00:00.000Z',
    ShippedDate: '2023-07-23T00:00:00.000Z',
    Freight: 140.51,
    ShipName: 'Ernst Handel',
    ShipAddress: 'Kirchgasse 6',
    ShipCity: 'Graz',
    ShipRegion: null,
    ShipCountry: 'Austria',
  },

  {
    OrderID: 10263,
    CustomerID: 'ERNSH',
    OrderDate: '2023-07-23T00:00:00.000Z',
    ShippedDate: '2023-07-31T00:00:00.000Z',
    Freight: 146.06,
    ShipName: 'Ernst Handel',
    ShipAddress: 'Kirchgasse 6',
    ShipCity: 'Graz',
    ShipRegion: null,
    ShipCountry: 'Austria',
  },

  {
    OrderID: 10265,
    CustomerID: 'BLONP',
    OrderDate: '2023-07-25T00:00:00.000Z',
    ShippedDate: '2023-08-12T00:00:00.000Z',
    Freight: 55.28,
    ShipName: 'Blondel père et fils',
    ShipAddress: '24, place Kléber',
    ShipCity: 'Strasbourg',
    ShipRegion: null,
    ShipCountry: 'France',
  },

  {
    OrderID: 10278,
    CustomerID: 'BERGS',
    OrderDate: '2023-08-12T00:00:00.000Z',
    ShippedDate: '2023-08-16T00:00:00.000Z',
    Freight: 92.69,
    ShipName: 'Berglunds snabbköp',
    ShipAddress: 'Berguvsvägen  8',
    ShipCity: 'Luleå',
    ShipRegion: null,
    ShipCountry: 'Sweden',
  },

  {
    OrderID: 10279,
    CustomerID: 'LEHMS',
    OrderDate: '2023-08-13T00:00:00.000Z',
    ShippedDate: '2023-08-16T00:00:00.000Z',
    Freight: 25.83,
    ShipName: 'Lehmanns Marktstand',
    ShipAddress: 'Magazinweg 7',
    ShipCity: 'Frankfurt a.M.',
    ShipRegion: null,
    ShipCountry: 'Germany',
  },

  {
    OrderID: 10280,
    CustomerID: 'BERGS',
    OrderDate: '2023-08-14T00:00:00.000Z',
    ShippedDate: '2023-09-12T00:00:00.000Z',
    Freight: 8.98,
    ShipName: 'Berglunds snabbköp',
    ShipAddress: 'Berguvsvägen  8',
    ShipCity: 'Luleå',
    ShipRegion: null,
    ShipCountry: 'Sweden',
  },

  {
    OrderID: 10297,
    CustomerID: 'BLONP',
    OrderDate: '2023-09-04T00:00:00.000Z',
    ShippedDate: '2023-09-10T00:00:00.000Z',
    Freight: 5.74,
    ShipName: 'Blondel père et fils',
    ShipAddress: '24, place Kléber',
    ShipCity: 'Strasbourg',
    ShipRegion: null,
    ShipCountry: 'France',
  },

  {
    OrderID: 10351,
    CustomerID: 'ERNSH',
    OrderDate: '2023-11-11T00:00:00.000Z',
    ShippedDate: '2023-11-20T00:00:00.000Z',
    Freight: 162.33,
    ShipName: 'Ernst Handel',
    ShipAddress: 'Kirchgasse 6',
    ShipCity: 'Graz',
    ShipRegion: null,
    ShipCountry: 'Austria',
  },

  {
    OrderID: 10355,
    CustomerID: 'AROUT',
    OrderDate: '2023-11-15T00:00:00.000Z',
    ShippedDate: '2023-11-20T00:00:00.000Z',
    Freight: 41.95,
    ShipName: 'Around the Horn',
    ShipAddress: 'Brook Farm Stratford St. Mary',
    ShipCity: 'Colchester',
    ShipRegion: 'Essex',
    ShipCountry: 'UK',
  },

  {
    OrderID: 10360,
    CustomerID: 'BLONP',
    OrderDate: '2023-11-22T00:00:00.000Z',
    ShippedDate: '2023-12-02T00:00:00.000Z',
    Freight: 131.7,
    ShipName: 'Blondel père et fils',
    ShipAddress: '24, place Kléber',
    ShipCity: 'Strasbourg',
    ShipRegion: null,
    ShipCountry: 'France',
  },

  {
    OrderID: 10368,
    CustomerID: 'ERNSH',
    OrderDate: '2023-11-29T00:00:00.000Z',
    ShippedDate: '2023-12-02T00:00:00.000Z',
    Freight: 101.95,
    ShipName: 'Ernst Handel',
    ShipAddress: 'Kirchgasse 6',
    ShipCity: 'Graz',
    ShipRegion: null,
    ShipCountry: 'Austria',
  },

  {
    OrderID: 10370,
    CustomerID: 'CHOPS',
    OrderDate: '2023-12-03T00:00:00.000Z',
    ShippedDate: '2023-12-27T00:00:00.000Z',
    Freight: 1.17,
    ShipName: 'Chop-suey Chinese',
    ShipAddress: 'Hauptstr. 31',
    ShipCity: 'Bern',
    ShipRegion: null,
    ShipCountry: 'Switzerland',
  },

  {
    OrderID: 10382,
    CustomerID: 'ERNSH',
    OrderDate: '2023-12-13T00:00:00.000Z',
    ShippedDate: '2023-12-16T00:00:00.00Z',
    Freight: 94.77,
    ShipName: 'Ernst Handel',
    ShipAddress: 'Kirchgasse 6',
    ShipCity: 'Graz',
    ShipRegion: null,
    ShipCountry: 'Austria',
  },
  {
    OrderID: 10383,
    CustomerID: 'AROUT',
    OrderDate: '2023-12-16T00:00:00.000Z',
    ShippedDate: '2023-12-18T00:00:00.000Z',
    Freight: 34.24,
    ShipName: 'Around the Horn',
    ShipAddress: 'Brook Farm Stratford St. Mary',
    ShipCity: 'Colchester',
    ShipRegion: 'Essex',
    ShipCountry: 'UK',
  },

  {
    OrderID: 10384,
    CustomerID: 'BERGS',
    OrderDate: '2023-12-16T00:00:00.000Z',
    ShippedDate: '2023-12-20T00:00:00.000Z',
    Freight: 168.64,
    ShipName: 'Berglunds snabbköp',
    ShipAddress: 'Berguvsvägen  8',
    ShipCity: 'Luleå',
    ShipRegion: null,
    ShipCountry: 'Sweden',
  },

  {
    OrderID: 10436,
    CustomerID: 'BLONP',
    OrderDate: '2024-02-05T00:00:00.000Z',
    ShippedDate: '2024-02-11T00:00:00.000Z',
    Freight: 156.66,
    ShipName: 'Blondel père et fils',
    ShipAddress: '24, place Kléber',
    ShipCity: 'Strasbourg',
    ShipRegion: null,
    ShipCountry: 'France',
  },

  {
    OrderID: 10444,
    CustomerID: 'BERGS',
    OrderDate: '2024-02-12T00:00:00.000Z',
    ShippedDate: '2024-02-21T00:00:00.000Z',
    Freight: 3.5,
    ShipName: 'Berglunds snabbköp',
    ShipAddress: 'Berguvsvägen  8',
    ShipCity: 'Luleå',
    ShipRegion: null,
    ShipCountry: 'Sweden',
  },

  {
    OrderID: 10445,
    CustomerID: 'BERGS',
    OrderDate: '2024-02-13T00:00:00.000Z',
    ShippedDate: '2024-02-20T00:00:00.000Z',
    Freight: 9.3,
    ShipName: 'Berglunds snabbköp',
    ShipAddress: 'Berguvsvägen  8',
    ShipCity: 'Luleå',
    ShipRegion: null,
    ShipCountry: 'Sweden',
  },

  {
    OrderID: 10449,
    CustomerID: 'BLONP',
    OrderDate: '2024-02-18T00:00:00.000Z',
    ShippedDate: '2024-02-27T00:00:00.000Z',
    Freight: 53.3,
    ShipName: 'Blondel père et fils',
    ShipAddress: '24, place Kléber',
    ShipCity: 'Strasbourg',
    ShipRegion: null,
    ShipCountry: 'France',
  },

  {
    OrderID: 10453,
    CustomerID: 'AROUT',
    OrderDate: '2024-02-21T00:00:00.000Z',
    ShippedDate: '2024-02-26T00:00:00.000Z',
    Freight: 25.36,
    ShipName: 'Around the Horn',
    ShipAddress: 'Brook Farm Stratford St. Mary',
    ShipCity: 'Colchester',
    ShipRegion: 'Essex',
    ShipCountry: 'UK',
  },

  {
    OrderID: 10519,
    CustomerID: 'CHOPS',
    OrderDate: '2024-04-28T00:00:00.000Z',
    ShippedDate: '2024-05-01T00:00:00.000Z',
    Freight: 91.76,
    ShipName: 'Chop-suey Chinese',
    ShipAddress: 'Hauptstr. 31',
    ShipCity: 'Bern',
    ShipRegion: null,
    ShipCountry: 'Switzerland',
  },

  {
    OrderID: 10558,
    CustomerID: 'AROUT',
    OrderDate: '2024-06-04T00:00:00.000Z',
    ShippedDate: '2024-06-10T00:00:00.000Z',
    Freight: 72.97,
    ShipName: 'Around the Horn',
    ShipAddress: 'Brook Farm Stratford St. Mary',
    ShipCity: 'Colchester',
    ShipRegion: 'Essex',
    ShipCountry: 'UK',
  },

  {
    OrderID: 10707,
    CustomerID: 'AROUT',
    OrderDate: '2024-10-16T00:00:00.000Z',
    ShippedDate: '2024-10-23T00:00:00.000Z',
    Freight: 21.74,
    ShipName: 'Around the Horn',
    ShipAddress: 'Brook Farm Stratford St. Mary',
    ShipCity: 'Colchester',
    ShipRegion: 'Essex',
    ShipCountry: 'UK',
  },

  {
    OrderID: 10731,
    CustomerID: 'CHOPS',
    OrderDate: '2024-11-06T00:00:00.000Z',
    ShippedDate: '2024-11-14T00:00:00.000Z',
    Freight: 96.65,
    ShipName: 'Chop-suey Chinese',
    ShipAddress: 'Hauptstr. 31',
    ShipCity: 'Bern',
    ShipRegion: null,
    ShipCountry: 'Switzerland',
  },

  {
    OrderID: 10746,
    CustomerID: 'CHOPS',
    OrderDate: '2024-11-19T00:00:00.000Z',
    ShippedDate: '2024-11-21T00:00:00.000Z',
    Freight: 31.43,
    ShipName: 'Chop-suey Chinese',
    ShipAddress: 'Hauptstr. 31',
    ShipCity: 'Bern',
    ShipRegion: null,
    ShipCountry: 'Switzerland',
  }
]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const orderDetail: object[] = JSON.parse(stringData, (_field: string, value: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dupValue: any = value;
    if (typeof value === 'string' && /^(\d{4}-\d\d-\d\d([tT][\d:.]*){1})([zZ]|([+-])(\d\d):?(\d\d))?$/.test(value)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const arr: any = dupValue.split(/[^0-9]/);
        value = new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) - 1,
            parseInt(arr[2], 10), parseInt(arr[3], 10), parseInt(arr[4], 10), parseInt(arr[5], 10));
    }
    return value;
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const data = orderDetail.map((item: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const name:any = (customerRegistry).filter((cItem:any) => {
    return cItem.CustomerID === item.CustomerID;
  })[0];
  item.CustomerName = (name || {}).ContactName;
  return item;
});

export const productCategory: object[] = [
  {
    "ProductID": "PID-101",
    "Category": "Category C",
    "Value": 200,
    "Description": "Ergonomic chair"
  },
  {
    "ProductID": "PID-102",
    "Category": "Category B",
    "Value": 267,
    "Description": "Ergonomic chair"
  },
  {
    "ProductID": "PID-103",
    "Category": "Category C",
    "Value": 135,
    "Description": "Portable charger"
  },
  {
    "ProductID": "PID-104",
    "Category": "Category B",
    "Value": 375,
    "Description": "Advanced kitchen appliance"
  },
  {
    "ProductID": "PID-105",
    "Category": "Category A",
    "Value": 291,
    "Description": "Wireless headphones"
  },
  {
    "ProductID": "PID-106",
    "Category": "Category B",
    "Value": 762,
    "Description": "Smart home assistant"
  },
  {
    "ProductID": "PID-107",
    "Category": "Category A",
    "Value": 429,
    "Description": "Ergonomic chair"
  },
  {
    "ProductID": "PID-108",
    "Category": "Category C",
    "Value": 111,
    "Description": "Comfortable cotton clothing"
  },
  {
    "ProductID": "PID-109",
    "Category": "Category C",
    "Value": 53,
    "Description": "Ergonomic chair"
  },
  {
    "ProductID": "PID-110",
    "Category": "Category B",
    "Value": 613,
    "Description": "Smart home assistant"
  },
  {
    "ProductID": "PID-111",
    "Category": "Category C",
    "Value": 103,
    "Description": "Modern office furniture"
  },
  {
    "ProductID": "PID-112",
    "Category": "Category C",
    "Value": 199,
    "Description": "Advanced kitchen appliance"
  },
  {
    "ProductID": "PID-113",
    "Category": "Category C",
    "Value": 57,
    "Description": "Modern office furniture"
  },
  {
    "ProductID": "PID-114",
    "Category": "Category A",
    "Value": 330,
    "Description": "Ergonomic chair"
  },
  {
    "ProductID": "PID-115",
    "Category": "Category A",
    "Value": 468,
    "Description": "Comfortable cotton clothing"
  },
  {
    "ProductID": "PID-116",
    "Category": "Category C",
    "Value": 271,
    "Description": "Portable charger"
  },
  {
    "ProductID": "PID-117",
    "Category": "Category A",
    "Value": 212,
    "Description": "Advanced kitchen appliance"
  },
  {
    "ProductID": "PID-118",
    "Category": "Category B",
    "Value": 468,
    "Description": "Portable charger"
  },
  {
    "ProductID": "PID-119",
    "Category": "Category C",
    "Value": 67,
    "Description": "Ergonomic chair"
  },
  {
    "ProductID": "PID-120",
    "Category": "Category C",
    "Value": 212,
    "Description": "Smart home assistant"
  },
  {
    "ProductID": "PID-121",
    "Category": "Category C",
    "Value": 209,
    "Description": "Comfortable cotton clothing"
  },
  {
    "ProductID": "PID-122",
    "Category": "Category A",
    "Value": 127,
    "Description": "Ergonomic chair"
  },
  {
    "ProductID": "PID-123",
    "Category": "Category C",
    "Value": 80,
    "Description": "Advanced kitchen appliance"
  },
  {
    "ProductID": "PID-124",
    "Category": "Category C",
    "Value": 130,
    "Description": "Wireless headphones"
  },
  {
    "ProductID": "PID-125",
    "Category": "Category A",
    "Value": 294,
    "Description": "Wireless headphones"
  },
  {
    "ProductID": "PID-126",
    "Category": "Category B",
    "Value": 757,
    "Description": "Comfortable cotton clothing"
  },
  {
    "ProductID": "PID-127",
    "Category": "Category A",
    "Value": 498,
    "Description": "Smart home assistant"
  },
  {
    "ProductID": "PID-128",
    "Category": "Category A",
    "Value": 292,
    "Description": "High-performance electronic device"
  },
  {
    "ProductID": "PID-129",
    "Category": "Category B",
    "Value": 245,
    "Description": "Modern office furniture"
  },
  {
    "ProductID": "PID-130",
    "Category": "Category A",
    "Value": 371,
    "Description": "Eco-friendly water bottle"
  },
  {
    "ProductID": "PID-131",
    "Category": "Category A",
    "Value": 391,
    "Description": "High-performance electronic device"
  },
  {
    "ProductID": "PID-132",
    "Category": "Category C",
    "Value": 202,
    "Description": "High-performance electronic device"
  },
  {
    "ProductID": "PID-133",
    "Category": "Category C",
    "Value": 74,
    "Description": "Eco-friendly water bottle"
  },
  {
    "ProductID": "PID-134",
    "Category": "Category B",
    "Value": 364,
    "Description": "Wireless headphones"
  },
  {
    "ProductID": "PID-135",
    "Category": "Category B",
    "Value": 680,
    "Description": "High-performance electronic device"
  },
  {
    "ProductID": "PID-136",
    "Category": "Category A",
    "Value": 200,
    "Description": "Wireless headphones"
  },
  {
    "ProductID": "PID-137",
    "Category": "Category C",
    "Value": 227,
    "Description": "Portable charger"
  },
  {
    "ProductID": "PID-138",
    "Category": "Category B",
    "Value": 510,
    "Description": "High-performance electronic device"
  },
  {
    "ProductID": "PID-139",
    "Category": "Category A",
    "Value": 244,
    "Description": "Portable charger"
  },
  {
    "ProductID": "PID-140",
    "Category": "Category C",
    "Value": 94,
    "Description": "Modern office furniture"
  },
  {
    "ProductID": "PID-141",
    "Category": "Category B",
    "Value": 441,
    "Description": "Ergonomic chair"
  },
  {
    "ProductID": "PID-142",
    "Category": "Category C",
    "Value": 88,
    "Description": "Modern office furniture"
  },
  {
    "ProductID": "PID-143",
    "Category": "Category B",
    "Value": 700,
    "Description": "Modern office furniture"
  },
  {
    "ProductID": "PID-144",
    "Category": "Category C",
    "Value": 247,
    "Description": "High-performance electronic device"
  },
  {
    "ProductID": "PID-145",
    "Category": "Category C",
    "Value": 298,
    "Description": "Advanced kitchen appliance"
  },
  {
    "ProductID": "PID-146",
    "Category": "Category C",
    "Value": 182,
    "Description": "Modern office furniture"
  },
  {
    "ProductID": "PID-147",
    "Category": "Category A",
    "Value": 133,
    "Description": "Wireless headphones"
  },
  {
    "ProductID": "PID-148",
    "Category": "Category C",
    "Value": 125,
    "Description": "Modern office furniture"
  },
  {
    "ProductID": "PID-149",
    "Category": "Category A",
    "Value": 314,
    "Description": "High-performance electronic device"
  },
  {
    "ProductID": "PID-150",
    "Category": "Category C",
    "Value": 174,
    "Description": "Modern office furniture"
  }
]
