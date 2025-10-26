import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant } from '@syncfusion/react-buttons';
import { Message, Severity } from '@syncfusion/react-notifications';
import { useState } from 'react';

export default function App() {
    const [dialogs, setDialogs] = useState({
        productOpen: false,
        detailsOpen: false,
    });

    const [selectedSize, setSelectedSize] = useState('');
    const [notification, setNotification] = useState('');

    const product = {
        name: "Classic T-Shirt",
        price: "$24.99",
        description: "Comfortable cotton t-shirt with classic fit.",
        availableSizes: ["S", "M", "L", "XL"]
    };

    const toggleDialog = (key: keyof typeof dialogs, value: boolean) => {
        setDialogs(prev => ({ ...prev, [key]: value }));
    };

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
        toggleDialog('detailsOpen', true);
    };

    const handleAddToCart = () => {
        setNotification(`Added ${product.name} (${selectedSize}) to cart!`);
        toggleDialog('detailsOpen', false);
        toggleDialog('productOpen', false);
    };

    const clearNotification = () => {
        setNotification('');
    };

    return (
        <div className="component-section multiple-dialogs">
            <Button onClick={() => toggleDialog('productOpen', true)}>
                Open Multiple Dialog
            </Button>

            {notification &&
                <Message className='dialog-message' severity={Severity.Success} closeIcon={true} onClose={clearNotification} > {notification} </Message>
            }

            <Dialog
                open={dialogs.productOpen}
                onClose={() => toggleDialog('productOpen', false)}
                header={product.name}
                style={{ minWidth: '400px' }}
                footer={
                    <Button
                        variant={Variant.Standard}
                        onClick={() => toggleDialog('productOpen', false)}
                    >
                        Close
                    </Button>
                }
            >
                <div>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p>{product.description}</p>

                    <div style={{ marginTop: '20px' }}>
                        <p><strong>Available Sizes:</strong></p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                            {product.availableSizes.map(size => (
                                <Button key={size} variant={Variant.Standard} onClick={() => handleSizeSelect(size)} > {size} </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </Dialog>

            <Dialog
                open={dialogs.detailsOpen}
                onClose={() => toggleDialog('detailsOpen', false)}
                header="Confirm Selection"
                style={{ zIndex: 1100, minWidth: '350px' }}
                footer={
                    <>
                        <Button variant={Variant.Standard} onClick={() => toggleDialog('detailsOpen', false)} > Cancel </Button>
                        <Button variant={Variant.Standard} onClick={handleAddToCart}  > Add to Cart </Button>
                    </>
                }
            >
                <div >
                    <p>You've selected the following item:</p>
                    <p><strong>{product.name}</strong></p>
                    <p><strong>Size:</strong> {selectedSize}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p style={{margin: '0px'}}>Would you like to add this to your cart?</p>
                </div>
            </Dialog>
        </div>
    );
}