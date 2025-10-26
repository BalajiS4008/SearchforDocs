export interface Employee {
  EmployeeID: string;
  EmployeeName: string;
  Designation: string;
  Team: string;
  Title: string;
  FirstName: string;
  LastName: string;
  Country: string;
}

export const employeeData = [{
    'EmployeeID': 1,
    'LastName': 'Davolio',
    'FirstName': 'Nancy',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(1995, 11, 8),
    'HireDate': new Date(2022, 4, 1),
    'Address': '507 - 20th Ave. E.\r\nApt. 2A',
    'City': 'Seattle',
    'Region': 'WA',
    'PostalCode': '98122',
    'Country': 'USA',
    'HomePhone': '(206) 555-9857',
    'Extension': '5467',
    'Photo': { 'Length': 21626 },
    'Notes': 'Education includes a BA in psychology from Colorado State University in 2000.  She also completed\
    \'The Art of the Cold Call.\'  Nancy is a member of Toastmasters International.',
    'ReportsTo': 2,
    'PhotoPath': 'https://accweb/emmployees/davolio.bmp'
}, {
    'EmployeeID': 2,
    'LastName': 'Fuller',
    'FirstName': 'Andrew',
    'Title': 'Vice President, Sales',
    'TitleOfCourtesy': 'Dr.',
    'BirthDate': new Date(1980, 1, 19),
    'HireDate': new Date(2022, 7, 16),
    'Address': '908 W. Capital Way',
    'City': 'Tacoma',
    'Region': 'WA',
    'PostalCode': '98401',
    'Country': 'USA',
    'HomePhone': '(206) 555-9482',
    'Extension': '3457',
    'Photo': { 'Length': 21626 },
    'Notes': 'Andrew received his BTS commercial in 2004 and a Ph.D. in international marketing from the University of \
    Dallas in 2011.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, \
    was promoted to sales manager in January 2022 and to vice president of sales in March 2023.  Andrew is a member of the \
    Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
    'ReportsTo': 7,
    'PhotoPath': 'https://accweb/emmployees/fuller.bmp'
}, {
    'EmployeeID': 3,
    'LastName': 'Leverling',
    'FirstName': 'Janet',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(1990, 7, 26),
    'HireDate': new Date(2022, 3, 1),
    'Address': '722 Moss Bay Blvd.',
    'City': 'Kirkland',
    'Region': 'WA',
    'PostalCode': '98033',
    'Country': 'USA',
    'HomePhone': '(206) 555-3412',
    'Extension': '3355',
    'Photo': { 'Length': 21722 },
    'Notes': 'Janet has a BS degree in chemistry from Boston College (2014). \
     She has also completed a certificate program in food retailing management.\
     Janet was hired as a sales associate in 2021 and promoted to sales representative in February 2022.',
    'ReportsTo': 2,
    'PhotoPath': 'https://accweb/emmployees/leverling.bmp'
}, {
    'EmployeeID': 4,
    'LastName': 'Peacock',
    'FirstName': 'Margaret',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mrs.',
    'BirthDate': new Date(1985, 8, 19),
    'HireDate': new Date(2023, 4, 3),
    'Address': '4110 Old Redmond Rd.',
    'City': 'Redmond',
    'Region': 'WA',
    'PostalCode': '98052',
    'Country': 'USA',
    'HomePhone': '(206) 555-8122',
    'Extension': '5176',
    'Photo': { 'Length': 21626 },
    'Notes': 'Margaret holds a BA in English literature from Concordia College (1988) and an MA from the American \
    Institute of Culinary Arts (1996).  She was assigned to the London office temporarily from July through November 2022.',
    'ReportsTo': 2,
    'PhotoPath': 'https://accweb/emmployees/peacock.bmp'
}, {
    'EmployeeID': 5,
    'LastName': 'Buchanan',
    'FirstName': 'Steven',
    'Title': 'Sales Manager',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(1988, 2, 4),
    'HireDate': new Date(2023, 9, 17),
    'Address': '14 Garrett Hill',
    'City': 'London',
    'Region': null,
    'PostalCode': 'SW1 8JR',
    'Country': 'UK',
    'HomePhone': '(71) 555-4848',
    'Extension': '3453',
    'Photo': { 'Length': 21626 },
    'Notes': 'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 2006.  Upon joining the company as \
    a sales representative in 2022, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent \
    post in London.  He was promoted to sales manager in March 2023.  Mr. Buchanan has completed the courses \'Successful \
    Telemarketing\' and \'International Sales Management.\'  He is fluent in French.',
    'ReportsTo': 2,
    'PhotoPath': 'https://accweb/emmployees/buchanan.bmp'
}, {
    'EmployeeID': 6,
    'LastName': 'Suyama',
    'FirstName': 'Michael',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(1992, 6, 2),
    'HireDate': new Date(2023, 9, 17),
    'Address': 'Coventry House\r\nMiner Rd.',
    'City': 'London',
    'Region': null,
    'PostalCode': 'EC2 7JR',
    'Country': 'UK',
    'HomePhone': '(71) 555-7773',
    'Extension': '428',
    'Photo': { 'Length': 21626 },
    'Notes': 'Michael is a graduate of Sussex University (MA, economics, 2013) and the University of California at Los Angeles \
    (MBA, marketing, 2016).  He has also taken the courses \'Multi-Cultural Selling\' and \'Time Management for the Sales Professional.\'  \
    He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
    'ReportsTo': 5,
    'PhotoPath': 'https://accweb/emmployees/davolio.bmp'
}, {
    'EmployeeID': 7,
    'LastName': 'King',
    'FirstName': 'Robert',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(1991, 4, 29),
    'HireDate': new Date(2024, 0, 2),
    'Address': 'Edgeham Hollow\r\nWinchester Way',
    'City': 'London',
    'Region': null,
    'PostalCode': 'RG1 9SP',
    'Country': 'UK',
    'HomePhone': '(71) 555-5598',
    'Extension': '465',
    'Photo': { 'Length': 21626 },
    'Notes': 'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the \
    University of Michigan in 2022, the year he joined the company.  After completing a course entitled \'Selling in Europe,\' \
    he was transferred to the London office in March 2023.',
    'ReportsTo': 5,
    'PhotoPath': 'https://accweb/emmployees/davolio.bmp'
}, {
    'EmployeeID': 8,
    'LastName': 'Callahan',
    'FirstName': 'Laura',
    'Title': 'Inside Sales Coordinator',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(1987, 0, 9),
    'HireDate': new Date(2024, 2, 5),
    'Address': '4726 - 11th Ave. N.E.',
    'City': 'Seattle',
    'Region': 'WA',
    'PostalCode': '98105',
    'Country': 'USA',
    'HomePhone': '(206) 555-1189',
    'Extension': '2344',
    'Photo': { 'Length': 21626 },
    'Notes': 'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business \
    French.  She reads and writes French.',
    'ReportsTo': 2,
    'PhotoPath': 'https://accweb/emmployees/davolio.bmp'
}, {
    'EmployeeID': 9,
    'LastName': 'Dodsworth',
    'FirstName': 'Anne',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(1993, 0, 27),
    'HireDate': new Date(2025, 7, 15),
    'Address': '7 Houndstooth Rd.',
    'City': 'London',
    'Region': null,
    'PostalCode': 'WG2 7LT',
    'Country': 'UK',
    'HomePhone': '(71) 555-4444',
    'Extension': '452',
    'Photo': { 'Length': 21626 },
    'Notes': 'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.',
    'ReportsTo': 5,
    'PhotoPath': 'https://accweb/emmployees/davolio.bmp'
}];
