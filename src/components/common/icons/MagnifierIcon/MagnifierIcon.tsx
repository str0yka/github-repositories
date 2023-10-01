type MagnifierIconProps = React.ComponentProps<'svg'>;

export const MagnifierIcon: React.FC<MagnifierIconProps> = (props) => (
  <svg
    {...props}
    fill='none'
    height='16'
    viewBox='0 0 16 16'
    width='16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_1_25)'>
      <path
        clipRule='evenodd'
        d='M11.3595 10.4163C12.1809 9.38932 12.6721 8.08672 12.6721 6.66939C12.6721 3.35417 9.98459 0.666656 6.66939 0.666656C3.35417 0.666656 0.666656 3.35417 0.666656 6.66939C0.666656 9.98459 3.35417 12.6721 6.66939 12.6721C8.08672 12.6721 9.38932 12.1809 10.4163 11.3595L14.1947 15.138C14.4552 15.3985 14.8775 15.3985 15.138 15.138C15.3985 14.8775 15.3985 14.4552 15.138 14.1947L11.3595 10.4163ZM6.66939 11.3449C4.08719 11.3449 1.9939 9.25159 1.9939 6.66939C1.9939 4.08719 4.08719 1.9939 6.66939 1.9939C9.25159 1.9939 11.3449 4.08719 11.3449 6.66939C11.3449 9.25159 9.25159 11.3449 6.66939 11.3449Z'
        fill='#7D8590'
        fillRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_25'>
        <rect
          fill='white'
          height='16'
          width='16'
        />
      </clipPath>
    </defs>
  </svg>
);
