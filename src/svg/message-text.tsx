export const MessageText = ({ color = "#FFFFFF" }: { color?: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.58317 15.8334H7.1665C3.83317 15.8334 2.1665 15.0001 2.1665 10.8334V6.66675C2.1665 3.33341 3.83317 1.66675 7.1665 1.66675H13.8332C17.1665 1.66675 18.8332 3.33341 18.8332 6.66675V10.8334C18.8332 14.1667 17.1665 15.8334 13.8332 15.8334H13.4165C13.1582 15.8334 12.9082 15.9584 12.7498 16.1667L11.4998 17.8334C10.9498 18.5667 10.0498 18.5667 9.49984 17.8334L8.24984 16.1667C8.1165 15.9834 7.80817 15.8334 7.58317 15.8334Z"
      stroke={color}
      strokeWidth={1.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.3335 6.66675H14.6668"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.3335 10.8333H11.3335"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
