// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const  generateProductDataSource= (): any[] => {
    const result = [];
    for (let i = 0; i < 100; i++) {
        const id = i + 1;
        const products = [
        "Laptop Sleeve", "Webcam", "External SSD", "Smart Watch", 
        "Gaming Mousepad", "Wireless Charger", "Noise Cancelling Earbuds",
        "Portable Speaker", "Desk Lamp", "HDMI Cable", "Laptop Cooling Pad",
        "USB Flash Drive", "Ergonomic Chair", "Monitor Arm", "Keyboard Wrist Rest",
        "Mouse Bungee", "Desk Organizer", "Cable Management Kit", 
        "RGB Mousepad", "USB-C Cable", "Laptop Stand", "Power Bank",
        "Screen Cleaner Kit", "MicroSD Card", "Fitness Tracker", 
        "Smart Thermostat", "Robot Vacuum", "Blender", "Air Fryer",
        "Electric Kettle", "Coffee Maker", "Microwave Oven", 
        "Food Processor", "Stand Mixer", "Pressure Cooker",
        "Smart Light Bulb", "Security Camera", "Doorbell Camera",
        "Smart Plug", "Vaccum Cleaner", "Humidifier", 
        "Fountain Pen", "Leather Notebook", "Desk Calendar",
        "Wall Clock", "Desk Plant", "Book Ends"
        ];
        const quantity= (id % 5 + 1) * 10;  // Multiples of 10 (10-50)
        const mrp = [19.99, 24.99, 29.99, 39.99, 49.99, 59.99, 79.99][id % 7];
        const discount = mrp * 0.1;  // 10% discount
        const taxRate = [5, 3, 8, 2, 9, 1, 4, 7][id % 8];
        const total = quantity * (mrp - discount) * (1 + taxRate/100);
        result.push({
            SNO: id,
            ProductID: `PID-${10000 + id}`,
            ProductName: products[id % products.length],
            Quantity: quantity,
            MRP: parseFloat(mrp.toFixed(2)),
            PriceDiscount: parseFloat(discount.toFixed(2)),
            TaxRate: parseFloat(taxRate.toFixed(2)),
            Total: parseFloat(total.toFixed(2))
        })
    }
    return result;
};