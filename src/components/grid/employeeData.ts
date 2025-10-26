export interface Employees {
  EmployeeID: number;
  Name: {
    FirstName: string;
    LastName: string;
  };
  City: string;
}

export const complexData: object[] = [
    {
        "EmployeeID": 1,
        "Name": {
            "LastName": "Thompson",
            "FirstName": "Emma"
        },
        "Title": "Sales Executive",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1985, 2, 15),
        "HireDate": new Date(2020, 5, 20),
        "Address": "1234 Pine St.\r\nApt. 5B",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2007. Emma also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/thompson.bmp"
    },
    {
        "EmployeeID": 2,
        "Name": {
            "LastName": "Rodriguez",
            "FirstName": "Liam"
        },
        "Title": "Customer Relations Officer",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1975, 8, 10),
        "HireDate": new Date(2020, 10, 15),
        "Address": "456 Oak Ave.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Liam has a BS degree in chemistry from Boston College (1997). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/rodriguez.bmp"
    },
    {
        "EmployeeID": 3,
        "Name": {
            "LastName": "Bennett",
            "FirstName": "Olivia"
        },
        "Title": "Digital Marketing Specialist",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1990, 6, 22),
        "HireDate": new Date(2020, 3, 10),
        "Address": "789 Cedar Rd.\r\nApt. 3C",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2012. Olivia also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/bennett.bmp"
    },
    {
        "EmployeeID": 4,
        "Name": {
            "LastName": "Martinez",
            "FirstName": "Noah"
        },
        "Title": "Regional Sales Manager",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1980, 0, 30),
        "HireDate": new Date(2021, 7, 5),
        "Address": "101 Maple Dr.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Noah has a BS degree in chemistry from Boston College (2002). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/martinez.bmp"
    },
    {
        "EmployeeID": 5,
        "Name": {
            "LastName": "Wilson",
            "FirstName": "Sophia"
        },
        "Title": "Content Marketing Coordinator",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1993, 10, 12),
        "HireDate": new Date(2020, 1, 25),
        "Address": "234 Elm St.\r\nApt. 4A",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2015. Sophia also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/wilson.bmp"
    },
    {
        "EmployeeID": 6,
        "Name": {
            "LastName": "Garcia",
            "FirstName": "James"
        },
        "Title": "Business Development Specialist",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1978, 5, 18),
        "HireDate": new Date(2021, 8, 30),
        "Address": "567 Birch Ln.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "James has a BS degree in chemistry from Boston College (2000). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/garcia.bmp"
    },
    {
        "EmployeeID": 7,
        "Name": {
            "LastName": "Clark",
            "FirstName": "Ava"
        },
        "Title": "Social Media Manager",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1987, 3, 5),
        "HireDate": new Date(2020, 2, 12),
        "Address": "890 Spruce Ave.\r\nApt. 2B",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2009. Ava also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/clark.bmp"
    },
    {
        "EmployeeID": 8,
        "Name": {
            "LastName": "Lewis",
            "FirstName": "William"
        },
        "Title": "Market Research Analyst",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1976, 11, 20),
        "HireDate": new Date(2021, 6, 18),
        "Address": "321 Willow Rd.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "William has a BS degree in chemistry from Boston College (1998). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/lewis.bmp"
    },
    {
        "EmployeeID": 9,
        "Name": {
            "LastName": "Walker",
            "FirstName": "Isabella"
        },
        "Title": "Brand Strategy Associate",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1991, 7, 14),
        "HireDate": new Date(2022, 0, 22),
        "Address": "654 Magnolia St.\r\nApt. 6C",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2013. Isabella also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/walker.bmp"
    },
    {
        "EmployeeID": 10,
        "Name": {
            "LastName": "Hall",
            "FirstName": "Alexander"
        },
        "Title": "Account Manager",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1982, 1, 28),
        "HireDate": new Date(2020, 4, 15),
        "Address": "987 Aspen Way",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Alexander has a BS degree in chemistry from Boston College (2004). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/hall.bmp"
    },
    {
        "EmployeeID": 11,
        "Name": {
            "LastName": "Allen",
            "FirstName": "Mia"
        },
        "Title": "Sales Executive",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1988, 8, 9),
        "HireDate": new Date(2021, 2, 10),
        "Address": "432 Laurel Ave.\r\nApt. 7A",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2010. Mia also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/allen.bmp"
    },
    {
        "EmployeeID": 12,
        "Name": {
            "LastName": "Young",
            "FirstName": "Ethan"
        },
        "Title": "Customer Relations Officer",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1977, 10, 3),
        "HireDate": new Date(2022, 5, 25),
        "Address": "765 Sycamore Dr.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Ethan has a BS degree in chemistry from Boston College (1999). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/young.bmp"
    },
    {
        "EmployeeID": 13,
        "Name": {
            "LastName": "King",
            "FirstName": "Charlotte"
        },
        "Title": "Digital Marketing Specialist",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1992, 4, 17),
        "HireDate": new Date(2023, 0, 15),
        "Address": "321 Chestnut St.\r\nApt. 8B",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2014. Charlotte also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/king.bmp"
    },
    {
        "EmployeeID": 14,
        "Name": {
            "LastName": "Wright",
            "FirstName": "Mason"
        },
        "Title": "Regional Sales Manager",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1979, 9, 22),
        "HireDate": new Date(2024, 3, 30),
        "Address": "654 Poplar Rd.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Mason has a BS degree in chemistry from Boston College (2001). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/wright.bmp"
    },
    {
        "EmployeeID": 15,
        "Name": {
            "LastName": "Scott",
            "FirstName": "Amelia"
        },
        "Title": "Content Marketing Coordinator",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1994, 1, 14),
        "HireDate": new Date(2020, 10, 5),
        "Address": "987 Hazel St.\r\nApt. 9C",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2016. Amelia also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/scott.bmp"
    },
    {
        "EmployeeID": 16,
        "Name": {
            "LastName": "Green",
            "FirstName": "Jacob"
        },
        "Title": "Business Development Specialist",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1981, 6, 8),
        "HireDate": new Date(2020, 7, 12),
        "Address": "123 Linden Ave.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Jacob has a BS degree in chemistry from Boston College (2003). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/green.bmp"
    },
    {
        "EmployeeID": 17,
        "Name": {
            "LastName": "Baker",
            "FirstName": "Harper"
        },
        "Title": "Social Media Manager",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1989, 11, 1),
        "HireDate": new Date(2020, 8, 20),
        "Address": "456 Walnut St.\r\nApt. 1A",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2011. Harper also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/baker.bmp"
    },
    {
        "EmployeeID": 18,
        "Name": {
            "LastName": "Gonzalez",
            "FirstName": "Logan"
        },
        "Title": "Market Research Analyst",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1976, 2, 25),
        "HireDate": new Date(2021, 11, 15),
        "Address": "789 Oakwood Dr.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Logan has a BS degree in chemistry from Boston College (1998). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/gonzalez.bmp"
    },
    {
        "EmployeeID": 19,
        "Name": {
            "LastName": "Nelson",
            "FirstName": "Evelyn"
        },
        "Title": "Brand Strategy Associate",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1990, 5, 30),
        "HireDate": new Date(2022, 5, 10),
        "Address": "101 Birchwood Ave.\r\nApt. 2C",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2012. Evelyn also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/nelson.bmp"
    },
    {
        "EmployeeID": 20,
        "Name": {
            "LastName": "Carter",
            "FirstName": "Elijah"
        },
        "Title": "Account Manager",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1983, 3, 12),
        "HireDate": new Date(2020, 9, 5),
        "Address": "234 Pinewood Dr.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Elijah has a BS degree in chemistry from Boston College (2005). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/carter.bmp"
    },
    {
        "EmployeeID": 21,
        "Name": {
            "LastName": "Mitchell",
            "FirstName": "Luna"
        },
        "Title": "Sales Executive",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1992, 9, 25),
        "HireDate": new Date(2021, 6, 20),
        "Address": "567 Cedarwood St.\r\nApt. 3B",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2014. Luna also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/mitchell.bmp"
    },
    {
        "EmployeeID": 22,
        "Name": {
            "LastName": "Perez",
            "FirstName": "Henry"
        },
        "Title": "Customer Relations Officer",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1978, 7, 15),
        "HireDate": new Date(2022, 1, 28),
        "Address": "890 Maplewood Ln.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Henry has a BS degree in chemistry from Boston College (2000). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/perez.bmp"
    },
    {
        "EmployeeID": 23,
        "Name": {
            "LastName": "Roberts",
            "FirstName": "Mila"
        },
        "Title": "Digital Marketing Specialist",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1993, 2, 20),
        "HireDate": new Date(2023, 4, 15),
        "Address": "123 Elmwood Ave.\r\nApt. 4C",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2015. Mila also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/roberts.bmp"
    },
    {
        "EmployeeID": 24,
        "Name": {
            "LastName": "Turner",
            "FirstName": "Benjamin"
        },
        "Title": "Regional Sales Manager",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1977, 0, 10),
        "HireDate": new Date(2020, 3, 22),
        "Address": "456 Sprucewood Dr.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Benjamin has a BS degree in chemistry from Boston College (1999). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/turner.bmp"
    },
    {
        "EmployeeID": 25,
        "Name": {
            "LastName": "Phillips",
            "FirstName": "Aria"
        },
        "Title": "Content Marketing Coordinator",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1991, 5, 5),
        "HireDate": new Date(2020, 9, 10),
        "Address": "789 Pinecrest St.\r\nApt. 5A",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2013. Aria also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/phillips.bmp"
    },
    {
        "EmployeeID": 26,
        "Name": {
            "LastName": "Campbell",
            "FirstName": "Lucas"
        },
        "Title": "Business Development Specialist",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1980, 4, 12),
        "HireDate": new Date(2021, 2, 25),
        "Address": "101 Cedarcrest Dr.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Lucas has a BS degree in chemistry from Boston College (2002). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/campbell.bmp"
    },
    {
        "EmployeeID": 27,
        "Name": {
            "LastName": "Parker",
            "FirstName": "Sofia"
        },
        "Title": "Social Media Manager",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1989, 8, 30),
        "HireDate": new Date(2022, 10, 15),
        "Address": "234 Oakcrest Ave.\r\nApt. 6B",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2011. Sofia also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/parker.bmp"
    },
    {
        "EmployeeID": 28,
        "Name": {
            "LastName": "Evans",
            "FirstName": "Jack"
        },
        "Title": "Market Research Analyst",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1978, 1, 18),
        "HireDate": new Date(2020, 3, 30),
        "Address": "567 Maplegrove Rd.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Jack has a BS degree in chemistry from Boston College (2000). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/evans.bmp"
    },
    {
        "EmployeeID": 29,
        "Name": {
            "LastName": "Edwards",
            "FirstName": "Avery"
        },
        "Title": "Brand Strategy Associate",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": new Date(1992, 0, 25),
        "HireDate": new Date(2021, 7, 10),
        "Address": "890 Elmcrest St.\r\nApt. 7C",
        "City": "London",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "Canada",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": {
            "Length": 21626
        },
        "Notes": "Education includes a BA in psychology from Colorado State University in 2014. Avery also completed 'The Art of the Cold Call.' She is a member of Toastmasters International.",
        "ReportsTo": 6,
        "PhotoPath": "http://accweb/emmployees/edwards.bmp"
    },
    {
        "EmployeeID": 30,
        "Name": {
            "LastName": "Collins",
            "FirstName": "Daniel"
        },
        "Title": "Account Manager",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": new Date(1979, 6, 15),
        "HireDate": new Date(2022, 11, 5),
        "Address": "123 Sprucegrove Dr.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": {
            "Length": 21722
        },
        "Notes": "Daniel has a BS degree in chemistry from Boston College (2001). He has also completed a certificate program in food retailing management.",
        "ReportsTo": 0,
        "PhotoPath": "http://accweb/emmployees/collins.bmp"
    }
]
