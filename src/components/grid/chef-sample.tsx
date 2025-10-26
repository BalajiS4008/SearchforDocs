import React, { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import { Grid, Columns, Column, ColumnTemplateProps, GridRef, TextAlign, SortDirection, CellClassProps, CellType } from '@syncfusion/react-grid';
import { foodOrderDetails, RestaurantOrder } from './restaurantOrderDetails';
import './restaurantOrderDetails.css';

export default function App() {
  const gridElementRef = useRef<GridRef>(null);
  const [orders, setOrders] = useState<RestaurantOrder[]>(foodOrderDetails as RestaurantOrder[]);

  const chefs = [
    { ChefId: 'CH001', ChefName: 'Alice Smith' },
    { ChefId: 'CH002', ChefName: 'Bob Johnson' },
    { ChefId: 'CH003', ChefName: 'Michael Lee' },
  ];

  const foodOptions = ['Sushi Roll', 'Lasagna', 'Chicken Curry', 'Falafel Wrap', 'Pancakes'];
  const customerOptions = ['Anna Lee', 'Mark Wilson', 'Sophie Brown', 'Tom Harris', 'Emily Clark'];

  /** 
   * Memoizes the in-progress orders grouped by chef to optimize performance.
   * @returns An object mapping chef IDs to their in-progress orders and chef names.
   */
  const inProgressOrders = useMemo(
    () =>
      orders
        .filter((order) => order.Status === 'in-progress')
        .reduce(
          (acc, order) => {
            if (!acc[order.ChefId]) {
              acc[order.ChefId] = { chefName: order.ChefName, orders: [] };
            }
            acc[order.ChefId].orders.push(order);
            return acc;
          },
          {} as { [key: string]: { chefName: string; orders: RestaurantOrder[] } }
        ),
    [orders]
  );

  /** 
   * Renders the Chef column template, displaying the chef's image and name.
   * @param props - The cell template arguments provided by the grid.
   * @returns A React element with the chef's image and name.
   */
  const chefImageTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const chefId = (props?.data as RestaurantOrder).ChefId;
    const chefName = (props?.data as RestaurantOrder).ChefName;
    return (
      <div className="image chef-info">
        <img
          src={`/images/grid/${chefId}.jpg`}
          alt={`Chef ${chefName}`}
          width={50}
          height={50}
          onError={(e) => (e.currentTarget.src = '/images/grid/placeholder.png')}
        />
        <span>{chefName}</span>
      </div>
    );
  }, []);

  /** 
   * Renders the Status column template, displaying the order status with styled span elements.
   * @param props - The cell template arguments provided by the grid.
   * @returns A React element with a span element indicating the order status.
   */
  const StatusTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const status = (props?.data as RestaurantOrder).Status;
    switch (status) {
      case 'completed':
        return <span className="status-badge status-completed">Food Ready</span>;
      case 'in-progress':
        return <span className="status-badge status-in-progress">Preparing</span>;
      case 'not started':
        return <span className="status-badge status-not-started">Not Started</span>;
      default:
        return <span className="status-badge status-unknown">Unknown Status</span>;
    }
  }, []);

  /** 
   * Renders the Notified column template, displaying an SVG icon based on notification status.
   * @param props - The cell template arguments provided by the grid.
   * @returns A React element with an SVG icon indicating whether the customer was notified.
   */
  const notifyTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const notified = (props?.data as RestaurantOrder).Notified;
    return( notified === 'Yes' ?
      <svg width="18" height="18" className='status-yes' viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8L7 13L18 2" stroke="#205107" strokeWidth="2" strokeLinecap="square"/>
      </svg> :
      <svg width="18" height="18" className='status-no' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="none"/>
        <circle cx="19.5" cy="12" r="2.5" transform="rotate(90 19.5 12)" fill="#01579B"/>
        <circle cx="4.5" cy="12" r="2.5" transform="rotate(90 4.5 12)" fill="#01579B"/>
        <circle cx="12" cy="12" r="2.5" transform="rotate(90 12 12)" fill="#01579B"/>
      </svg>
    )
  }, []);

  const updateStatusesAndAddOrder = () => {
    setOrders(prevOrders => {
      const chefInProgressCount: { [key: string]: number } = {};
      chefs.forEach(chef => {
        chefInProgressCount[chef.ChefId] = prevOrders.filter(
          order => order.ChefId === chef.ChefId && order.Status === 'in-progress'
        ).length;
      });
  
      const chefsAvailableForWork = new Set<string>();
      chefs.forEach(chef => {
        if (chefInProgressCount[chef.ChefId] === 0) {
          chefsAvailableForWork.add(chef.ChefId);
        }
      });
  
      const chefsGivenWork = new Set<string>();
      const updatedOrders = prevOrders.map(order => {
        if (order.Status === 'in-progress') {
          return { ...order, Status: 'completed', Notified: 'Yes' };
        } else if (
          order.Status === 'not started' &&
          chefsAvailableForWork.has(order.ChefId) &&
          !chefsGivenWork.has(order.ChefId)
        ) {
          chefsGivenWork.add(order.ChefId);
          return { ...order, Status: 'in-progress', Notified: 'No' };
        }
        return order;
      });
  
      const orderCount = updatedOrders.length + 1;
      const newOrderNumber = `ORD${orderCount.toString().padStart(3, '0')}`;
  
      const chefOrderCounts = chefs.map(chef => ({
        ...chef,
        orderCount: updatedOrders.filter(order => order.ChefId === chef.ChefId).length,
      }));
      const selectedChef = chefOrderCounts.reduce((min, chef) =>
        chef.orderCount < min.orderCount ? chef : min
      );
  
      const orderTime1 = new Date();
      const estimatedTime1 = new Date(orderTime1.getTime());
      estimatedTime1.setMinutes(estimatedTime1.getMinutes() + 10);
  
      const minutes = estimatedTime1.getMinutes();
      const roundedMinutes = Math.round(minutes / 5) * 5;
      estimatedTime1.setMinutes(roundedMinutes);
  
      const newOrder: RestaurantOrder = {
        OrderNumber: newOrderNumber,
        ChefId: selectedChef.ChefId,
        ChefName: selectedChef.ChefName,
        Status: 'not started',
        FoodName: foodOptions[Math.floor(Math.random() * foodOptions.length)],
        CustomerName: customerOptions[Math.floor(Math.random() * customerOptions.length)],
        Notified: 'No',
        OrderTime: orderTime1,
        EstimatedTime: estimatedTime1,
      };
  
      return [...updatedOrders, newOrder];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateStatusesAndAddOrder();
    }, 5000);
    return () => clearInterval(interval);
  }, [orders]);

  return (
    <div className="food-order-container">
      <div className="food-order-banner">
        {chefs.map((chef) => (
          <div key={chef.ChefId} className="food-order-chef-card">
            <img
              src={`/images/grid/${chef.ChefId}.jpg`}
              alt={`Chef ${chef.ChefName}`}
              className="food-order-chef-image"
              onError={(e) => (e.currentTarget.src = '/images/grid/placeholder.png')}
            />
            <h3 className="food-order-chef-name">{chef.ChefName}</h3>
            {inProgressOrders[chef.ChefId]?.orders.length > 0 ? (
              <h4 className="food-preparing-orders">Preparing Orders</h4>
            ) : (
              <h4 className="food-preparing-orders">Awaiting new orders</h4>
            )}
            {inProgressOrders[chef.ChefId]?.orders.length > 0 ? (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {inProgressOrders[chef.ChefId].orders.map((order) => (
                  <li key={order.OrderNumber} className="food-order-item">
                    <div><strong>Order: {order.OrderNumber} </strong></div>
                    <div><strong>Food:</strong> {order.FoodName}</div>
                    <div><strong>Customer:</strong> {order.CustomerName}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <div style={{marginTop: "20px"}}>
                <img
                  src={`/images/grid/order-waiting.png`}
                  alt={'waiting'}
                  width={50}
                  height={50}
                  onError={(e) => (e.currentTarget.src = '/images/grid/placeholder.png')}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {useMemo(
        /** 
         * Memoized Grid component to prevent unnecessary re-renders.
         * @returns The Syncfusion Grid component with configured columns and templates.
         */
        () => (
          <Grid
            ref={gridElementRef}
            dataSource={orders}
            sortSettings={{enabled: true, columns: [{ field: 'Status', direction: SortDirection.Descending }] }}
            className="food-order"
            onClick={(e)=>{e.preventDefault()}}
            pageSettings={{enabled: true,pageSize: 6}}
            enableHover={false}
            selectionSettings={{ enabled: false }}
            allowKeyboard={false}
          >
            <Columns>
              <Column field="ChefId" headerText=" " width={150} template={chefImageTemplate} textAlign={TextAlign.Left} allowSort={false} />
              <Column field="OrderNumber" headerText="Order" width={80} isPrimaryKey={true} textAlign={TextAlign.Right} allowSort={false}/>
              <Column field="OrderTime" headerText="Order Time" width={100}  format={{ type: 'dateTime', format: 'HH:mm a' }}  textAlign={TextAlign.Right} allowSort={false} />
              <Column field="EstimatedTime" headerText="Estimated Time" width={110} format={{ type: 'dateTime', format: 'HH:mm a' }} textAlign={TextAlign.Right} allowSort={false} />
              <Column field="Status" cellClass={(props?: CellClassProps) => {return props?.cellType === CellType.Header ? 'status-column' : ''}} headerText="Status" width={110} template={StatusTemplate} textAlign={TextAlign.Center} />
              <Column field="Notified"  headerText="Notified" width={70} textAlign="Center" template={notifyTemplate} allowSort={false} />
            </Columns>
          </Grid>
        ),
        [orders, chefImageTemplate, StatusTemplate, notifyTemplate]
      )}
    </div>
  );
}