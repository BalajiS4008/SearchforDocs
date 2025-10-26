import React from "react";
import { Severity, Toast } from "@syncfusion/react-notifications";
import { Button, Color } from "@syncfusion/react-buttons";
import { CircleInfoIcon,WarningIcon,CircleCloseIcon,CircleCheckIcon} from "@syncfusion/react-icons"
import './App.css';

export default function App() {
  const [activeToast, setActiveToast] = React.useState<string | null>(null);
  
  const overviewLabelRef = React.useRef<HTMLDivElement>(null);
  const handleToastClick = (toastId: string) => {
    if (activeToast === toastId) {
      setActiveToast(null);
    } else {
      setActiveToast(toastId);
    }
  };

  return (
    <div>
      <div className="toast-buttons-container">
        <div className="btn-row">
          <Button 
            className={activeToast === 'info' ? 'e-info active-btn' : ''}
            color={Color.Info}
            onClick={() => handleToastClick('info')}
          >
            {activeToast === 'info' ? "Hide Info" : "Show Info"}
          </Button>
          
          <Button 
            className={activeToast === 'success' ? 'e-success active-btn' : ''}
            color={Color.Success}
            onClick={() => handleToastClick('success')}
          >
            {activeToast === 'success' ? "Hide Success" : "Show Success"}
          </Button>
        </div>
        
        <div className="btn-row">
          <Button 
            className={activeToast === 'warning' ? 'e-warning active-btn' : ''}
            color={Color.Warning}
            onClick={() => handleToastClick('warning')}
          >
            {activeToast === 'warning' ? "Hide Warning" : "Show Warning"}
          </Button>
          
          <Button 
            className={activeToast === 'error' ? 'e-danger active-btn' : ''}
            color={Color.Error}
            onClick={() => handleToastClick('error')}
          >
            {activeToast === 'error' ? "Hide Error" : "Show Error"}
          </Button>
        </div>
      </div>

      <div className="sample-content toast-label-container" ref={overviewLabelRef} id="overview-label-con">
        <Toast
          target='#overview-label-con'
          open={activeToast === 'info'}
          severity={Severity.Info}
          content={'Read the comments carefully'}
          icon={<CircleInfoIcon/>}
          timeout={0}
          width={253}
          position={{ xAxis: 'Center', yAxis: 'Top' }}
        >
        </Toast>
        <Toast
          target='#overview-label-con'
          open={activeToast === 'success'}
          width={253}
          severity={Severity.Success}
          content={'Message sent successfully'}
          icon={<CircleCheckIcon/>}
          timeout={0}
          position={{ xAxis: 'Center', yAxis: 'Top' }}
        >
        </Toast>
        <Toast
          target='#overview-label-con'
          open={activeToast === 'warning'}
          severity={Severity.Warning}
          content={'Check your internet connection'}
          width={253}
          icon={<WarningIcon/>}
          timeout={0}
          position={{ xAxis: 'Center', yAxis: 'Top' }}
        >
        </Toast>
        <Toast
          open={activeToast === 'error'}
          target='#overview-label-con'
          timeout={0}
          content={'The file is corrupted'}
          severity={Severity.Error}
          icon={<CircleCloseIcon/>}
          position={{ xAxis: 'Center', yAxis: 'Top' }}
        >
        </Toast>
      </div>
    </div>
  );
}