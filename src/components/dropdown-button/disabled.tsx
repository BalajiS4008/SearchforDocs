import { DropDownButton } from '@syncfusion/react-splitbuttons';

export default function App() {
  const cleanIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 0H18C19.1046 0 20 0.895431 20 2V11.5858C20 12.1162 19.7893 12.6249 19.4142 13L13 19.4142C12.6249 19.7893 12.1162 20 11.5858 20H2C0.89543 20 0 19.1046 0 18V11H2V18H11V11H18V2H10V0ZM3.99999 3.58579L1.49997 1.08578L0.0857629 2.5L2.58578 5.00001L0.0857709 7.50002L1.49998 8.91423L4 6.41422L6.5 8.91422L7.91421 7.5L5.41421 5L7.91419 2.50002L6.49998 1.08581L3.99999 3.58579Z" fill="currentColor" />
    </svg>
  );
  const clearIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.89543 0 2 0H16C17.1046 0 18 0.895431 18 2V7.75174C17.3705 7.46693 16.7001 7.25658 16 7.13193V2L2 2V20H7.28755C7.75906 20.7541 8.34555 21.429 9.02248 22H2C0.895431 22 0 21.1046 0 20V2ZM4 6H14V8H4V6ZM4 10H8V12H4V10ZM7 14H4V16H7V14ZM10 15.5C10 14.7043 10.2065 13.9569 10.5689 13.3083C11.3403 14.411 12.7712 16.1583 14.0679 16.1178C14.1667 16.7623 14.4092 17.5534 15.0044 17.5534C15.61 17.5534 15.8505 18.7849 15.9459 19.7627C15.4921 19.9166 15.0058 20 14.5 20C12.0147 20 10 17.9853 10 15.5ZM18.9338 16.2736C18.9773 16.0223 19 15.7638 19 15.5C19 13.5051 17.7019 11.8134 15.9043 11.2235C15.7905 11.8007 15.5413 12.4327 14.9956 12.4327C14.2932 12.4327 14.4138 14.1555 14.5498 15.1913C15.4781 15.0538 17.4046 14.9743 18.9338 16.2736ZM8 15.5C8 11.9101 10.9101 9 14.5 9C18.0899 9 21 11.9101 21 15.5C21 19.0899 18.0899 22 14.5 22C10.9101 22 8 19.0899 8 15.5Z" fill="currentColor" />
    </svg>
  );
  const trashIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0909 0H3.90909L3 1H0V3H16V1H13L12.0909 0ZM1 5H15V19C15 20.6569 13.6569 22 12 22H4C2.34315 22 1 20.6569 1 19V5ZM3 7V19C3 19.5523 3.44772 20 4 20H12C12.5523 20 13 19.5523 13 19V7H3Z" fill="black" />
    </svg>
  )
  const items = [
    { text: 'Ignore', icon: trashIcon },
    { hasSeparator: true },
    { text: 'Clean up converstion', icon: clearIcon },
    { text: 'Clean up Folders', disabled: true, icon: cleanIcon }
  ];
  return (
    <div className='dropdown-center'>
      <DropDownButton items={items} disabled>Delete</DropDownButton>
      <DropDownButton items={items} >Delete</DropDownButton>
    </div>
  );
}