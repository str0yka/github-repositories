type ConsoleIconProps = React.ComponentProps<'svg'>;

export const ConsoleIcon: React.FC<ConsoleIconProps> = (props) => (
  <svg
    {...props}
    fill='none'
    height='16'
    viewBox='0 0 16 16'
    width='16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      clipRule='evenodd'
      d='M2.14644 2.97979C2.3417 2.78453 2.65829 2.78453 2.85355 2.97979L7.5202 7.64648C7.71546 7.84174 7.71546 8.15828 7.5202 8.35354L2.85355 13.0202C2.65829 13.2155 2.3417 13.2155 2.14644 13.0202C1.95119 12.8249 1.95119 12.5084 2.14644 12.3131L6.45956 8.00001L2.14644 3.6869C1.95119 3.49164 1.95119 3.17505 2.14644 2.97979Z'
      fill='#7D8590'
      fillRule='evenodd'
    />
    <path
      clipRule='evenodd'
      d='M6.16669 12.6667C6.16669 12.3905 6.39055 12.1667 6.66669 12.1667H13.5C13.7762 12.1667 14 12.3905 14 12.6667C14 12.9428 13.7762 13.1667 13.5 13.1667H6.66669C6.39055 13.1667 6.16669 12.9428 6.16669 12.6667Z'
      fill='#7D8590'
      fillRule='evenodd'
    />
  </svg>
);
