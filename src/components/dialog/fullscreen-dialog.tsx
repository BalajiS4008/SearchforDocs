import { Dialog } from '@syncfusion/react-popups';
import { Button, Color, Variant } from '@syncfusion/react-buttons';
import { useState } from 'react';
import './App.css';

export default function App() {
    const [visible, setVisible] = useState(false);

    const reportData = [
        { id: 1, date: '2025-06-01', status: 'Completed', amount: 1250 },
        { id: 2, date: '2025-06-03', status: 'Pending', amount: 850 },
        { id: 3, date: '2025-06-07', status: 'Completed', amount: 1500 },
        { id: 4, date: '2025-06-10', status: 'Cancelled', amount: 720 },
        { id: 5, date: '2025-06-12', status: 'Completed', amount: 2100 },
        { id: 6, date: '2025-06-15', status: 'Completed', amount: 1680 },
        { id: 7, date: '2025-06-18', status: 'Pending', amount: 950 },
        { id: 8, date: '2025-06-22', status: 'Completed', amount: 1850 },
        { id: 9, date: '2025-06-25', status: 'Cancelled', amount: 920 },
        { id: 10, date: '2025-06-28', status: 'Completed', amount: 2400 }
    ];

    const totalAmount = reportData.reduce((sum, item) => sum + item.amount, 0);
    const completedAmount = reportData.filter(item => item.status === 'Completed').reduce((sum, item) => sum + item.amount, 0);
    const pendingAmount = reportData.filter(item => item.status === 'Pending').reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="component-section">
            <Button onClick={() => setVisible(true)} color={Color.Primary}>Open Fullscreen Dialog</Button>

            <Dialog
                header={<h2>June 2025 Sales Report</h2>}
                open={visible}
                onClose={() => setVisible(false)}
                className='fullscreen-dialog'
                fullScreen={true}
                animation={{ effect: 'Zoom', duration: 500, delay: 0 }}
                footer={
                    <div className="dialog-footer">
                        <Button variant={Variant.Standard} onClick={() => setVisible(false)}>Close</Button>
                    </div>
                }
            >
                <div className="fullscreen-content">
                    <div className="report-summary">
                        <div className="summary-card total">
                            <h3>Total Sales</h3>
                            <div className="amount">${totalAmount.toLocaleString()}</div>
                        </div>
                        <div className="summary-card completed">
                            <h3>Completed</h3>
                            <div className="amount">${completedAmount.toLocaleString()}</div>
                        </div>
                        <div className="summary-card pending">
                            <h3>Pending</h3>
                            <div className="amount">${pendingAmount.toLocaleString()}</div>
                        </div>
                    </div>

                    <div className="report-table-container">
                        <h3>Transaction Details</h3>
                        <table className="report-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.date}</td>
                                        <td>{item.status}</td>
                                        <td>${item.amount.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </Dialog>
        </div>
    );
}