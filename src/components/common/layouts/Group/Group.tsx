import s from './Group.module.css';

interface GroupProps {
  children?: React.ReactNode;
}

export const Group: React.FC<GroupProps> = ({ children }) => (
  <div className={s.group}>{children}</div>
);
