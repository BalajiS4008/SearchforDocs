export interface WarehouseShipment {
  ShipmentID: string;
  Date: Date;
  WarehouseLocation: string;
  ItemDescription: string;
  Quantity: number;
  Status: string;
  CarrierName: string;
  ShipmentMethod: string;
  ExpectedDeliveryDate: Date;
}

export const shipmentDetails: WarehouseShipment[] = [
  {
    "ShipmentID": "SHP-0001",
    "Date": new Date(1683849600000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Phone Case",
    "Quantity": 34,
    "Status": "In Transit",
    "CarrierName": "UPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684454400000)
  },
  {
    "ShipmentID": "SHP-0002",
    "Date": new Date(1683849600000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 72,
    "Status": "Cancelled",
    "CarrierName": "USPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684713600000)
  },
  {
    "ShipmentID": "SHP-0003",
    "Date": new Date(1684022400000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Phone Case",
    "Quantity": 11,
    "Status": "Cancelled",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684627200000)
  },
  {
    "ShipmentID": "SHP-0004",
    "Date": new Date(1686441600000),
    "WarehouseLocation": "Miami",
    "ItemDescription": "Phone Case",
    "Quantity": 89,
    "Status": "Pending",
    "CarrierName": "DHL",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1686960000000)
  },
  {
    "ShipmentID": "SHP-0005",
    "Date": new Date(1685664000000),
    "WarehouseLocation": "Miami",
    "ItemDescription": "Monitor Stand",
    "Quantity": 38,
    "Status": "Delivered",
    "CarrierName": "USPS",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1686096000000)
  },
  {
    "ShipmentID": "SHP-0006",
    "Date": new Date(1684368000000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Keyboard",
    "Quantity": 50,
    "Status": "Pending",
    "CarrierName": "DHL",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684540800000)
  },
  {
    "ShipmentID": "SHP-0007",
    "Date": new Date(1684713600000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Keyboard",
    "Quantity": 92,
    "Status": "Pending",
    "CarrierName": "DHL",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684886400000)
  },
  {
    "ShipmentID": "SHP-0008",
    "Date": new Date(1685923200000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 88,
    "Status": "In Transit",
    "CarrierName": "USPS",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1686700800000)
  },
  {
    "ShipmentID": "SHP-0009",
    "Date": new Date(1686441600000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Phone Case",
    "Quantity": 24,
    "Status": "Pending",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1687046400000)
  },
  {
    "ShipmentID": "SHP-0010",
    "Date": new Date(1686096000000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Monitor Stand",
    "Quantity": 11,
    "Status": "In Transit",
    "CarrierName": "DHL",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1686960000000)
  },
  {
    "ShipmentID": "SHP-0011",
    "Date": new Date(1684108800000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Keyboard",
    "Quantity": 22,
    "Status": "Delivered",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684368000000)
  },
  {
    "ShipmentID": "SHP-0012",
    "Date": new Date(1686009600000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 37,
    "Status": "Cancelled",
    "CarrierName": "DHL",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1686441600000)
  },
  {
    "ShipmentID": "SHP-0013",
    "Date": new Date(1686355200000),
    "WarehouseLocation": "Miami",
    "ItemDescription": "Phone Case",
    "Quantity": 32,
    "Status": "Cancelled",
    "CarrierName": "DHL",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1686700800000)
  },
  {
    "ShipmentID": "SHP-0014",
    "Date": new Date(1684800000000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Keyboard",
    "Quantity": 56,
    "Status": "Pending",
    "CarrierName": "DHL",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1685577600000)
  },
  {
    "ShipmentID": "SHP-0015",
    "Date": new Date(1684713600000),
    "WarehouseLocation": "Miami",
    "ItemDescription": "Monitor Stand",
    "Quantity": 83,
    "Status": "Pending",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1685577600000)
  },
  {
    "ShipmentID": "SHP-0016",
    "Date": new Date(1685404800000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Phone Case",
    "Quantity": 77,
    "Status": "Delivered",
    "CarrierName": "DHL",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1685664000000)
  },
  {
    "ShipmentID": "SHP-0017",
    "Date": new Date(1685145600000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 61,
    "Status": "Cancelled",
    "CarrierName": "USPS",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1685577600000)
  },
  {
    "ShipmentID": "SHP-0018",
    "Date": new Date(1684368000000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Monitor Stand",
    "Quantity": 39,
    "Status": "In Transit",
    "CarrierName": "DHL",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1684540800000)
  },
  {
    "ShipmentID": "SHP-0019",
    "Date": new Date(1684627200000),
    "WarehouseLocation": "Miami",
    "ItemDescription": "Monitor Stand",
    "Quantity": 31,
    "Status": "Cancelled",
    "CarrierName": "DHL",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1685059200000)
  },
  {
    "ShipmentID": "SHP-0020",
    "Date": new Date(1684022400000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Phone Case",
    "Quantity": 11,
    "Status": "Cancelled",
    "CarrierName": "DHL",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684540800000)
  },
  {
    "ShipmentID": "SHP-0021",
    "Date": new Date(1684454400000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Phone Case",
    "Quantity": 24,
    "Status": "Delivered",
    "CarrierName": "UPS",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1684713600000)
  },
  {
    "ShipmentID": "SHP-0022",
    "Date": new Date(1685577600000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 94,
    "Status": "In Transit",
    "CarrierName": "UPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1685750400000)
  },
  {
    "ShipmentID": "SHP-0023",
    "Date": new Date(1683936000000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Keyboard",
    "Quantity": 50,
    "Status": "Pending",
    "CarrierName": "DHL",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1684627200000)
  },
  {
    "ShipmentID": "SHP-0024",
    "Date": new Date(1685059200000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Monitor Stand",
    "Quantity": 53,
    "Status": "Delivered",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1685836800000)
  },
  {
    "ShipmentID": "SHP-0025",
    "Date": new Date(1684368000000),
    "WarehouseLocation": "Miami",
    "ItemDescription": "Phone Case",
    "Quantity": 48,
    "Status": "Cancelled",
    "CarrierName": "USPS",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1684886400000)
  },
  {
    "ShipmentID": "SHP-0026",
    "Date": new Date(1686441600000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Wireless Mouse",
    "Quantity": 43,
    "Status": "Pending",
    "CarrierName": "USPS",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1686960000000)
  },
  {
    "ShipmentID": "SHP-0027",
    "Date": new Date(1683849600000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 23,
    "Status": "Pending",
    "CarrierName": "USPS",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1684022400000)
  },
  {
    "ShipmentID": "SHP-0028",
    "Date": new Date(1685491200000),
    "WarehouseLocation": "Miami",
    "ItemDescription": "Monitor Stand",
    "Quantity": 49,
    "Status": "Delivered",
    "CarrierName": "USPS",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1686355200000)
  },
  {
    "ShipmentID": "SHP-0029",
    "Date": new Date(1685923200000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Monitor Stand",
    "Quantity": 54,
    "Status": "Cancelled",
    "CarrierName": "USPS",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1686268800000)
  },
  {
    "ShipmentID": "SHP-0030",
    "Date": new Date(1684713600000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Keyboard",
    "Quantity": 64,
    "Status": "In Transit",
    "CarrierName": "USPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684972800000)
  },
  {
    "ShipmentID": "SHP-0031",
    "Date": new Date(1686182400000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 38,
    "Status": "In Transit",
    "CarrierName": "USPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1686528000000)
  },
  {
    "ShipmentID": "SHP-0032",
    "Date": new Date(1684540800000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Monitor Stand",
    "Quantity": 86,
    "Status": "Cancelled",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684713600000)
  },
  {
    "ShipmentID": "SHP-0033",
    "Date": new Date(1685577600000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Phone Case",
    "Quantity": 63,
    "Status": "Delivered",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1685836800000)
  },
  {
    "ShipmentID": "SHP-0034",
    "Date": new Date(1685923200000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 81,
    "Status": "In Transit",
    "CarrierName": "DHL",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1686614400000)
  },
  {
    "ShipmentID": "SHP-0035",
    "Date": new Date(1685664000000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Phone Case",
    "Quantity": 69,
    "Status": "In Transit",
    "CarrierName": "USPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1686009600000)
  },
  {
    "ShipmentID": "SHP-0036",
    "Date": new Date(1684195200000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Keyboard",
    "Quantity": 81,
    "Status": "Pending",
    "CarrierName": "DHL",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1684713600000)
  },
  {
    "ShipmentID": "SHP-0037",
    "Date": new Date(1684108800000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Monitor Stand",
    "Quantity": 23,
    "Status": "Pending",
    "CarrierName": "DHL",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1684627200000)
  },
  {
    "ShipmentID": "SHP-0038",
    "Date": new Date(1685145600000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Keyboard",
    "Quantity": 58,
    "Status": "Cancelled",
    "CarrierName": "DHL",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1685750400000)
  },
  {
    "ShipmentID": "SHP-0039",
    "Date": new Date(1685491200000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Wireless Mouse",
    "Quantity": 11,
    "Status": "Pending",
    "CarrierName": "UPS",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1685923200000)
  },
  {
    "ShipmentID": "SHP-0040",
    "Date": new Date(1684627200000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Phone Case",
    "Quantity": 11,
    "Status": "Cancelled",
    "CarrierName": "USPS",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1685232000000)
  },
  {
    "ShipmentID": "SHP-0041",
    "Date": new Date(1684281600000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Keyboard",
    "Quantity": 52,
    "Status": "Pending",
    "CarrierName": "UPS",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1684972800000)
  },
  {
    "ShipmentID": "SHP-0042",
    "Date": new Date(1685750400000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Keyboard",
    "Quantity": 97,
    "Status": "In Transit",
    "CarrierName": "DHL",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1686614400000)
  },
  {
    "ShipmentID": "SHP-0043",
    "Date": new Date(1684800000000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Wireless Mouse",
    "Quantity": 27,
    "Status": "Cancelled",
    "CarrierName": "UPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1685059200000)
  },
  {
    "ShipmentID": "SHP-0044",
    "Date": new Date(1685491200000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Keyboard",
    "Quantity": 41,
    "Status": "In Transit",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1685664000000)
  },
  {
    "ShipmentID": "SHP-0045",
    "Date": new Date(1683849600000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Monitor Stand",
    "Quantity": 51,
    "Status": "Delivered",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1684627200000)
  },
  {
    "ShipmentID": "SHP-0046",
    "Date": new Date(1684540800000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Wireless Mouse",
    "Quantity": 20,
    "Status": "Pending",
    "CarrierName": "DHL",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1685145600000)
  },
  {
    "ShipmentID": "SHP-0047",
    "Date": new Date(1684972800000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Phone Case",
    "Quantity": 35,
    "Status": "Pending",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1685232000000)
  },
  {
    "ShipmentID": "SHP-0048",
    "Date": new Date(1683849600000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 32,
    "Status": "Cancelled",
    "CarrierName": "DHL",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684454400000)
  },
  {
    "ShipmentID": "SHP-0049",
    "Date": new Date(1685059200000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Wireless Mouse",
    "Quantity": 28,
    "Status": "Delivered",
    "CarrierName": "UPS",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1685750400000)
  },
  {
    "ShipmentID": "SHP-0050",
    "Date": new Date(1685059200000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Keyboard",
    "Quantity": 100,
    "Status": "Delivered",
    "CarrierName": "DHL",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1685664000000)
  },
  {
    "ShipmentID": "SHP-0051",
    "Date": new Date(1686096000000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Phone Case",
    "Quantity": 34,
    "Status": "In Transit",
    "CarrierName": "UPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1686528000000)
  },
  {
    "ShipmentID": "SHP-0052",
    "Date": new Date(1685232000000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Keyboard",
    "Quantity": 11,
    "Status": "Pending",
    "CarrierName": "UPS",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1685664000000)
  },
  {
    "ShipmentID": "SHP-0053",
    "Date": new Date(1686009600000),
    "WarehouseLocation": "Chicago",
    "ItemDescription": "Keyboard",
    "Quantity": 25,
    "Status": "Pending",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1686614400000)
  },
  {
    "ShipmentID": "SHP-0054",
    "Date": new Date(1684281600000),
    "WarehouseLocation": "Miami",
    "ItemDescription": "Wireless Mouse",
    "Quantity": 85,
    "Status": "In Transit",
    "CarrierName": "DHL",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1684454400000)
  },
  {
    "ShipmentID": "SHP-0055",
    "Date": new Date(1683849600000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Phone Case",
    "Quantity": 55,
    "Status": "In Transit",
    "CarrierName": "UPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1684627200000)
  },
  {
    "ShipmentID": "SHP-0056",
    "Date": new Date(1685491200000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 60,
    "Status": "In Transit",
    "CarrierName": "USPS",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1686268800000)
  },
  {
    "ShipmentID": "SHP-0057",
    "Date": new Date(1685923200000),
    "WarehouseLocation": "Seattle",
    "ItemDescription": "Wireless Mouse",
    "Quantity": 15,
    "Status": "Delivered",
    "CarrierName": "UPS",
    "ShipmentMethod": "Ground",
    "ExpectedDeliveryDate": new Date(1686528000000)
  },
  {
    "ShipmentID": "SHP-0058",
    "Date": new Date(1686096000000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Phone Case",
    "Quantity": 78,
    "Status": "Delivered",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1686614400000)
  },
  {
    "ShipmentID": "SHP-0059",
    "Date": new Date(1686009600000),
    "WarehouseLocation": "Dallas",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 44,
    "Status": "Delivered",
    "CarrierName": "DHL",
    "ShipmentMethod": "Air",
    "ExpectedDeliveryDate": new Date(1686355200000)
  },
  {
    "ShipmentID": "SHP-0060",
    "Date": new Date(1684627200000),
    "WarehouseLocation": "Phoenix",
    "ItemDescription": "Laptop Sleeve",
    "Quantity": 39,
    "Status": "Pending",
    "CarrierName": "FedEx",
    "ShipmentMethod": "Sea",
    "ExpectedDeliveryDate": new Date(1684886400000)
  }
]