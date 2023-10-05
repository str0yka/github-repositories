import s from './Group.module.css';

interface GroupProps {
  children: React.ReactNode;
}

export const Group = ({ children }: GroupProps) => (
  <div className={s.groupContainer}>{children}</div>
);
