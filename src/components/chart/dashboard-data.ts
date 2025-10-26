export const generateInstanceData = () => [
  { instanceID: 'i-1234abcd', type: 't2.micro', publicIP: '52.14.23.103', state: 'Running', health: 'Good' },
  { instanceID: 'i-5678efgh', type: 't2.micro', publicIP: '52.14.24.104', state: 'Running', health: 'Good' },
  { instanceID: 'i-9012ijkl', type: 't2.small', publicIP: '52.14.25.105', state: 'Stopped', health: 'Warning' },
  { instanceID: 'i-3456mnop', type: 't2.medium', publicIP: '52.14.26.106', state: 'Running', health: 'Good' },
  { instanceID: 'i-7890qrst', type: 't2.micro', publicIP: '52.14.27.107', state: 'Running', health: 'Critical' }
];

export const initialCPUData = [
  { x: new Date(2017, 0, 1, 12, 10, 14), y: 21.5 },
  { x: new Date(2017, 0, 1, 12, 10, 15), y: 24.0 },
  { x: new Date(2017, 0, 1, 12, 10, 16), y: 41.3 },
  { x: new Date(2017, 0, 1, 12, 10, 17), y: 49.5 },
  { x: new Date(2017, 0, 1, 12, 10, 18), y: 61.0 },
  { x: new Date(2017, 0, 1, 12, 10, 19), y: 48.6 },
  { x: new Date(2017, 0, 1, 12, 10, 20), y: 39.5 },
  { x: new Date(2017, 0, 1, 12, 10, 21), y: 42.1 },
  { x: new Date(2017, 0, 1, 12, 10, 22), y: 39.5 },
  { x: new Date(2017, 0, 1, 12, 10, 23), y: 42.1 }
];

export const networkInData = [
  { x: new Date(2017, 0, 1, 12, 10, 14), networkIn: 45.2 },
  { x: new Date(2017, 0, 1, 12, 10, 15), networkIn: 38.7 },
  { x: new Date(2017, 0, 1, 12, 10, 16), networkIn: 17.4 },
  { x: new Date(2017, 0, 1, 12, 10, 17), networkIn: 31.8 },
  { x: new Date(2017, 0, 1, 12, 10, 18), networkIn: 45.2 },
  { x: new Date(2017, 0, 1, 12, 10, 19), networkIn: 57.9 },
  { x: new Date(2017, 0, 1, 12, 10, 20), networkIn: 40.5 },
  { x: new Date(2017, 0, 1, 12, 10, 21), networkIn: 30.2 },
  { x: new Date(2017, 0, 1, 12, 10, 22), networkIn: 48.7 },
  { x: new Date(2017, 0, 1, 12, 10, 23), networkIn: 21.4 }
];

export const networkOutData = [
  { x: new Date(2017, 0, 1, 12, 10, 14), networkOut: 52.5 },
  { x: new Date(2017, 0, 1, 12, 10, 15), networkOut: 25.3 },
  { x: new Date(2017, 0, 1, 12, 10, 16), networkOut: 32.1 },
  { x: new Date(2017, 0, 1, 12, 10, 17), networkOut: 41.7 },
  { x: new Date(2017, 0, 1, 12, 10, 18), networkOut: 72.3 },
  { x: new Date(2017, 0, 1, 12, 10, 19), networkOut: 44.2 },
  { x: new Date(2017, 0, 1, 12, 10, 20), networkOut: 86.8 },
  { x: new Date(2017, 0, 1, 12, 10, 21), networkOut: 49.4 },
  { x: new Date(2017, 0, 1, 12, 10, 22), networkOut: 74.5 },
  { x: new Date(2017, 0, 1, 12, 10, 23), networkOut: 57.6 }
];

export const diskOperationsReadData = [
  { x: new Date(2017, 0, 1, 12, 10, 14), read: 21.5 },
  { x: new Date(2017, 0, 1, 12, 10, 15), read: 34.0 },
  { x: new Date(2017, 0, 1, 12, 10, 16), read: 41.3 },
  { x: new Date(2017, 0, 1, 12, 10, 17), read: 59.5 },
  { x: new Date(2017, 0, 1, 12, 10, 18), read: 61.0 },
  { x: new Date(2017, 0, 1, 12, 10, 19), read: 78.6 },
  { x: new Date(2017, 0, 1, 12, 10, 20), read: 39.5 },
  { x: new Date(2017, 0, 1, 12, 10, 21), read: 22.1 },
  { x: new Date(2017, 0, 1, 12, 10, 22), read: 39.5 },
  { x: new Date(2017, 0, 1, 12, 10, 23), read: 12.1 }
];

export const diskOperationsWriteData = [
  { x: new Date(2017, 0, 1, 12, 10, 14), write: 15.0 },
  { x: new Date(2017, 0, 1, 12, 10, 15), write: 18.0 },
  { x: new Date(2017, 0, 1, 12, 10, 16), write: 32.2 },
  { x: new Date(2017, 0, 1, 12, 10, 17), write: 38.5 },
  { x: new Date(2017, 0, 1, 12, 10, 18), write: 45.0 },
  { x: new Date(2017, 0, 1, 12, 10, 19), write: 36.4 },
  { x: new Date(2017, 0, 1, 12, 10, 20), write: 30.2 },
  { x: new Date(2017, 0, 1, 12, 10, 21), write: 33.5 },
  { x: new Date(2017, 0, 1, 12, 10, 22), write: 19.8 },
  { x: new Date(2017, 0, 1, 12, 10, 23), write: 31.6 }
];

export const diskUsageData = [
  { x: 'Root', y: 32, color: '#FF6384' },
  { x: 'Data', y: 64, color: '#36A2EB' },
  { x: 'Logs', y: 16, color: '#FFCE56' },
  { x: 'Backups', y: 48, color: '#4BC0C0' }
];

export const generateDoughnutData = (value: number) => [
  { name: 'Used', value: value },
  { name: 'Free', value: 100 - value }
];