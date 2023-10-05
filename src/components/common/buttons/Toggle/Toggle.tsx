import s from './Toggle.module.css';

interface ToggleProps extends Omit<React.ComponentProps<'button'>, 'type' | 'className'> {}

export const Toggle: React.FC<ToggleProps> = ({ ...props }) => (
  <button
    {...props}
    className={s.toggleContainer}
    type='button'
  >
    <div className={s.toggle} />
  </button>
);
