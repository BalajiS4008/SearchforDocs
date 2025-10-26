export interface ChartDataItem {
  month: string;
  sales: number;
}

export interface GadgetsPurchaseList {
  id: number;
  EmployeeID: number;
  transactionId: string;
  customerDetails: {
      name: string;
      initial: string;
      email: string;
      colorTheme: string;
  };
  date: Date;
  product: {
      name: string;
      image: string;
  };
  quantity: number;
  amount: number;
  paymentMethod: string;
  status: string;
}

export const gadgetsPurchaseData: GadgetsPurchaseList[] = [
    {
        id: 1,
        EmployeeID: 1,
        transactionId: "TRX202501",
        customerDetails: {
            name: "Jane Smith",
            initial: "JS",
            email: "jane.smith@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-06-20"),
        product: {
            name: "iMac 24",
            image: "imac-24.png"
        },
        quantity: 1,
        amount: 1199.99,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 2,
        EmployeeID: 2,
        transactionId: "TRX202502",
        customerDetails: {
            name: "Mark Johnson",
            initial: "MJ",
            email: "mark.johnson@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-06-20"),
        product: {
            name: "Mac Mini",
            image: "mac-mini.png"
        },
        quantity: 3,
        amount: 1797.00,
        paymentMethod: "PayPal",
        status: "Pending"
    },
    {
        id: 3,
        EmployeeID: 3,
        transactionId: "TRX202503",
        customerDetails: {
            name: "Emily White",
            initial: "EW",
            email: "emily.white@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-06-20"),
        product: {
            name: "HomePod Mini",
            image: "homepod-mini.png"
        },
        quantity: 6,
        amount: 594.00,
        paymentMethod: "Online Transfer",
        status: "Failed"
    },
    {
        id: 4,
        EmployeeID: 4,
        transactionId: "TRX202504",
        customerDetails: {
            name: "Tom Harris",
            initial: "TH",
            email: "tom.harris@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-06-21"),
        product: {
            name: "iPhone 13",
            image: "iphone-13.png"
        },
        quantity: 2,
        amount: 1399.98,
        paymentMethod: "Credit Card",
        status: "Processing"
    },
    {
        id: 5,
        EmployeeID: 5,
        transactionId: "TRX202505",
        customerDetails: {
            name: "Lisa Green",
            initial: "LG",
            email: "lisa.green@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-06-21"),
        product: {
            name: "Apple Watch Series 7",
            image: "apple-watch-series-7.png"
        },
        quantity: 4,
        amount: 1596.00,
        paymentMethod: "PayPal",
        status: "Completed"
    },
    {
        id: 6,
        EmployeeID: 6,
        transactionId: "TRX202506",
        customerDetails: {
            name: "Olivia Adams",
            initial: "OA",
            email: "olivia.adams@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-06-21"),
        product: {
            name: "Apple TV 4K",
            image: "apple-tv-4k.png"
        },
        quantity: 3,
        amount: 537.00,
        paymentMethod: "Cheque",
        status: "Pending"
    },
    {
        id: 7,
        EmployeeID: 7,
        transactionId: "TRX202507",
        customerDetails: {
            name: "David Clark",
            initial: "DC",
            email: "david.clark@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-06-22"),
        product: {
            name: "iPhone 15 Pro",
            image: "iphone-15-pro.png"
        },
        quantity: 1,
        amount: 999.99,
        paymentMethod: "Online Transfer",
        status: "Failed"
    },
    {
        id: 8,
        EmployeeID: 8,
        transactionId: "TRX202508",
        customerDetails: {
            name: "Rachel Lee",
            initial: "RL",
            email: "rachel.lee@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-06-22"),
        product: {
            name: "MacBook Air M2",
            image: "macbook-air-m2.png"
        },
        quantity: 2,
        amount: 2598.00,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 9,
        EmployeeID: 9,
        transactionId: "TRX202509",
        customerDetails: {
            name: "Lucas Robinson",
            initial: "LR",
            email: "lucas.robinson@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-06-22"),
        product: {
            name: "AirPods Pro",
            image: "airpods-pro.png"
        },
        quantity: 6,
        amount: 1494.00,
        paymentMethod: "PayPal",
        status: "Processing"
    },
    {
        id: 10,
        EmployeeID: 10,
        transactionId: "TRX202510",
        customerDetails: {
            name: "Sophia Martinez",
            initial: "SM",
            email: "sophia.martinez@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-06-23"),
        product: {
            name: "iPad Air",
            image: "ipad-air.png"
        },
        quantity: 3,
        amount: 1797.00,
        paymentMethod: "Online Transfer",
        status: "Pending"
    },
    {
        id: 11,
        EmployeeID: 11,
        transactionId: "TRX202511",
        customerDetails: {
            name: "Michael Brown",
            initial: "MB",
            email: "michael.brown@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-06-23"),
        product: {
            name: "Apple Watch Series 8",
            image: "apple-watch-series-8.png"
        },
        quantity: 4,
        amount: 1596.00,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 12,
        EmployeeID: 12,
        transactionId: "TRX202512",
        customerDetails: {
            name: "Sarah Davis",
            initial: "SD",
            email: "sarah.davis@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-06-23"),
        product: {
            name: "iPhone 14 Pro Max",
            image: "iphone-14-pro-max.png"
        },
        quantity: 1,
        amount: 1099.99,
        paymentMethod: "PayPal",
        status: "Failed"
    },
    {
        id: 13,
        EmployeeID: 13,
        transactionId: "TRX202513",
        customerDetails: {
            name: "James Wilson",
            initial: "JW",
            email: "james.wilson@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-06-24"),
        product: {
            name: "iPhone 15 Plus",
            image: "iphone-15-plus.png"
        },
        quantity: 2,
        amount: 1599.98,
        paymentMethod: "Online Transfer",
        status: "Processing"
    },
    {
        id: 14,
        EmployeeID: 14,
        transactionId: "TRX202514",
        customerDetails: {
            name: "Laura Taylor",
            initial: "LT",
            email: "laura.taylor@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-06-24"),
        product: {
            name: "iMac 24",
            image: "imac-24.png"
        },
        quantity: 3,
        amount: 3599.97,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 15,
        EmployeeID: 15,
        transactionId: "TRX202515",
        customerDetails: {
            name: "Chris Evans",
            initial: "CE",
            email: "chris.evans@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-06-24"),
        product: {
            name: "Mac Mini",
            image: "mac-mini.png"
        },
        quantity: 4,
        amount: 2396.00,
        paymentMethod: "PayPal",
        status: "Pending"
    },
    {
        id: 16,
        EmployeeID: 16,
        transactionId: "TRX202516",
        customerDetails: {
            name: "Anna Moore",
            initial: "AM",
            email: "anna.moore@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-06-25"),
        product: {
            name: "HomePod Mini",
            image: "homepod-mini.png"
        },
        quantity: 7,
        amount: 693.00,
        paymentMethod: "Online Transfer",
        status: "Failed"
    },
    {
        id: 17,
        EmployeeID: 17,
        transactionId: "TRX202517",
        customerDetails: {
            name: "Robert King",
            initial: "RK",
            email: "robert.king@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-06-25"),
        product: {
            name: "iPhone 13",
            image: "iphone-13.png"
        },
        quantity: 3,
        amount: 2099.97,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 18,
        EmployeeID: 18,
        transactionId: "TRX202518",
        customerDetails: {
            name: "Megan Scott",
            initial: "MS",
            email: "megan.scott@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-06-25"),
        product: {
            name: "Apple Watch Series 7",
            image: "apple-watch-series-7.png"
        },
        quantity: 2,
        amount: 798.00,
        paymentMethod: "PayPal",
        status: "Processing"
    },
    {
        id: 19,
        EmployeeID: 19,
        transactionId: "TRX202519",
        customerDetails: {
            name: "Daniel Young",
            initial: "DY",
            email: "daniel.young@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-06-26"),
        product: {
            name: "Apple TV 4K",
            image: "apple-tv-4k.png"
        },
        quantity: 4,
        amount: 716.00,
        paymentMethod: "Online Transfer",
        status: "Pending"
    },
    {
        id: 20,
        EmployeeID: 20,
        transactionId: "TRX202520",
        customerDetails: {
            name: "Emma Walker",
            initial: "EW",
            email: "emma.walker@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-06-26"),
        product: {
            name: "iPhone 15 Pro",
            image: "iphone-15-pro.png"
        },
        quantity: 2,
        amount: 1999.98,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 21,
        EmployeeID: 21,
        transactionId: "TRX202521",
        customerDetails: {
            name: "Liam Hall",
            initial: "LH",
            email: "liam.hall@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-06-26"),
        product: {
            name: "MacBook Air M2",
            image: "macbook-air-m2.png"
        },
        quantity: 1,
        amount: 1299.00,
        paymentMethod: "PayPal",
        status: "Failed"
    },
    {
        id: 22,
        EmployeeID: 22,
        transactionId: "TRX202522",
        customerDetails: {
            name: "Ava Lewis",
            initial: "AL",
            email: "ava.lewis@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-06-27"),
        product: {
            name: "AirPods Pro",
            image: "airpods-pro.png"
        },
        quantity: 5,
        amount: 1245.00,
        paymentMethod: "Online Transfer",
        status: "Processing"
    },
    {
        id: 23,
        EmployeeID: 23,
        transactionId: "TRX202523",
        customerDetails: {
            name: "Noah Clark",
            initial: "NC",
            email: "noah.clark@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-06-27"),
        product: {
            name: "iPad Air",
            image: "ipad-air.png"
        },
        quantity: 3,
        amount: 1797.00,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 24,
        EmployeeID: 24,
        transactionId: "TRX202524",
        customerDetails: {
            name: "Mia Turner",
            initial: "MT",
            email: "mia.turner@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-06-27"),
        product: {
            name: "Apple Watch Series 8",
            image: "apple-watch-series-8.png"
        },
        quantity: 4,
        amount: 1596.00,
        paymentMethod: "PayPal",
        status: "Pending"
    },
    {
        id: 25,
        EmployeeID: 25,
        transactionId: "TRX202525",
        customerDetails: {
            name: "Ethan Allen",
            initial: "EA",
            email: "ethan.allen@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-06-28"),
        product: {
            name: "iPhone 14 Pro Max",
            image: "iphone-14-pro-max.png"
        },
        quantity: 2,
        amount: 2199.98,
        paymentMethod: "Online Transfer",
        status: "Failed"
    },
    {
        id: 26,
        EmployeeID: 26,
        transactionId: "TRX202526",
        customerDetails: {
            name: "Isabella King",
            initial: "IK",
            email: "isabella.king@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-06-28"),
        product: {
            name: "iPhone 15 Plus",
            image: "iphone-15-plus.png"
        },
        quantity: 3,
        amount: 2399.97,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 27,
        EmployeeID: 27,
        transactionId: "TRX202527",
        customerDetails: {
            name: "Jacob Wright",
            initial: "JW",
            email: "jacob.wright@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-06-28"),
        product: {
            name: "iMac 24",
            image: "imac-24.png"
        },
        quantity: 1,
        amount: 1199.99,
        paymentMethod: "PayPal",
        status: "Processing"
    },
    {
        id: 28,
        EmployeeID: 28,
        transactionId: "TRX202528",
        customerDetails: {
            name: "Charlotte Lee",
            initial: "CL",
            email: "charlotte.lee@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-06-29"),
        product: {
            name: "Mac Mini",
            image: "mac-mini.png"
        },
        quantity: 2,
        amount: 1198.00,
        paymentMethod: "Online Transfer",
        status: "Completed"
    },
    {
        id: 29,
        EmployeeID: 29,
        transactionId: "TRX202529",
        customerDetails: {
            name: "William Young",
            initial: "WY",
            email: "william.young@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-06-29"),
        product: {
            name: "HomePod Mini",
            image: "homepod-mini.png"
        },
        quantity: 5,
        amount: 495.00,
        paymentMethod: "Credit Card",
        status: "Pending"
    },
    {
        id: 30,
        EmployeeID: 30,
        transactionId: "TRX202530",
        customerDetails: {
            name: "Amelia Harris",
            initial: "AH",
            email: "amelia.harris@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-06-29"),
        product: {
            name: "iPhone 13",
            image: "iphone-13.png"
        },
        quantity: 4,
        amount: 2799.96,
        paymentMethod: "PayPal",
        status: "Failed"
    },
    {
        id: 31,
        EmployeeID: 31,
        transactionId: "TRX202531",
        customerDetails: {
            name: "Alexander Scott",
            initial: "AS",
            email: "alexander.scott@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-06-30"),
        product: {
            name: "Apple Watch Series 7",
            image: "apple-watch-series-7.png"
        },
        quantity: 3,
        amount: 1197.00,
        paymentMethod: "Online Transfer",
        status: "Completed"
    },
    {
        id: 32,
        EmployeeID: 32,
        transactionId: "TRX202532",
        customerDetails: {
            name: "Harper Walker",
            initial: "HW",
            email: "harper.walker@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-06-30"),
        product: {
            name: "Apple TV 4K",
            image: "apple-tv-4k.png"
        },
        quantity: 2,
        amount: 358.00,
        paymentMethod: "Credit Card",
        status: "Processing"
    },
    {
        id: 33,
        EmployeeID: 33,
        transactionId: "TRX202533",
        customerDetails: {
            name: "Evelyn Adams",
            initial: "EA",
            email: "evelyn.adams@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-06-30"),
        product: {
            name: "iPhone 15 Pro",
            image: "iphone-15-pro.png"
        },
        quantity: 3,
        amount: 2999.97,
        paymentMethod: "PayPal",
        status: "Pending"
    },
    {
        id: 34,
        EmployeeID: 34,
        transactionId: "TRX202534",
        customerDetails: {
            name: "Mason Brown",
            initial: "MB",
            email: "mason.brown@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-07-01"),
        product: {
            name: "MacBook Air M2",
            image: "macbook-air-m2.png"
        },
        quantity: 1,
        amount: 1299.00,
        paymentMethod: "Online Transfer",
        status: "Failed"
    },
    {
        id: 35,
        EmployeeID: 35,
        transactionId: "TRX202535",
        customerDetails: {
            name: "Sofia Davis",
            initial: "SD",
            email: "sofia.davis@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-07-01"),
        product: {
            name: "AirPods Pro",
            image: "airpods-pro.png"
        },
        quantity: 4,
        amount: 996.00,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 36,
        EmployeeID: 36,
        transactionId: "TRX202536",
        customerDetails: {
            name: "James Wilson",
            initial: "JW",
            email: "james.wilson@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-07-01"),
        product: {
            name: "iPad Air",
            image: "ipad-air.png"
        },
        quantity: 2,
        amount: 1198.00,
        paymentMethod: "PayPal",
        status: "Processing"
    },
    {
        id: 37,
        EmployeeID: 37,
        transactionId: "TRX202537",
        customerDetails: {
            name: "Chloe Taylor",
            initial: "CT",
            email: "chloe.taylor@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-07-02"),
        product: {
            name: "Apple Watch Series 8",
            image: "apple-watch-series-8.png"
        },
        quantity: 3,
        amount: 1197.00,
        paymentMethod: "Online Transfer",
        status: "Completed"
    },
    {
        id: 38,
        EmployeeID: 38,
        transactionId: "TRX202538",
        customerDetails: {
            name: "Benjamin Lee",
            initial: "BL",
            email: "benjamin.lee@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-07-02"),
        product: {
            name: "iPhone 14 Pro Max",
            image: "iphone-14-pro-max.png"
        },
        quantity: 1,
        amount: 1099.99,
        paymentMethod: "Credit Card",
        status: "Pending"
    },
    {
        id: 39,
        EmployeeID: 39,
        transactionId: "TRX202539",
        customerDetails: {
            name: "Zoe Clark",
            initial: "ZC",
            email: "zoe.clark@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-07-02"),
        product: {
            name: "iPhone 15 Plus",
            image: "iphone-15-plus.png"
        },
        quantity: 4,
        amount: 3199.96,
        paymentMethod: "PayPal",
        status: "Failed"
    },
    {
        id: 40,
        EmployeeID: 40,
        transactionId: "TRX202540",
        customerDetails: {
            name: "Logan Harris",
            initial: "LH",
            email: "logan.harris@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-07-03"),
        product: {
            name: "iMac 24",
            image: "imac-24.png"
        },
        quantity: 2,
        amount: 2399.98,
        paymentMethod: "Online Transfer",
        status: "Completed"
    },
    {
        id: 41,
        EmployeeID: 41,
        transactionId: "TRX202541",
        customerDetails: {
            name: "Ella Young",
            initial: "EY",
            email: "ella.young@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-07-03"),
        product: {
            name: "Mac Mini",
            image: "mac-mini.png"
        },
        quantity: 3,
        amount: 1797.00,
        paymentMethod: "Credit Card",
        status: "Processing"
    },
    {
        id: 42,
        EmployeeID: 42,
        transactionId: "TRX202542",
        customerDetails: {
            name: "Lucas Martinez",
            initial: "LM",
            email: "lucas.martinez@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-07-03"),
        product: {
            name: "HomePod Mini",
            image: "homepod-mini.png"
        },
        quantity: 6,
        amount: 594.00,
        paymentMethod: "PayPal",
        status: "Pending"
    },
    {
        id: 43,
        EmployeeID: 43,
        transactionId: "TRX202543",
        customerDetails: {
            name: "Aria Walker",
            initial: "AW",
            email: "aria.walker@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-07-04"),
        product: {
            name: "iPhone 13",
            image: "iphone-13.png"
        },
        quantity: 1,
        amount: 699.99,
        paymentMethod: "Online Transfer",
        status: "Failed"
    },
    {
        id: 44,
        EmployeeID: 44,
        transactionId: "TRX202544",
        customerDetails: {
            name: "Henry Scott",
            initial: "HS",
            email: "henry.scott@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-07-04"),
        product: {
            name: "Apple Watch Series 7",
            image: "apple-watch-series-7.png"
        },
        quantity: 4,
        amount: 1596.00,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        id: 45,
        EmployeeID: 45,
        transactionId: "TRX202545",
        customerDetails: {
            name: "Lily Adams",
            initial: "LA",
            email: "lily.adams@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-07-04"),
        product: {
            name: "Apple TV 4K",
            image: "apple-tv-4k.png"
        },
        quantity: 3,
        amount: 537.00,
        paymentMethod: "PayPal",
        status: "Processing"
    },
    {
        id: 46,
        EmployeeID: 46,
        transactionId: "TRX202546",
        customerDetails: {
            name: "Jack Wilson",
            initial: "JW",
            email: "jack.wilson@example.com",
            colorTheme: "Blue"
        },
        date: new Date("2025-07-05"),
        product: {
            name: "iPhone 15 Pro",
            image: "iphone-15-pro.png"
        },
        quantity: 2,
        amount: 1999.98,
        paymentMethod: "Online Transfer",
        status: "Completed"
    },
    {
        id: 47,
        EmployeeID: 47,
        transactionId: "TRX202547",
        customerDetails: {
            name: "Grace Brown",
            initial: "GB",
            email: "grace.brown@example.com",
            colorTheme: "Orange"
        },
        date: new Date("2025-07-05"),
        product: {
            name: "MacBook Air M2",
            image: "macbook-air-m2.png"
        },
        quantity: 1,
        amount: 1299.00,
        paymentMethod: "Credit Card",
        status: "Pending"
    },
    {
        id: 48,
        EmployeeID: 48,
        transactionId: "TRX202548",
        customerDetails: {
            name: "Owen Davis",
            initial: "OD",
            email: "owen.davis@example.com",
            colorTheme: "Green"
        },
        date: new Date("2025-07-05"),
        product: {
            name: "AirPods Pro",
            image: "airpods-pro.png"
        },
        quantity: 10,
        amount: 1743.00,
        paymentMethod: "PayPal",
        status: "Failed"
    },
    {
        id: 49,
        EmployeeID: 49,
        transactionId: "TRX202549",
        customerDetails: {
            name: "Hannah Lee",
            initial: "HL",
            email: "hannah.lee@example.com",
            colorTheme: "Red"
        },
        date: new Date("2025-07-06"),
        product: {
            name: "iPad Air",
            image: "ipad-air.png"
        },
        quantity: 4,
        amount: 2396.00,
        paymentMethod: "Online Transfer",
        status: "Completed"
    },
    {
        id: 50,
        EmployeeID: 50,
        transactionId: "TRX202550",
        customerDetails: {
            name: "Elijah Clark",
            initial: "EC",
            email: "elijah.clark@example.com",
            colorTheme: "Purple"
        },
        date: new Date("2025-07-06"),
        product: {
            name: "Apple Watch Series 8",
            image: "apple-watch-series-8.png"
        },
        quantity: 2,
        amount: 798.00,
        paymentMethod: "Credit Card",
        status: "Processing"
    }
];