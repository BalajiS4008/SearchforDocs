import { Column, Columns, Grid, TextAlign } from '@syncfusion/react-grid';
import './employeeDetail.css';
import { useMemo } from 'react';
import { employeeData } from './employeeDetails';

export default function App() {
  // Custom row template to display employee image and details.
  const gridTemplate = (props: typeof employeeData[0]) => {
    const src = `/images/grid/${props['EmployeeID']}.png`;
    return (
      <tr className="templateRow">
        <td className="photo">
          <img src={src} alt={props['EmployeeID'].toString()} />
        </td>
        <td className="details">
          <table className="CardTable" cellPadding={3} cellSpacing={2}>
            <colgroup>
              <col style={{ width: "30%" }} />
              <col style={{ width: "10%" }} />
            </colgroup>
            <tbody>
              <tr>
                <td className="CardHeader">First Name</td>
                <td>:</td>
                <td>{props.FirstName}</td>
              </tr>
              <tr>
                <td className="CardHeader">Last Name</td>
                <td>:</td>
                <td>{props.LastName}</td>
              </tr>
              <tr>
                <td className="CardHeader">Title</td>
                <td>:</td>
                <td>{props.Title}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  };

  return useMemo(() => (
    // Memoized Grid component with rowTemplate for custom layout.
    <div>
      <Grid dataSource={employeeData} rowTemplate={gridTemplate} height={400} className='row-template'>
        <Columns>
          <Column headerText='Employee Image' width='180' textAlign={TextAlign.Center} field='EmployeeID' />
          <Column headerText='Employee Details' width='300' textAlign={TextAlign.Left} field='FirstName' />
        </Columns>
      </Grid>
    </div>
  ), []);
}
