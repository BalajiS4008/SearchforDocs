export interface ProductModel {
  CategoryName: string;
  ProductName: string;
  QuantityPerUnit: string;
  UnitsInStock: number;
  Discontinued: boolean;
}

export const productInventory: ProductModel[] = [
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Chai',
        'QuantityPerUnit': '10 boxes x 20 bags',
        'UnitsInStock': 39,
        'Discontinued': true
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Chang',
        'QuantityPerUnit': '24 - 12 oz bottles',
        'UnitsInStock': 17,
        'Discontinued': true
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Chartreuse verte',
        'QuantityPerUnit': '750 cc per bottle',
        'UnitsInStock': 69,
        'Discontinued': true
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'C\u00f4te de Blaye',
        'QuantityPerUnit': '12 - 75 cl bottles',
        'UnitsInStock': 17,
        'Discontinued': true
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Ipoh Coffee',
        'QuantityPerUnit': '16 - 500 g tins',
        'UnitsInStock': 17,
        'Discontinued': false
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Lakkalik\u00f6\u00f6ri',
        'QuantityPerUnit': '500 ml',
        'UnitsInStock': 57,
        'Discontinued': true
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Laughing Lumberjack Lager',
        'QuantityPerUnit': '24 - 12 oz bottles',
        'UnitsInStock': 52,
        'Discontinued': false
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Outback Lager',
        'QuantityPerUnit': '24 - 355 ml bottles',
        'UnitsInStock': 15,
        'Discontinued': false
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Rh\u00f6nbr\u00e4u Klosterbier',
        'QuantityPerUnit': '24 - 0.5 l bottles',
        'UnitsInStock': 125,
        'Discontinued': false
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Sasquatch Ale',
        'QuantityPerUnit': '24 - 12 oz bottles',
        'UnitsInStock': 111,
        'Discontinued': true
    },
    {
        'CategoryName': 'Beverages',
        'ProductName': 'Steeleye Stout',
        'QuantityPerUnit': '24 - 12 oz bottles',
        'UnitsInStock': 20,
        'Discontinued': true
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Aniseed Syrup',
        'QuantityPerUnit': '12 - 550 ml bottles',
        'UnitsInStock': 13,
        'Discontinued': true
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Chef Anton\'s Cajun Seasoning',
        'QuantityPerUnit': '48 - 6 oz jars',
        'UnitsInStock': 53,
        'Discontinued': false
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Genen Shouyu',
        'QuantityPerUnit': '24 - 250 ml bottles',
        'UnitsInStock': 39,
        'Discontinued': false
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Grandma\'s Boysenberry Spread',
        'QuantityPerUnit': '12 - 8 oz jars',
        'UnitsInStock': 120,
        'Discontinued': false
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Gula Malacca',
        'QuantityPerUnit': '20 - 2 kg bags',
        'UnitsInStock': 27,
        'Discontinued': true
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Louisiana Fiery Hot Pepper Sauce',
        'QuantityPerUnit': '32 - 8 oz bottles',
        'UnitsInStock': 76,
        'Discontinued': false
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Louisiana Hot Spiced Okra',
        'QuantityPerUnit': '24 - 8 oz jars',
        'UnitsInStock': 4,
        'Discontinued': false
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Northwoods Cranberry Sauce',
        'QuantityPerUnit': '12 - 12 oz jars',
        'UnitsInStock': 6,
        'Discontinued': false
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Original Frankfurter gr\u00fcne So\u00dfe',
        'QuantityPerUnit': '12 boxes',
        'UnitsInStock': 32,
        'Discontinued': false
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Sirop d\'\u00e9rable',
        'QuantityPerUnit': '24 - 500 ml bottles',
        'UnitsInStock': 113,
        'Discontinued': false
    },
    {
        'CategoryName': 'Condiments',
        'ProductName': 'Vegie-spread',
        'QuantityPerUnit': '15 - 625 g jars',
        'UnitsInStock': 24,
        'Discontinued': true
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Chocolade',
        'QuantityPerUnit': '10 pkgs.',
        'UnitsInStock': 15,
        'Discontinued': true
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Gumb\u00e4r Gummib\u00e4rchen',
        'QuantityPerUnit': '100 - 250 g bags',
        'UnitsInStock': 15,
        'Discontinued': true
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Maxilaku',
        'QuantityPerUnit': '24 - 50 g pkgs.',
        'UnitsInStock': 10,
        'Discontinued': true
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'NuNuCa Nu\u00df-Nougat-Creme',
        'QuantityPerUnit': '20 - 450 g glasses',
        'UnitsInStock': 76,
        'Discontinued': true
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Pavlova',
        'QuantityPerUnit': '32 - 500 g boxes',
        'UnitsInStock': 29,
        'Discontinued': false
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Schoggi Schokolade',
        'QuantityPerUnit': '100 - 100 g pieces',
        'UnitsInStock': 49,
        'Discontinued': true
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Scottish Longbreads',
        'QuantityPerUnit': '10 boxes x 8 pieces',
        'UnitsInStock': 6,
        'Discontinued': true
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Sir Rodney\'s Marmalade',
        'QuantityPerUnit': '30 gift boxes',
        'UnitsInStock': 40,
        'Discontinued': true
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Sir Rodney\'s Scones',
        'QuantityPerUnit': '24 pkgs. x 4 pieces',
        'UnitsInStock': 3,
        'Discontinued': false
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Tarte au sucre',
        'QuantityPerUnit': '48 pies',
        'UnitsInStock': 17,
        'Discontinued': false
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Teatime Chocolate Biscuits',
        'QuantityPerUnit': '10 boxes x 12 pieces',
        'UnitsInStock': 25,
        'Discontinued': false
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Valkoinen suklaa',
        'QuantityPerUnit': '12 - 100 g bars',
        'UnitsInStock': 65,
        'Discontinued': false
    },
    {
        'CategoryName': 'Confections',
        'ProductName': 'Zaanse koeken',
        'QuantityPerUnit': '10 - 4 oz boxes',
        'UnitsInStock': 36,
        'Discontinued': false
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Camembert Pierrot',
        'QuantityPerUnit': '15 - 300 g rounds',
        'UnitsInStock': 19,
        'Discontinued': true
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Flotemysost',
        'QuantityPerUnit': '10 - 500 g pkgs.',
        'UnitsInStock': 26,
        'Discontinued': true
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Geitost',
        'QuantityPerUnit': '500 g',
        'UnitsInStock': 112,
        'Discontinued': true
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Gorgonzola Telino',
        'QuantityPerUnit': '12 - 100 g pkgs',
        'UnitsInStock': 0,
        'Discontinued': false
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Gudbrandsdalsost',
        'QuantityPerUnit': '10 kg pkg.',
        'UnitsInStock': 26,
        'Discontinued': false
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Mascarpone Fabioli',
        'QuantityPerUnit': '24 - 200 g pkgs.',
        'UnitsInStock': 9,
        'Discontinued': false
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Mozzarella di Giovanni',
        'QuantityPerUnit': '24 - 200 g pkgs.',
        'UnitsInStock': 14,
        'Discontinued': true
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Queso Cabrales',
        'QuantityPerUnit': '1 kg pkg.',
        'UnitsInStock': 22,
        'Discontinued': true
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Queso Manchego La Pastora',
        'QuantityPerUnit': '10 - 500 g pkgs.',
        'UnitsInStock': 86,
        'Discontinued': true
    },
    {
        'CategoryName': 'Dairy Products',
        'ProductName': 'Raclette Courdavault',
        'QuantityPerUnit': '5 kg pkg.',
        'UnitsInStock': 79,
        'Discontinued': true
    },
    {
        'CategoryName': 'Grains/Cereals',
        'ProductName': 'Filo Mix',
        'QuantityPerUnit': '16 - 2 kg boxes',
        'UnitsInStock': 38,
        'Discontinued': false
    },
    {
        'CategoryName': 'Grains/Cereals',
        'ProductName': 'Gnocchi di nonna Alice',
        'QuantityPerUnit': '24 - 250 g pkgs.',
        'UnitsInStock': 21,
        'Discontinued': false
    },
    {
        'CategoryName': 'Grains/Cereals',
        'ProductName': 'Gustaf\'s Kn\u00e4ckebr\u00f6d',
        'QuantityPerUnit': '24 - 500 g pkgs.',
        'UnitsInStock': 104,
        'Discontinued': false
    },
    {
        'CategoryName': 'Grains/Cereals',
        'ProductName': 'Ravioli Angelo',
        'QuantityPerUnit': '24 - 250 g pkgs.',
        'UnitsInStock': 36,
        'Discontinued': false
    },
    {
        'CategoryName': 'Grains/Cereals',
        'ProductName': 'Tunnbr\u00f6d',
        'QuantityPerUnit': '12 - 250 g pkgs.',
        'UnitsInStock': 61,
        'Discontinued': false
    },
    {
        'CategoryName': 'Grains/Cereals',
        'ProductName': 'Wimmers gute Semmelkn\u00f6del',
        'QuantityPerUnit': '20 bags x 4 pieces',
        'UnitsInStock': 22,
        'Discontinued': false
    },
    {
        'CategoryName': 'Meat/Poultry',
        'ProductName': 'P\u00e2t\u00e9 chinois',
        'QuantityPerUnit': '24 boxes x 2 pies',
        'UnitsInStock': 115,
        'Discontinued': false
    },
    {
        'CategoryName': 'Meat/Poultry',
        'ProductName': 'Tourti\u00e8re',
        'QuantityPerUnit': '16 pies',
        'UnitsInStock': 21,
        'Discontinued': true
    },
    {
        'CategoryName': 'Produce',
        'ProductName': 'Longlife Tofu',
        'QuantityPerUnit': '5 kg pkg.',
        'UnitsInStock': 4,
        'Discontinued': true
    },
    {
        'CategoryName': 'Produce',
        'ProductName': 'Manjimup Dried Apples',
        'QuantityPerUnit': '50 - 300 g pkgs.',
        'UnitsInStock': 20,
        'Discontinued': true
    },
    {
        'CategoryName': 'Produce',
        'ProductName': 'Tofu',
        'QuantityPerUnit': '40 - 100 g pkgs.',
        'UnitsInStock': 35,
        'Discontinued': false
    },
    {
        'CategoryName': 'Produce',
        'ProductName': 'Uncle Bob\'s Organic Dried Pears',
        'QuantityPerUnit': '12 - 1 lb pkgs.',
        'UnitsInStock': 15,
        'Discontinued': false
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Boston Crab Meat',
        'QuantityPerUnit': '24 - 4 oz tins',
        'UnitsInStock': 123,
        'Discontinued': false
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Carnarvon Tigers',
        'QuantityPerUnit': '16 kg pkg.',
        'UnitsInStock': 42,
        'Discontinued': false
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Escargots de Bourgogne',
        'QuantityPerUnit': '24 pieces',
        'UnitsInStock': 62,
        'Discontinued': true
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Gravad lax',
        'QuantityPerUnit': '12 - 500 g pkgs.',
        'UnitsInStock': 11,
        'Discontinued': false
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Ikura',
        'QuantityPerUnit': '12 - 200 ml jars',
        'UnitsInStock': 31,
        'Discontinued': true
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Inlagd Sill',
        'QuantityPerUnit': '24 - 250 g  jars',
        'UnitsInStock': 112,
        'Discontinued': false
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Jack\'s New England Clam Chowder',
        'QuantityPerUnit': '12 - 12 oz cans',
        'UnitsInStock': 85,
        'Discontinued': false
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Konbu',
        'QuantityPerUnit': '2 kg box',
        'UnitsInStock': 24,
        'Discontinued': false
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Nord-Ost Matjeshering',
        'QuantityPerUnit': '10 - 200 g glasses',
        'UnitsInStock': 10,
        'Discontinued': true
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'R\u00f6d Kaviar',
        'QuantityPerUnit': '24 - 150 g jars',
        'UnitsInStock': 101,
        'Discontinued': false
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Rogede sild',
        'QuantityPerUnit': '1k pkg.',
        'UnitsInStock': 5,
        'Discontinued': false
    },
    {
        'CategoryName': 'Seafood',
        'ProductName': 'Spegesild',
        'QuantityPerUnit': '4 - 450 g glasses',
        'UnitsInStock': 95,
        'Discontinued': false
    }
];