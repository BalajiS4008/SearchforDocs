import { Button, Color, Position, Variant } from '@syncfusion/react-buttons';

export default function App() {
    const closeIcon = (
        <svg viewBox="0 0 24 24" width="12" height="12">
            <path fill="currentColor" d="M10.5858 12.0001L2.58575 4.00003L3.99997 2.58582L12 10.5858L20 2.58582L21.4142 4.00003L13.4142 12.0001L21.4142 20L20 21.4142L12 13.4143L4.00003 21.4142L2.58581 20L10.5858 12.0001Z" />
        </svg>
    );
    const warningIcon = (
        <svg viewBox="0 0 24 28" width="15" height="15">
            <path fill="currentColor" d="M10.2691 2.99378C11.0395 1.66321 12.9605 1.6632 13.7308 2.99378L22.9964 18.9979C23.7683 20.3312 22.8062 22 21.2655 22H2.73444C1.19378 22 0.231653 20.3313 1.00358 18.9979L10.2691 2.99378ZM21.2655 20L12 3.99585L2.73444 20L21.2655 20ZM13 14V9H11V14H13ZM13 16H11V18.5H13V16Z" />
        </svg>
    );
    const infoIcon = (
        <svg viewBox="0 0 24 24" width="12" height="12">
            <path fill="currentColor" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 11V17H11V11H13ZM13 9V7H11V9H13Z" />
        </svg>
    );
    return (
        <div className="component-section sf-align-center gap-10">
                <Button variant={Variant.Filled} color={Color.Warning} icon={warningIcon} iconPosition={Position.Right}>Warning</Button>
                <Button variant={Variant.Outlined} color={Color.Error} icon={closeIcon} aria-label={"Close Button"}></Button>
                <Button variant={Variant.Standard} color={Color.Info} icon={infoIcon} aria-label={"Info Button"}></Button>
        </div>
    );
};