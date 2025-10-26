import { Grid, Column, Columns, GridRef, ColumnTemplateProps, SortSettings, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { Button, Variant, IButton, Color } from '@syncfusion/react-buttons';
import { Message, Severity } from '@syncfusion/react-notifications';
import { Dialog } from '@syncfusion/react-popups';
import './restaurantView.css';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { restaurantMenu, MenuItem } from './restaurantDetails';

export default function App() {
  // Ref to access the grid instance.
  const gridRef = React.useRef<GridRef>(null);

  // State to manage selected item, message visibility, dialog, and order ID.
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState('');
  const [orderId, setOrderId] = useState('');
  const buttonRef = useRef<IButton>(null);

  // State to manage sort settings.  
  const [sortSettings] = useState<SortSettings>({enabled: true});

  // Generate random order ID.
  const generateOrderId = useCallback(() => {
    const year = new Date().getFullYear();
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number.
    return `#ORD-${year}-${randomNum}`;
  }, []);

  // Template to render a button that opens the dialog.
  const actionsTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const handleViewClick = () => {
      const item = props?.data as MenuItem;
      setSelectedItem(item);
      setOrderId(generateOrderId());
      setVisible(true);
      setAction('');     
    };

    const handleKeyDown = (args: React.KeyboardEvent) => {
      if (args.key === 'Enter') {
        args.stopPropagation();
        setTimeout(() => {
          (args.target as HTMLElement).closest('td')?.focus();
        }, 0);
      }
    };
      return (
        <Button
          onClick={handleViewClick}
          onKeyDown={handleKeyDown}
        >
          View
        </Button>
      );
    },
    [generateOrderId],
  );

  const closeDialog = () => {
    setVisible(false);
    setOrderId('');
  };

  const handleAction = (actionType: string) => {
    if (actionType === 'placed') {
      setAction('Order placed successfully');
      setIsMessageVisible(true);
    }
    setVisible(false);
  };

  // Auto-close message after 1 second.
  useEffect(() => {
    if (isMessageVisible) {
      const timer = setTimeout(() => {
        setIsMessageVisible(false);
        setAction('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMessageVisible]);

  return (
<div className="restaurant-grid">
      {/* Message component for action status */}
      {isMessageVisible && action && (
        <Message
          severity={Severity.Success}
          closeIcon={true}
          className="status-message"
        >
          {action}
        </Message>
      )}

      <Grid
        ref={gridRef}
        dataSource={restaurantMenu.slice(0, 15)}
        height={300}
        sortSettings={sortSettings}
      >
        <Columns>
          <Column field="ItemID" headerText="Item Code" width={110} />
          <Column field="ItemName" headerText="Dish Name" width={100} clipMode={ClipMode.EllipsisWithTooltip}/>
          <Column field="Price" headerText="Cost" width={80} format="C2" textAlign={TextAlign.Right} />
          <Column field="Category" headerText="Food Type" width={110} />
          <Column field="SpiceLevel" headerText="Spice Level" width={120} />
          <Column field="IsAvailable" headerText="Actions" width={90} textAlign={TextAlign.Center} template={actionsTemplate} />
        </Columns>
      </Grid>
      {selectedItem && (
        <Dialog
          header={`Order: ${selectedItem.ItemName}`}
          modal={true}
          open={visible}
          footer={
            <div className="dialog-footer">
              <Button
                onClick={() => handleAction('canceled')}
                variant={Variant.Standard}
                color={Color.Error}
              >
                Cancel
              </Button>
              <Button
                ref={buttonRef}
                onClick={() => handleAction('placed')}
                variant={Variant.Standard}
                color={Color.Success}
              >
                Place Order
              </Button>
            </div>
          }
          closeIcon={true}
          onClose={closeDialog}
          className="order-dialog"
        >
          <div className="dialog-content">
            <h4 className="order-id">{orderId}</h4>
            <p className="confirmation-text">Confirm your order details below:</p>
            <div className="order-details-container">
              <p><strong>Category:</strong> {selectedItem.Category}</p>
              <p><strong>Price:</strong> ${selectedItem.Price.toFixed(2)}</p>
              <p><strong>Description:</strong> {selectedItem.Description}</p>
              <p><strong>Spice Level:</strong> {selectedItem.SpiceLevel}</p>
              <p><strong>Total:</strong> ${selectedItem.Price.toFixed(2)}</p>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}