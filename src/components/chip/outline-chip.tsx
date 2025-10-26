import { Chip, ChipProps } from '@syncfusion/react-buttons';

export default function App() {
  const fruits: ChipProps[] = [
    { text: 'Primary', value: '1', color: 'Primary' },
    { text: 'Info', value: '2', color: 'Info' },
    { text: 'Error', value: '3', color: 'Error' },
    { text: 'Success', value: '4', color: 'Success' },
    { text: 'Warning', value: '5', color: 'Warning' }
  ];

  return (
    <div className="component-section">
      {fruits.map((chip: ChipProps) => (
        <Chip key={chip.value} text={chip.text} value={chip.value} color={chip.color} variant='Outlined' />
      ))}
    </div>
  );
}