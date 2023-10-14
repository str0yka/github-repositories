interface TickIconProps extends React.ComponentProps<'svg'> {}

export const TickIcon: React.FC<TickIconProps> = (props) => (
  <svg
    {...props}
    aria-hidden='true'
    data-view-component='true'
    height='16'
    version='1.1'
    viewBox='0 0 16 16'
    width='16'
  >
    <path d='M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z' />
  </svg>
);
