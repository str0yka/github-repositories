import s from './VisuallyHidden.module.css';

interface VisuallyHiddenProps {
  children: string;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => (
  <span className={s.visuallyHidden}>{children}</span>
);
