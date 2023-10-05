import s from './Container.module.css';

interface ContainerProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => (
  <div
    {...props}
    className={s.container}
  >
    {children}
  </div>
);
